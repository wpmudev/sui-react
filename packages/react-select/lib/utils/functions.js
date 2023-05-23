import { isEmpty } from '@wpmudev/react-utils';

// Search for standard dropdown.
const SearchDropdown = ( searchValue, options, setFilterOptions) => {
	if (isEmpty(searchValue)) {
		setFilterOptions(options);
		return;
	} 
	
	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().startsWith(searchValue)
	);

	const formattedOptions = filteredOptions.map((option) => {
		const index = option.label.toLowerCase().indexOf(searchValue);
		if (index === -1) {
			return { ...option, isSelected: false };
		} else {
			return {
				...option,
				isSelected: false,
				newLabel:
					option.label.substring(0, index) +
					option.label.substring(index + searchValue.length),
				boldLabel: option.label.substring(
					0,
					searchValue.length
				),
			};
		}
	});

	setFilterOptions(formattedOptions);
};

// Search for multiselect options.
const MultiSelectSearch = ( searchValue, options, setFilterOptions ) => {
	if (isEmpty(searchValue)) {
		setFilterOptions(options);
		return;
	} 
	
	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().startsWith(searchValue)
	);

	setFilterOptions(filteredOptions);
};

// Remove all selected options.
const RemoveAll = ( setSelectedOption, options, setFilterOptions ) => {
	const updatedOptions = options.map((option) => ({
		...option,
		isSelected: false,
	}));
	setSelectedOption([]);
	setFilterOptions(updatedOptions);
};

// Remove single option.
const RemoveSelection = ( id, options, setFilterOptions ) => {
	const updatedOptions = options.map(option => {
		if (option.id === id) {
			return {
				...option,
				isSelected: false
			};
		}
		return option;
	});
	setFilterOptions(updatedOptions);
};

// Select all options in dropdown.
const SelectAll = ( options, setFilterOptions ) => {
	const allSelected = options.every(
		(option) => option.isSelected === true
	);
	const updatedOptions = options.map((option) => ({
		...option,
		isSelected: !allSelected,
	}));
	setFilterOptions(updatedOptions);
}

export { SearchDropdown, MultiSelectSearch, RemoveAll, SelectAll, RemoveSelection };