import React, {
	useState,
	useEffect,
	useRef,
	HTMLProps,
	ChangeEvent,
	useId,
} from "react"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
import {
	InteractionTypes,
	useInteraction,
	useOuterClick,
	usePrevious,
	useStyles,
} from "@wpmudev/sui-hooks"
import { DropdownRefProps } from "@wpmudev/sui-dropdown"

import { SelectBaseProps, SelectOptionType } from "./select.types"
import { Dropdown } from "./elements/select-dropdown"
import { Selected, SelectedSearch } from "./elements/select-selected"
import {
	SearchDropdown,
	RemoveAll,
	SelectAll,
	RemoveSelection,
	MultiSelectSearch,
} from "./utils/functions"

const Select: React.FC<SelectBaseProps> = ({
	id,
	options,
	className,
	selected,
	label = "Select option",
	isDisabled = false,
	isSmall = false,
	isError = false,
	isMultiSelect = false,
	isSearchable = false,
	onMouseEnter = () => null,
	onMouseLeave = () => null,
	customWidth,
	onChange,
	resetValidation,
	validateOnMount,
	validate,
	_style = {},
	_htmlProps = {},
	_dropdownProps = {},
}) => {
	const uniqueId = useId()

	if (!id) {
		id = `select-${uniqueId}`
	}

	// set ref to dropdown.
	const ref = useRef<HTMLDivElement | null>(null)
	const controlRef = useRef<HTMLDivElement | HTMLInputElement | null>(null)
	const dropdownRef = useRef<DropdownRefProps | null>(null)

	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
	const [items, setItems] = useState<SelectOptionType[]>(options ?? [])
	const [filteredItems, setFilteredItems] = useState<SelectOptionType[]>(
		options ?? [],
	)
	const [selectedItem, setSelectedItems] = useState<
		Record<string, any> | string | undefined | SelectOptionType
	>(selected)

	useEffect(() => {
		setItems(options ?? [])
		setFilteredItems(options ?? [])
	}, [options])

	// Hide dropdown when click outside of it
	useOuterClick(ref, () => {
		dropdownRef.current?.close()
	})

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		dropdownRef.current?.open()
		SearchDropdown(searchValue, items, setFilteredItems)
	}

	// Multiselect search function.
	const handleMultiSelectSearch = (value: string) => {
		const searchValue = value
		dropdownRef.current?.open()
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
	const updateItem = (option: SelectOptionType | SelectOptionType[]) => {
		setSelectedItems(option)

		// validate the option
		if (validate) {
			validate(option)
		}

		// onChange callback
		if (onChange) {
			onChange(option)
		}
	}

	// validation on mount
	useEffect(() => {
		if (validate && validateOnMount) {
			validate(selectedItem)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const updateSelected = (optionObj: SelectOptionType) => {
		if (!options) {
			setSelectedItems(optionObj)
			dropdownRef.current?.close()
			return
		}

		const optionIndex = filteredItems.findIndex(
			(option) => option.id === optionObj.id,
		)
		const updatedItems = [...filteredItems]
		const isSelected = updatedItems[optionIndex]?.isSelected

		if (!isMultiSelect) {
			updatedItems.forEach((option) => (option.isSelected = false))
			updatedItems[optionIndex] = {
				...updatedItems[optionIndex],
				isSelected: true,
			}
			setFilteredItems(updatedItems)
			dropdownRef.current?.close()
		} else {
			updatedItems[optionIndex] = {
				...updatedItems[optionIndex],
				isSelected: !isSelected,
			}
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
		clearSelection: () => {
			RemoveAll(updateItem, items, setFilteredItems)
		},
		...(!isSearchable && {
			dropdownToggle: () => {
				dropdownRef.current?.toggle()
			},
			arrow: isDropdownOpen ? "ChevronUp" : "ChevronDown",
		}),
		...(isSearchable && {
			disabled: isDisabled,
			dropdownItems: filteredItems,
			onChange: (e: ChangeEvent<HTMLInputElement>) => {
				handleSearchDropdown(e)
				updateItem({
					...(selectedItem as SelectOptionType),
					label: e.target.value,
				})
			},
			onEvent: (optionId: SelectOptionType) => updateSelected(optionId),
			onClick: () => {
				dropdownRef.current?.toggle()
			},
		}),
		...(isMultiSelect && {
			isMultiSelect,
			removeSelection: (optionId: number | string) => {
				RemoveSelection(optionId, filteredItems, setFilteredItems)
			},
		}),
	}

	// Dropdown props
	const dropdownProps = {
		options: filteredItems,
		selected: selectedItem,
		isSmall,
		onChange,
		...(isSearchable && {
			isSearchable,
			options: filteredItems.map((option) => ({
				...option,
				searchLabel: option.label,
			})),
		}),
		...(isMultiSelect && {
			isMultiSelect,
			options: filteredItems.map((option) => ({
				...option,
				props: {
					_checkboxProps: { isSmall },
				},
			})),
			selectAll: () => {
				SelectAll(filteredItems, setFilteredItems)
			},
			onSearch: (value: string) => {
				handleMultiSelectSearch(value)
			},
		}),
		_dropdownProps,
	}

	// Render component
	return (
		<div
			{...selectProps}
			data-check="check"
			data-testid="select"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
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
			{/*// @ts-ignore*/}
			<Dropdown
				{...dropdownProps}
				dropdownRef={dropdownRef}
				onToggle={(isOpen) => {
					setIsDropdownOpen(isOpen)
				}}
				onEvent={(optionId: SelectOptionType) => {
					updateSelected(optionId)
				}}
			/>
		</div>
	)
}

export { Select }
export type { SelectBaseProps }
