import React, {
	Children,
	cloneElement,
	ReactElement,
	useCallback,
	useId,
} from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { CheckboxProvider, useCheckbox } from "./checkbox-context"
import {
	_CheckboxGroupInnerProps,
	CheckboxGroupProps,
	CheckBoxItemsList,
} from "./checkbox.types"

import { Checkbox } from "./checkbox"

// _CheckboxGroupInner is a component handling the behavior of a group of checkboxes
const _CheckboxGroupInner = (props: _CheckboxGroupInnerProps) => {
	// Destructure props for easier access
	const { hasSubItems, title, children, commonCheckboxProps, isInline } = props

	// Access checkbox context methods and items
	const { items, setItems } = useCheckbox()

	// unique id to be used in diffrent places
	const uuid = useId()

	// Generate a unique ID for the checkbox group
	const id = `sui-checkbox-group-${uuid}`

	// Define CSS class names for the checkbox group
	const className = generateCN("sui-checkbox__group", {
		nested: hasSubItems,
		inline: isInline,
	})

	// Filter items belonging to the current group
	const group = items.filter((item) => item.groupId === id)

	// Count checked items in the group
	const checkedItemsCount = group?.filter((i) => i.isChecked).length
	// Determine if all items in the group are checked
	const allChecked = checkedItemsCount === group.length
	// Check if any item in the group is checked
	const hasCheckedItems = checkedItemsCount > 0

	/**
	 * Handle onChange for group checkbox item
	 */
	const onCheckboxChange = useCallback(() => {
		const toUpdate: CheckBoxItemsList = []

		items.forEach((item) => {
			// If the item is not from the same group, push it as is and continue
			if (item.groupId !== id) {
				toUpdate.push(item)
				return
			}

			toUpdate.push({
				...item,
				isChecked: !allChecked || (!allChecked && checkedItemsCount > 0),
			})
		})

		setItems([...toUpdate])
	}, [items, allChecked, checkedItemsCount, id, setItems])

	// Render the checkbox group
	return (
		<div className={className}>
			{/* Render a checkbox for the group if it has sub-items */}
			{hasSubItems && (
				<Checkbox
					{...commonCheckboxProps}
					id={id}
					// name={id}
					label={(title as string) ?? ""}
					isChecked={allChecked && hasCheckedItems}
					onChange={onCheckboxChange}
					isIndeterminate={
						!hasCheckedItems ? false : hasCheckedItems && !allChecked
					}
				/>
			)}
			{/* Render children checkboxes */}
			<div className="sui-checkbox__group-body">
				{Children.map(children, (child, index) => {
					// Generate a unique ID for the child checkbox
					const checkboxId = `sui-checkbox-item-${uuid}-${index}`

					// Find the current item based on ID and group
					const currItem = items.find(
						(i) => i.id === checkboxId && i.groupId === id,
					)

					// Clone the child element and pass necessary props
					return cloneElement(
						child as ReactElement,
						{
							...commonCheckboxProps,
							groupId: id,
							id: checkboxId,
							isChecked: !!currItem?.isChecked,
						} as object,
					)
				})}
			</div>
		</div>
	)
}

// CheckboxGroup is a component handling the behavior of a group of checkboxes
const CheckboxGroup = ({
	children,
	title = "",
	hasSubItems = false,
	isInline = false,
	commonCheckboxProps = {},
	onChange = () => {},
	_isMultiGroup = false,
}: CheckboxGroupProps) => {
	// Function to conditionally wrap content with CheckboxProvider for managing checkbox state
	const withWrapper = (content: ReactElement | null = null) => {
		// If it's not a multi-group, wrap the content with CheckboxProvider
		if (!_isMultiGroup) {
			return <CheckboxProvider onChange={onChange}>{content}</CheckboxProvider>
		}

		// If it's a multi-group, return the content as is
		return content
	}

	// Wrap the inner content with CheckboxProvider if necessary
	return withWrapper(
		<_CheckboxGroupInner
			title={title}
			commonCheckboxProps={commonCheckboxProps}
			hasSubItems={hasSubItems ?? false}
			isInline={isInline ?? false}
		>
			{children}
		</_CheckboxGroupInner>,
	)
}

export { CheckboxGroup }
