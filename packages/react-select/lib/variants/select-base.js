import React, { createElement, Fragment, useState } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

import { Dropdown } from '../elements/select-dropdown';
import { Selected, SelectedSearch } from '../elements/select-selected';

// Build "Base Button" component.
const Select = ({
	id,
	options,
	className = '',
	isDisabled = false,
	isSmall = false,
	isReadOnly = false,
	isError = false,
	isMultiselect = false,
	isSearchable = false,
	isSmartSearch = false,
	onMouseEnter = () => {},
	onMouseLeave = () => {},
	...props
}) => {
	const is = {};
	const has = {};
	const set = {};

	// Define states
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);
	[is.dropdownOpen, set.setDropdownOpen] = useState(false);
	[set.options, set.setOptions] = useState(options);
	[set.selectedOption, set.setSelectedOption] = useState(options.find(option => option.isSelected));

	// Properties validation
	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;

	if (!has.id) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n`
		);
	}

	// Define select class.
	set.class = 'sui-select';
	set.arrow = 'chevron-down';

	if (isSmall) {
		set.class += ' sui-select--sm';
	}

	if (is.hover) {
		set.class += ' sui-select--hover';
	}
	
	if (is.dropdownOpen) {
		set.class += ' sui-select--open';
		set.arrow = 'chevron-up';
	}

	if (is.focus) {
		set.class += ' sui-select--focus';
	}

	if (isError) {
		set.class += ' sui-select--error'
	}

	if (isDisabled) {
		set.class += ' sui-select--disabled';
	}

	if (isMultiselect) {
		set.class += ' sui-select--multiselect'
	}

	if (isSearchable) {
		set.class += ' sui-select--searchable'
	}

	if (!isEmpty(className)) {
		set.class += ` ${className}`;
	}

	set.selectProps = {
		className: set.class,
		onMouseEnter: (e) => {
			if (!isReadOnly) set.hover(true);

			if (isFunction(onMouseEnter)) {
				onMouseEnter(e);
			}
		},
		onMouseDownCapture: () => (!isReadOnly) ? set.focus(true) : {},
		onMouseUpCapture: () => (!isReadOnly) ? set.focus(true) : {},
		onMouseLeave: (e) => {
			if (!isReadOnly) set.hover(false);

			if (isFunction(onMouseLeave)) {
				onMouseLeave(e);
			}
		},
		onBlurCapture: () => (!isReadOnly) ? set.focus(false) : {},
	}

	set.headerProps = {
		expanded: is.dropdownOpen,
		selected: set.selectedOption,
		arrow: set.arrow,
		dropdownToggle: () => set.setDropdownOpen(!is.dropdownOpen),
		...(isSearchable && { dropdownOptions: set.options }),
		...(isSearchable && { onChange: (e) => { 
			handleSearchDropdown(e);
			set.setSelectedOption(e.target.value);
		}}),
		isSmartSearch,
		...props
	}

	set.dropdownProps = {
		options: set.options,
		onEvent: ( id ) => {
			// Find the index of the object with the matching id
  			const optionIndex = options.findIndex(option => option.id === id);
			const updatedOptions = options.map(option => ({ ...option, isSelected: false }));
			updatedOptions[optionIndex].isSelected = true;
			set.setOptions(updatedOptions);
			set.setDropdownOpen(false);
			set.setSelectedOption(updatedOptions[optionIndex].label);
		},
		isSmartSearch,
		selected: set.selectedOption,
		...props
	}

	const handleSearchDropdown = (event) => {
		const searchValue = event.target.value.toLowerCase();
		const optionsArray = options;
		
		set.setDropdownOpen(true);

		if (isSmartSearch && searchValue.length < 2) {
			set.setOptions([]);
			return;
		}

		if(isEmpty(searchValue)) {
			set.setOptions( !isSmartSearch ? optionsArray : []);
		} else {
			const filteredOptions = optionsArray.filter(option => option.label.toLowerCase().startsWith(searchValue));
			const formattedOptions = filteredOptions.map(option => {
				const index = option.label.toLowerCase().indexOf(searchValue);
				if (index === -1) {
				  	return { ...option, isSelected: false };
				} else {
					return {
						...option,
						isSelected: false,
						newLabel: option.label.substring(0, index) + option.label.substring(index + searchValue.length),
						boldLabel: option.label.substring(0, searchValue.length)
					};
				}
			});
			set.setOptions(formattedOptions);
		}
	};
	
	return (
		<div {...set.selectProps}>
			{!isSearchable && <Selected {...set.headerProps}/>}
			{isSearchable && <SelectedSearch {...set.headerProps}/>}
			{is.dropdownOpen && <Dropdown {...set.dropdownProps}/>}
		</div>
	);
};

export { Select };
