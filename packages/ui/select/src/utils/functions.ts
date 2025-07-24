import { isEmpty } from "@wpmudev/sui-utils"
import { SelectOptionType } from "../select.types"

// Search for standard dropdown.
const SearchDropdown = (
	searchValue: string,
	options: SelectOptionType[],
	setFilterItems: (options: SelectOptionType[]) => void,
) => {
	if (isEmpty(searchValue)) {
		setFilterItems(options)
		return
	}

	const filteredItems = options?.filter((option) =>
		option?.searchLabel?.toLowerCase().startsWith(searchValue),
	)

	const formattedItems = filteredItems?.map((option) => {
		const searchLabel = option?.searchLabel
		if (!searchLabel) {
			return { ...option, isSelected: false }
		}

		const index = searchLabel.toLowerCase().indexOf(searchValue)
		if (index === -1) {
			return { ...option, isSelected: false }
		}

		const newLabel =
			searchLabel.substring(0, index) +
			searchLabel.substring(index + searchValue.length)
		const boldLabel = searchLabel.substring(0, searchValue.length)

		return {
			...option,
			isSelected: false,
			newLabel,
			boldLabel,
		}
	})

	setFilterItems(formattedItems)
}

// Search for multiselect options.
const MultiSelectSearch = (
	searchValue: string,
	options: SelectOptionType[],
	setFilterItems: (options: SelectOptionType[]) => void,
) => {
	if (isEmpty(searchValue)) {
		setFilterItems(options)
		return
	}

	const filteredItems = options.filter(
		(option) =>
			"string" === typeof option?.label &&
			option?.label?.toLowerCase().startsWith(searchValue.toLowerCase()),
	)

	setFilterItems(filteredItems)
}

// Remove all selected options.
const RemoveAll = (
	updateItem: (options: SelectOptionType[]) => void,
	options: SelectOptionType[],
	setFilterItems: (options: SelectOptionType[]) => void,
) => {
	const updatedOptions = options.map((option) => ({
		...option,
		isSelected: false,
		props: {
			...option.props,
		},
	}))
	updateItem([])
	setFilterItems(updatedOptions)
}

// Remove single option.
const RemoveSelection = (
	id: string | number,
	options: SelectOptionType[],
	setFilterItems: (options: SelectOptionType[]) => void,
	setSelectedItems: (
		items: (prevItems: SelectOptionType[]) => SelectOptionType[],
	) => void,
	callback?: (...args: any[]) => any,
) => {
	// Set the updated selected items
	const updatedOptions = options.map((option) => {
		if (option.id === id) {
			return {
				...option,
				isSelected: false,
				props: {
					...option.props,
				},
			}
		}
		return option
	})
	setFilterItems(updatedOptions)
	setSelectedItems((prevSelected: SelectOptionType[]) => {
		const _selected = prevSelected.filter((option) => option.id !== id)
		const removedOption = prevSelected.filter((option) => option.id === id)?.[0]
		callback?.(removedOption, _selected)
		return _selected
	})
}

// Select all options in dropdown.
const SelectAll = (
	options: SelectOptionType[],
	setFilterItems: (options: SelectOptionType[]) => void,
) => {
	const allSelected = options.every((option) => option?.isSelected === true)
	const updatedOptions = options.map((option) => ({
		...option,
		isSelected: !allSelected,
		props: {
			...option.props,
			isSelected: !allSelected,
		},
	}))
	setFilterItems(updatedOptions)
}

export {
	SearchDropdown,
	MultiSelectSearch,
	RemoveAll,
	SelectAll,
	RemoveSelection,
}
