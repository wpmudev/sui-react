import React, {
	Children,
	cloneElement,
	ReactElement,
	useCallback,
	useId,
	useState,
	useEffect,
} from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"

import { CheckboxProvider, useCheckbox } from "./checkbox-context"
import {
	_CheckboxGroupInnerProps,
	CheckboxGroupProps,
	CheckBoxItemsList,
} from "./checkbox.types"

import { Checkbox } from "./checkbox"

// _CheckboxGroupInner is a component handling the behavior of a group of checkboxes
const _CheckboxGroupInner = ({
	hasSubItems,
	title,
	children,
	commonCheckboxProps,
	isInline,
	id,
	_style,
}: _CheckboxGroupInnerProps) => {
	// Destructure props for easier access

	// Track the first render of the component
	const [isFirstRender, setIsFirstRender] = useState(true)

	// Access checkbox context methods and items
	const { items, setItems, addToList } = useCheckbox()

	// unique id to be used in different places
	const uuid = useId()

	const { suiInlineClassname } = useStyles(_style)

	// Generate a unique ID for the checkbox group
	const checkboxGroupId = id ?? `sui-checkbox-group-${uuid}`

	// Define CSS class names for the checkbox group
	const className = generateCN(
		"sui-checkbox__group",
		{
			nested: hasSubItems,
			inline: isInline,
		},
		suiInlineClassname,
	)

	// Filter items belonging to the current group
	const group = items.filter((item) => item.groupId === checkboxGroupId)

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
			if (item.groupId !== checkboxGroupId) {
				toUpdate.push(item)
				return
			}

			toUpdate.push({
				...item,
				isChecked: !allChecked || (!allChecked && checkedItemsCount > 0),
			})
		})

		setItems([...toUpdate])
	}, [items, allChecked, checkedItemsCount, checkboxGroupId, setItems])

	useEffect(() => {
		// Update isFirstRender state after first render
		setIsFirstRender(false)
	}, [])

	// Render the checkbox group
	return (
		<div className={className}>
			{/* Render a checkbox for the group if it has sub-items */}
			{hasSubItems && (
				<Checkbox
					{...commonCheckboxProps}
					id={checkboxGroupId}
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
					// initial checkbox id prop provided by user
					const chekboxInitialId = (child as ReactElement)?.props?.id

					// initial "isChecked" prop provided by user
					const initialIsChecked = (child as ReactElement)?.props?.isChecked

					// Use initial id defined by user or generate a unique ID for the child checkbox
					const checkboxId =
						chekboxInitialId || `sui-checkbox-item-${uuid}-${index}`

					// Find the current item based on ID and group
					const currItem = items.find(
						(i) => i.id === checkboxId && i.groupId === checkboxGroupId,
					)

					// Clone the child element and pass necessary props
					return cloneElement(
						child as ReactElement,
						{
							...commonCheckboxProps,
							id: checkboxId,
							// Individual checkbox props should override: common props and id
							...(child as ReactElement)?.props,
							groupId: checkboxGroupId,
							key: `checkbox-group-item-${index}`,
							// On First render we should use the initial isChecked value
							isChecked: isFirstRender
								? initialIsChecked
								: !!currItem?.isChecked,
						} as object,
					)
				})}
			</div>
		</div>
	)
}

// CheckboxGroup is a component handling the behavior of a group of checkboxes
const CheckboxGroup = ({
	id,
	children,
	title = "group title",
	hasSubItems = true,
	isInline = false,
	commonCheckboxProps = {},
	onChange = () => {},
	_isMultiGroup = false,
	...styleProps
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
			id={id}
			title={title}
			commonCheckboxProps={commonCheckboxProps ?? {}}
			hasSubItems={hasSubItems ?? false}
			isInline={isInline ?? false}
			{...styleProps}
		>
			{children}
		</_CheckboxGroupInner>,
	)
}

export { CheckboxGroup }
