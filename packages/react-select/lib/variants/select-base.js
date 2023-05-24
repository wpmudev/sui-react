import React, { useState, useEffect, useRef } from 'react';
import { isEmpty, isFunction, isUndefined } from '@wpmudev/react-utils';

import { SearchDropdown, RemoveAll, SelectAll, RemoveSelection, MultiSelectSearch } from '../utils/functions';
import { Dropdown } from '../elements/select-dropdown';
import { Selected, SelectedSearch } from '../elements/select-selected';

const Select = ({
	id,
	options,
	className,
	label = 'Select',
	isDisabled = false,
	isSmall = false,
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

	// Properties validation
	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;
	has.options = !isUndefined(options) && !isEmpty(options) ? true : false;

	if (!has.id) {
		throw new Error(
			'Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n'
		);
	}

	if (!has.options) {
		throw new Error(
			'Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Select\n\nThe parameter "options" in the "Select" component is required and should be array.\n\n'
		);
	}

	// Define states.
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);
	[is.dropdownOpen, set.dropdownOpen] = useState(false);
	[is.items, set.items] = useState(options);
	[is.filteredItems, set.filteredItems] = useState(options);
	[is.selectedItem, set.selectedItem] = useState(label);
	
	// set ref to dropdown.
	set.dropdownRef = useRef(null);

	// UseEffect function to handle click outside dropdown
	useEffect(() => {
		const handleClickOutside = (event) => {
		  if (set.dropdownRef.current && !set.dropdownRef.current.contains(event.target)) {
			set.dropdownOpen(false);
		  }
		};
		// Add event listener when the component mounts
		document.addEventListener('click', handleClickOutside);
		// Clean up the event listener when the component unmounts
		return () => {
		  document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	// UseEffect function to handle change in items
	useEffect(() => {
		const updatedItems = is.items.map((option) => {
			const filterItem = is.filteredItems.find((filterOpt) => filterOpt.id === option.id);
			if (filterItem) {
				return { ...filterItem };
			}
			return option;
		});
		const filteredItems = updatedItems.filter(option => option.isSelected);
		const selectedItem = filteredItems.length > 0 ? filteredItems : label;
		
		if (isMultiselect) {
			set.selectedItem(selectedItem);
		} else {
			if (selectedItem.length) {
				// Select the first item
  				const item = selectedItem[0];
				if (item && item.label)
					set.selectedItem(item.label);
			}
		}
		set.items(updatedItems);
	}, [is.filteredItems]);

	// Define main class name
	set.class = 'sui-select';

	// Define small class name
	if (isSmall) {
		set.class += ' sui-select--sm';
	}

	// Define dropdown open class
	if (is.dropdownOpen) {
		set.class += ' sui-select--open';
	}

	// Define class name(s) for states
	if (isDisabled) {
		set.class += ' sui-select--disabled';
	} else {
		if (is.hover) {
			set.class += ' sui-select--hover';
		}

		if (is.focus) {
			set.class += ' sui-select--focus';
		}

		if (isError) {
			set.class += ' sui-select--error';
		}
	}	

	// Define multiselect class name	
	if (isMultiselect) {
		set.class += ' sui-select--multiselect';
	}

	// Define searchable class name
	if (isSearchable) {
		set.class += ' sui-select--searchable';
	}

	// Define smart search class name
	if (isSmartSearch) {
		set.class += ' sui-select--smartsearch';
	}

	// Define custom class name
	if (has.class) {
		set.class += ` ${className}`;
	}

	// Select search function.
	const handleSearchDropdown = (event) => {
		const searchValue = event.target.value.toLowerCase();
		set.dropdownOpen(true);
		if (isSmartSearch && searchValue.length < 2) {
			set.filteredItems([]);
			return;
		}
		SearchDropdown(searchValue, is.items, set.filteredItems);
	};

	// Multiselect search function.
	const handleMultiSelectSearch = (event) => {
		const searchValue = event.target.value.toLowerCase();
		set.dropdownOpen(true);
		MultiSelectSearch(searchValue, is.items, set.filteredItems);
	}

	// Main wrapper props.
	const selectProps = {
		className: set.class,
		ref: set.dropdownRef,
		onMouseEnter: (e) => {
			set.hover(true);
			if (isFunction(onMouseEnter)) {
				onMouseEnter(e);
			}
		},
		onMouseDownCapture: () => (set.focus(true)),
		onMouseUpCapture: () => (set.focus(true)),
		onMouseLeave: (e) => {
			set.hover(false);

			if (isFunction(onMouseLeave)) {
				onMouseLeave(e);
			}
		},
		onBlurCapture: () => (set.focus(false)),
	};

	// Header props
	const headerProps = {
		id,
		expanded: is.dropdownOpen,
		selected: is.selectedItem,
		arrow: is.dropdownOpen ? 'chevron-up' : 'chevron-down',
		selectLabel: label,
		dropdownToggle: () => set.dropdownOpen(!is.dropdownOpen),
		...(isSearchable && { dropdownItems: is.filteredItems }),
		...(isSearchable && {
			onChange: (e) => {
				handleSearchDropdown(e);
				set.selectedItem(e.target.value);
			},
		}),
		clearSelection: () => { RemoveAll(set.selectedItem, is.items, set.filteredItems) },
		...(isSmartSearch && { isSmartSearch }),
		...(isMultiselect && { isMultiselect }),
		...(isMultiselect && {
			removeSelection: (id) => {
				RemoveSelection(id, is.filteredItems, set.filteredItems);
			},
		}),
		...props,
	};

	// Dropdown props
	const dropdownProps = {
		options: is.filteredItems,
		onEvent: (id) => {
			const optionIndex = is.filteredItems.findIndex(option => option.id === id);
			const updatedItems = [...is.filteredItems];
			const isSelected = updatedItems[optionIndex].isSelected;

			if (!isMultiselect) {
				updatedItems.forEach(option => option.isSelected = false);
				updatedItems[optionIndex].isSelected = true;
				set.filteredItems(updatedItems);
				set.dropdownOpen(false);
			} else {
				updatedItems[optionIndex].isSelected = !isSelected;
				set.filteredItems(updatedItems);
			}
		},
		...(isSmartSearch && { isSmartSearch }),
		...(isMultiselect && { isMultiselect }),
		...(isMultiselect && {
			selectAll: () => {
				SelectAll(is.filteredItems, set.filteredItems);
			},
		}),
		...(isMultiselect && {
			onChange: (e) => {
				handleMultiSelectSearch(e);
			},
		}),
		selected: is.selectedItem,
		...props,
	};

	// Render component
	return (
		<div {...selectProps}>
			{!isSearchable && <Selected {...headerProps} />}
			{isSearchable && <SelectedSearch {...headerProps} />}
			{is.dropdownOpen && <Dropdown {...dropdownProps} />}
		</div>
	);
};

export { Select };