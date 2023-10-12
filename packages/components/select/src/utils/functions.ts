import { isEmpty } from "@wpmudev/sui-utils"

// Search for standard dropdown.
const SearchDropdown = (
	searchValue: string,
	options: Record<string, any>[],
	setFilterItems: (options: Record<string, any>[]) => void,
) => {
	if (isEmpty(searchValue)) {
		setFilterItems(options)
		return
	}

	const filteredItems = options.filter((option) =>
		option.label.toLowerCase().startsWith(searchValue),
	)

	const formattedItems = filteredItems.map((option) => {
		const index = option.label.toLowerCase().indexOf(searchValue)
		if (index === -1) {
			return { ...option, isSelected: false }
		}

		return {
			...option,
			isSelected: false,
			newLabel:
				option.label.substring(0, index) +
				option.label.substring(index + searchValue.length),
			boldLabel: option.label.substring(0, searchValue.length),
		}
	})

	setFilterItems(formattedItems)
}

// Search for multiselect options.
const MultiSelectSearch = (
	searchValue: string,
	options: Record<string, any>[],
	setFilterItems: (options: Record<string, any>[]) => void,
) => {
	if (isEmpty(searchValue)) {
		setFilterItems(options)
		return
	}

	const filteredItems = options.filter((option) =>
		option.label.toLowerCase().startsWith(searchValue),
	)

	setFilterItems(filteredItems)
}

// Remove all selected options.
const RemoveAll = (
	setSelectedItem: (options: Record<string, any>[]) => void,
	options: Record<string, any>[],
	setFilterItems: (options: Record<string, any>[]) => void,
) => {
	const updatedOptions = options.map((option) => ({
		...option,
		isSelected: false,
	}))
	setSelectedItem([])
	setFilterItems(updatedOptions)
}

// Remove single option.
const RemoveSelection = (
	id: string | number,
	options: Record<string, any>[],
	setFilterItems: (options: Record<string, any>[]) => void,
) => {
	const updatedOptions = options.map((option) => {
		if (option.id === id) {
			return {
				...option,
				isSelected: false,
			}
		}
		return option
	})
	setFilterItems(updatedOptions)
}

// Select all options in dropdown.
const SelectAll = (
	options: Record<string, any>[],
	setFilterItems: (options: Record<string, any>[]) => void,
) => {
	const allSelected = options.every((option) => option.isSelected === true)
	const updatedOptions = options.map((option) => ({
		...option,
		isSelected: !allSelected,
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
