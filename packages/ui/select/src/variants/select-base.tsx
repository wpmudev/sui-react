import React, {
	useState,
	useEffect,
	useRef,
	HTMLProps,
	ChangeEvent,
	useId,
} from "react"
import {
	SuiStyleType,
	generateCN,
	_renderHTMLPropsSafely,
	SuiHTMLAttributes,
} from "@wpmudev/sui-utils"
import {
	InteractionTypes,
	useInteraction,
	useOuterClick,
	usePrevious,
	useStyles,
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

export type SelectOptionType =
	| Record<string, any>
	| Record<string, any>[]
	| string
	| undefined

/**
 * This interface defines the props for the SelectBase component.
 * It extends the Omit utility to remove 'onMouseLeave' and 'onMouseEnter' properties
 * from the HTMLProps<HTMLDivElement> type.
 */
interface SelectBaseProps
	extends Omit<
			HTMLProps<HTMLDivElement>,
			| "onMouseLeave"
			| "onMouseEnter"
			| "selected"
			| "height"
			| "content"
			| "translate"
			| "width"
			| "color"
		>,
		SuiStyleType,
		SuiHTMLAttributes {
	/** Unique ID */
	id?: string
	/** An array of options for the select */
	options?: Record<string, any>[]
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
	/** Add a custom width in pixels  */
	customWidth?: number
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
	onChange?(option: SelectOptionType): void
}

const Select: React.FC<SelectBaseProps> = ({
	id,
	options,
	className,
	selected,
	label = "select",
	isDisabled = false,
	isSmall = false,
	isError = false,
	isMultiSelect = false,
	isSearchable = false,
	onMouseEnter = () => null,
	onMouseLeave = () => null,
	customWidth,
	onChange,
	_style = {},
	_htmlProps = {},
	...props
}) => {
	const uniqueId = useId()

	if (!id) {
		id = `select-${uniqueId}`
	}

	if (!options) {
		options = [
			{ id: "option-1", label: "Option 1" },
			{ id: "option-2", label: "Option 2" },
			{ id: "option-3", label: "Option 3" },
		]
	}

	// set ref to dropdown.
	const ref = useRef<HTMLDivElement | null>(null)
	const controlRef = useRef<HTMLDivElement | HTMLInputElement | null>(null)

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

	// update options
	useEffect(() => {
		setItems(options ?? [])
	}, [options])

	// hold isDropdownOpen's previous val
	const prevIsDropdownOpen = usePrevious(isDropdownOpen)

	// focus when dropdown closed
	useEffect(() => {
		if (
			!!controlRef?.current &&
			"undefined" !== typeof prevIsDropdownOpen &&
			prevIsDropdownOpen !== isDropdownOpen &&
			!isDropdownOpen
		) {
			controlRef?.current?.focus()
		}
	}, [isDropdownOpen, prevIsDropdownOpen])

	// Define states.
	const [isHovered, isFocused, interactionMethods] = useInteraction({
		onMouseLeave,
		onMouseEnter,
	} as InteractionTypes)

	// UseEffect function to handle change in items
	useEffect(() => {
		const updatedItems = items.map((option) => {
			const filterItem = filteredItems.find((opt) => opt.id === option.id)
			return filterItem ? { ...filterItem } : option
		})

		const filteredItemList = updatedItems.filter((option) => option?.isSelected)

		const currentItems = filteredItemList.length > 0 ? filteredItemList : label

		if (isMultiSelect) {
			updateItem(filteredItemList)
		} else if (currentItems?.length) {
			// Select the first item
			const item = currentItems?.[0]
			// @ts-ignore: improve
			if (item && item.id) updateItem(item)
		}
		setItems(updatedItems)
	}, [filteredItems])

	const { suiInlineClassname } = useStyles(_style, className)

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
		suiInlineClassname,
	)

	// Select search function.
	const handleSearchDropdown = (event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value.toLowerCase()
		setIsDropdownOpen(true)
		SearchDropdown(searchValue, items, setFilteredItems)
	}

	// Multiselect search function.
	const handleMultiSelectSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value.toLowerCase()
		setIsDropdownOpen(true)
		MultiSelectSearch(searchValue, items, setFilteredItems)
	}

	// Main wrapper props.
	const selectProps = {
		className: classNames,
		ref,
		...(customWidth && { style: { maxWidth: `${customWidth}px` } }),
		// onBlurCapture: () => set.focus(false),
	}

	/**
	 * Update Item
	 *
	 * @param {string|number|Object} option Option ID or object
	 */
	const updateItem = (option: Record<string, any> | string | undefined) => {
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
		controlRef,
		expanded: isDropdownOpen,
		selected: selectedItem,
		selectLabel: label,
		isSmall,
		dropdownToggle: () => setIsDropdownOpen(!isDropdownOpen),
		clearSelection: () => {
			RemoveAll(updateItem, items, setFilteredItems)
		},
		...(!isSearchable && {
			arrow: isDropdownOpen ? "ChevronUp" : "ChevronDown",
		}),
		...(isSearchable && {
			disabled: isDisabled,
			dropdownItems: filteredItems,
			onChange: (e: ChangeEvent<HTMLInputElement>) => {
				handleSearchDropdown(e)
				updateItem({
					...(selectedItem as Record<string, any>),
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
		..._renderHTMLPropsSafely(_htmlProps),
	}

	// Dropdown props
	const dropdownProps = {
		options: filteredItems,
		selected: selectedItem,
		isSmall,
		...(isMultiSelect && {
			isMultiSelect,
			selectAll: () => {
				SelectAll(filteredItems, setFilteredItems)
			},
			onChange: (e: ChangeEvent<HTMLInputElement>) => {
				handleMultiSelectSearch(e)
			},
		}),
		...props,
		..._renderHTMLPropsSafely(_htmlProps),
	}

	// Render component
	return (
		<div {...selectProps} data-check="check" data-testid="select">
			{!isSearchable && (
				// @ts-ignore
				<Selected {...headerProps} interactionMethods={interactionMethods} />
			)}
			{isSearchable && (
				// @ts-ignore
				<SelectedSearch
					{...headerProps}
					interactionMethods={interactionMethods}
				/>
			)}
			{isDropdownOpen && (
				// @ts-ignore
				<Dropdown
					{...dropdownProps}
					onEvent={(optionId: number | string) => {
						updateSelected(optionId)
					}}
				/>
			)}
		</div>
	)
}

export { Select }
export type { SelectBaseProps }
