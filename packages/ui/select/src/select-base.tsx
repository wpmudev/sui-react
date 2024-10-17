import React, {
	KeyboardEvent,
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	useId,
} from "react"
import { generateCN, _renderHTMLPropsSafely, isEmpty } from "@wpmudev/sui-utils"
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
	RemoveSelection,
	MultiSelectSearch,
} from "./utils/functions"

const Select: React.FC<SelectBaseProps> = ({
	id,
	options: newOpt,
	className,
	selected,
	label = "Select option",
	isCustomVar = false,
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
	ariaAttrs = {},
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

	const [options, setOptions] = useState(newOpt)
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
	const [items, setItems] = useState<SelectOptionType[]>(options ?? [])
	const [filteredItems, setFilteredItems] = useState<SelectOptionType[]>(
		options ?? [],
	)
	const [selectedItem, setSelectedItems] = useState<
		Record<string, any> | string | undefined | SelectOptionType
	>([])

	const [customVar, setCustomVar] = useState<Array<string | SelectOptionType>>(
		[],
	)

	// Update the selected items when the props change
	useEffect(() => {
		setSelectedItems(selected)
	}, [selected])

	const updateOptions = (itemsOpt: SelectOptionType[]) => {
		setOptions(itemsOpt)
	}

	useEffect(() => {
		setItems(options ?? [])
		setFilteredItems(options ?? [])

		// update selected item
		//setSelectedItems(options?.filter((option) => option.isSelected === true))
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

		if (!isMultiSelect) {
			// Select the first item
			const item = currentItems?.[0]
			// @ts-ignore: improve
			if (item && item.id) updateItem(item)
		}
		setItems(updatedItems)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filteredItems])

	// UseEffect function to handle changes in selected custom variables
	useEffect(() => {
		if (isCustomVar) {
			setSelectedItems(customVar)
		}
	}, [customVar, isCustomVar])

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
			"custom-var": isCustomVar,
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

		// validate the option: Multiselect is having a bug with validation
		if (validate && !isMultiSelect) {
			validate(option)
		}

		// onChange callback
		if (onChange) {
			onChange(option)
		}
	}

	// validation on mount
	useEffect(() => {
		// Validate on mount: Multiselect is having a bug with validation
		if (validate && validateOnMount && !isMultiSelect) {
			validate(selectedItem)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const updateSelected = (optionObj: SelectOptionType) => {
		if (isCustomVar) {
			setCustomVar([...customVar, optionObj])
			return
		}
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

		if (isMultiSelect) {
			updatedItems[optionIndex] = {
				...updatedItems[optionIndex],
				isSelected: !isSelected,
			}
			setFilteredItems(updatedItems)
			setSelectedItems((prev: SelectOptionType[]) => {
				if (prev) {
					// Check if the item is already selected
					const alreadySelected = prev.some(
						(item: { id: string }) => item.id === optionObj.id,
					)

					if (alreadySelected) {
						// Remove the item if it is already selected
						return prev.filter(
							(item: { id: string }) => item.id !== optionObj.id,
						)
					}
					// Add the item if it is not already selected
					return [...prev, updatedItems[optionIndex]]
				}
				return [optionObj]
			})
		} else {
			updatedItems.forEach((option) => (option.isSelected = false))
			updatedItems[optionIndex] = {
				...updatedItems[optionIndex],
				isSelected: true,
			}
			setFilteredItems(updatedItems)
			dropdownRef.current?.close()
		}
	}

	// handle custom var input field actions
	const onCustomVarChange = (event: KeyboardEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement
		const value = target.value

		if ("Enter" === event.key && !isEmpty(value)) {
			setCustomVar([...customVar, value])
			target.value = ""
		} else if ("Backspace" === event.key && isEmpty(value)) {
			setCustomVar((prevState) => prevState.slice(0, -1))
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
		disabled: isDisabled,
		clearSelection: () => {
			RemoveAll(updateItem, items, setFilteredItems)
		},
		ariaAttrs,
		...(!isSearchable && {
			dropdownToggle: () => {
				dropdownRef.current?.toggle()
			},
			arrow: isDropdownOpen ? "ChevronUp" : "ChevronDown",
		}),
		...(isSearchable && {
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
				RemoveSelection(
					optionId,
					filteredItems,
					setFilteredItems,
					setSelectedItems,
					onChange,
				)
			},
		}),
		...(isCustomVar && {
			isCustomVar,
			onCustomVarChange,
		}),
	}

	// Dropdown props
	const dropdownProps = {
		options: filteredItems,
		updateOptions,
		selected: selectedItem,
		isSmall,
		onChange,
		isDisabled,
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
			selectAll: (updatedOptions: SelectOptionType[], allSelected: boolean) => {
				setOptions(updatedOptions)
				setSelectedItems((prev: SelectOptionType[]) => {
					if (!prev) {
						return updatedOptions
					}

					if (allSelected) {
						// Add updatedOptions to selectedItems if their ids are not already present
						const mergedItems = [...prev, ...updatedOptions]

						const uniqueItems = mergedItems.filter(
							(item, index, self) =>
								index === self.findIndex((i) => i.id === item.id),
						)

						return uniqueItems
					}
					// Remove updatedOptions from selectedItems if their ids are found in prev

					return prev.filter(
						(prevItem: { id: string }) =>
							!updatedOptions.some(
								(updatedItem) => updatedItem.id === prevItem.id,
							),
					)
				})
			},
		}),
		...((isMultiSelect || isCustomVar) && {
			onSearch: (value: string) => {
				handleMultiSelectSearch(value)
			},
		}),
		dropdownRef,
		onToggle: (isOpen: boolean) => {
			setIsDropdownOpen(isOpen)
		},
		onEvent: (optionId: SelectOptionType) => {
			updateSelected(optionId)
		},
		isCustomVar,
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
			<Dropdown {...dropdownProps} />
		</div>
	)
}

export { Select }
export type { SelectBaseProps }
