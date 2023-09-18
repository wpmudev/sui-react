import React, { useState, useEffect, useRef, HTMLProps } from "react"
import { generateCN } from "@wpmudev/sui-utils"
import {
	InteractionTypes,
	useInteraction,
	useOuterClick,
} from "@wpmudev/sui-hooks"

import { Dropdown } from "../elements/select-dropdown"
import { Selected, SelectedSearch } from "../elements/select-selected"
import {
	SearchDropdown,
	RemoveAll,
	SelectAll,
	RemoveSelection,
	MultiSelectSearch,
} from "../utils/functions"

/**
 * This interface defines the props for the SelectBase component.
 * It extends the Omit utility to remove 'onMouseLeave' and 'onMouseEnter' properties
 * from the HTMLProps<HTMLDivElement> type.
 */
interface SelectBaseProps
	extends Omit<HTMLProps<HTMLDivElement>, "onMouseLeave" | "onMouseEnter"> {
	/** Unique ID */
	id: string
	/** An array of options for the select */
	options: Record<string, any>[]
	/** Additional CSS class name for styling */
	className?: string
	/** Current selected option */
	selected?: Record<string, any> | string
	/** Label for the select component */
	label?: string
	/** Whether the select is disabled or not */
	isDisabled?: boolean
	/** Whether the select is displayed in a small size */
	isSmall?: boolean
	/** Whether the select has an error state */
	isError?: boolean
	/** Whether the select allows multiple selections */
	isMultiSelect?: boolean
	/** Whether the select has a search functionality */
	isSearchable?: boolean

	/**
	 * Event handler for mouse enter event.
	 * It is of type Pick<InteractionTypes, "onMouseEnter">, which means it selects
	 * the "onMouseEnter" property from the "InteractionTypes" type.
	 */
	onMouseEnter?: Pick<InteractionTypes, "onMouseEnter">
	/**
	 * Event handler for mouse leave event.
	 * It is of type Pick<InteractionTypes, "onMouseLeave">, which means it selects
	 * the "onMouseLeave" property from the "InteractionTypes" type.
	 */
	onMouseLeave?: Pick<InteractionTypes, "onMouseLeave">
	/**
	 * Pass selected item to parent component
	 *
	 * @param {Record<string, any> | Record<string, any>[]} option option or options list
	 */
	onChange?(option: Record<string, any> | Record<string, any>[]): void
}

const Select: React.FC<SelectBaseProps> = ({
	id,
	options,
	className,
	selected = undefined,
	label = "Select",
	isDisabled = false,
	isSmall = false,
	isError = false,
	isMultiSelect = false,
	isSearchable = false,
	onChange,
	...props
}) => {
	if (!id) {
		throw new Error(
			'Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n',
		)
	}

	if (!options) {
		throw new Error(
			'Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Select\n\nThe parameter "options" in the "Select" component is required and should be array.\n\n',
		)
	}

	// Define states.
	const [isHovered, isFocused, interactionMethods] = useInteraction({
		onMouseLeave: props.onMouseLeave,
		onMouseEnter: props.onMouseEnter,
	} as InteractionTypes)

	// set ref to dropdown.
	const ref = useRef<HTMLDivElement | null>(null)

	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
	const [items, setItems] = useState<Record<string, any>[]>(options)
	const [filteredItems, setFilteredItems] = useState(options)
	const [selectedItem, setSelectedItems] = useState<
		Record<string, any> | string | undefined
	>(selected)

	// Hide dropdown when click outside of it
	useOuterClick(ref, () => {
		setIsDropdownOpen(false)
	})

	useEffect(() => {
		setSelectedItems(selected)
	}, [selected])

	// UseEffect function to handle change in items
	useEffect(() => {
		const updatedItems = items.map((option) => {
			const filterItem = filteredItems.find(
				(filterOpt) => filterOpt.id === option.id,
			)
			if (filterItem) {
				return { ...filterItem }
			}
			return option
		})
		const filteredItemList = updatedItems.filter((option) => option?.isSelected)
		const currentItems = filteredItemList.length > 0 ? filteredItemList : label

		if (isMultiSelect) {
			updateItem(currentItems ?? "")
		} else if (currentItems?.length) {
			// Select the first item
			const item = currentItems?.[0]
			if (item && item.id) updateItem(item)
		}
		setItems(updatedItems)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filteredItems])

	const classNames = generateCN(
		"sui-select",
		{
			sm: isSmall,
			open: isDropdownOpen,
			disabled: isDisabled,
			hover: isHovered,
			focus: isFocused,
			error: isError,
			multiselect: isMultiSelect,
			searchable: isSearchable,
		},
		className,
	)

	// Select search function.
	const handleSearchDropdown = (event) => {
		const searchValue = event.target.value.toLowerCase()
		setIsDropdownOpen(true)
		SearchDropdown(searchValue, items, setFilteredItems)
	}

	// Multiselect search function.
	const handleMultiSelectSearch = (event) => {
		const searchValue = event.target.value.toLowerCase()
		setIsDropdownOpen(true)
		MultiSelectSearch(searchValue, items, setFilteredItems)
	}

	// Main wrapper props.
	const selectProps = {
		className: classNames,
		ref,
		...interactionMethods,
		// onBlurCapture: () => set.focus(false),
	}

	/**
	 * Update Item
	 *
	 * @param {string|number|Object} option Option ID or object
	 */
	const updateItem = (option) => {
		setSelectedItems(option)
		if (onChange) {
			onChange(option)
		}
	}

	const updateSelected = (optionId: number | string) => {
		const optionIndex = filteredItems.findIndex(
			(option) => option.id === optionId,
		)
		const updatedItems = [...filteredItems]
		const isSelected = updatedItems[optionIndex].isSelected
		if (!isMultiSelect) {
			updatedItems.forEach((option) => (option.isSelected = false))
			updatedItems[optionIndex].isSelected = true
			setFilteredItems(updatedItems)
			setIsDropdownOpen(false)
		} else {
			updatedItems[optionIndex].isSelected = !isSelected
			setFilteredItems(updatedItems)
		}
	}

	// Header props
	const headerProps = {
		id,
		expanded: isDropdownOpen,
		selected: selectedItem,
		arrow: isDropdownOpen ? "chevron-up" : "chevron-down",
		selectLabel: label,
		isSmall,
		dropdownToggle: () => setIsDropdownOpen(!isDropdownOpen),
		clearSelection: () => {
			RemoveAll(updateItem, items, setFilteredItems)
		},
		...(isSearchable && {
			disabled: isDisabled,
			dropdownItems: filteredItems,
			onChange: (e) => {
				handleSearchDropdown(e)
				updateItem({
					...selectedItem,
					label: e.target.value,
				})
			},
			onEvent: (optionId: number | string) => updateSelected(optionId),
		}),
		...(isMultiSelect && {
			isMultiSelect,
			removeSelection: (optionId: number | string) => {
				RemoveSelection(optionId, filteredItems, setFilteredItems)
			},
		}),
		...props,
	}

	// Dropdown props
	const dropdownProps = {
		options: filteredItems,
		selected: selectedItem,
		isSmall,
		onEvent: (optionId: number | string) => updateSelected(optionId),
		...(isMultiSelect && {
			isMultiSelect,
			selectAll: () => {
				SelectAll(filteredItems, setFilteredItems)
			},
			onChange: (e) => {
				handleMultiSelectSearch(e)
			},
		}),
		...props,
	}

	// Render component
	return (
		<div {...selectProps}>
			{!isSearchable && <Selected {...headerProps} />}
			{isSearchable && <SelectedSearch {...headerProps} />}
			{isDropdownOpen && <Dropdown {...dropdownProps} />}
		</div>
	)
}

export { Select, SelectBaseProps }
