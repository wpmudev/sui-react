import React, { useState } from 'react';
import { isEmpty, isFunction } from '@wpmudev/react-utils';

import { Dropdown } from '../elements/select-dropdown';
import { Selected, SelectedSearch } from '../elements/select-selected';

const Select = ({
	id,
	options,
	className = '',
	label = '',
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
	const [hover, setHover] = useState(false);
	const [focus, setFocus] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [selectOptions, setSelectOptions] = useState(options);
	const [selectedOption, setSelectedOption] = useState(label);

	if (!id || isEmpty(id)) {
		throw new Error(
			'Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n'
		);
	}

	const classList = ['sui-select'];

	if (isSmall) {
		classList.push('sui-select--sm');
	}

	if (hover) {
		classList.push('sui-select--hover');
	}

	if (dropdownOpen) {
		classList.push('sui-select--open');
	}

	if (focus) {
		classList.push('sui-select--focus');
	}

	if (isError) {
		classList.push('sui-select--error');
	}

	if (isDisabled) {
		classList.push('sui-select--disabled');
	}

	if (isMultiselect) {
		classList.push('sui-select--multiselect');
	}

	if (isSearchable) {
		classList.push('sui-select--searchable');
	}

	if (isSmartSearch) {
		classList.push('sui-select--smart-search');
	}

	if (!isEmpty(className)) {
		classList.push(className);
	}

	const handleSearchDropdown = (event) => {
		const searchValue = event.target.value.toLowerCase();
		const optionsArray = options;

		setDropdownOpen(true);

		if (isSmartSearch && searchValue.length < 2) {
			setSelectOptions([]);
			return;
		}

		if (isEmpty(searchValue)) {
			setSelectOptions(!isSmartSearch ? optionsArray : []);
		} else {
			const filteredOptions = optionsArray.filter((option) =>
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
			setSelectOptions(formattedOptions);
		}
	};

	const selectProps = {
		className: classList.join(' '),
		onMouseEnter: (e) => {
			if (!isReadOnly) setHover(true);
			if (isFunction(onMouseEnter)) {
				onMouseEnter(e);
			}
		},
		onMouseDownCapture: () => (!isReadOnly ? setFocus(true) : {}),
		onMouseUpCapture: () => (!isReadOnly ? setFocus(true) : {}),
		onMouseLeave: (e) => {
			if (!isReadOnly) setHover(false);

			if (isFunction(onMouseLeave)) {
				onMouseLeave(e);
			}
		},
		onBlurCapture: () => (!isReadOnly ? setFocus(false) : {}),
	};

	const headerProps = {
		expanded: dropdownOpen,
		selected: selectedOption,
		arrow: dropdownOpen ? 'chevron-up' : 'chevron-down',
		selectLabel: label,
		dropdownToggle: () => setDropdownOpen(!dropdownOpen),
		...(isSearchable && { dropdownOptions: selectOptions }),
		...(isSearchable && {
			onChange: (e) => {
				handleSearchDropdown(e);
				setSelectedOption(e.target.value);
			},
		}),
		clearSelection: () => {
			if (!isEmpty(setSelectedOption)) {
				const updatedOptions = options.map((option) => ({
					...option,
					isSelected: false,
				}));
				setSelectOptions(updatedOptions);
				setSelectedOption(label);
			}
		},
		isSmartSearch,
		isMultiselect,
		...(isMultiselect && {
			removeSelection: (id) => {
				const optionIndex = selectOptions.findIndex(
					(option) => option.id === id
				);
				const updatedOptions = [...selectOptions];
				updatedOptions[optionIndex].isSelected = false;
				setSelectOptions(updatedOptions);
				const filteredOptions = updatedOptions.filter(
					(option) => option.isSelected === true
				);
				const selectedOption =
					filteredOptions.length > 0 ? filteredOptions : label;
				setSelectedOption(selectedOption);
			},
		}),
		...props,
	};

	const dropdownProps = {
		options: selectOptions,
		onEvent: (id) => {
			if (!isMultiselect) {
				const optionIndex = selectOptions.findIndex(
					(option) => option.id === id
				);
				const updatedOptions = selectOptions.map((option) => ({
					...option,
					isSelected: false,
				}));
				updatedOptions[optionIndex].isSelected = true;
				setSelectOptions(updatedOptions);
				setDropdownOpen(false);
				setSelectedOption(updatedOptions[optionIndex].label);
			} else {
				const optionIndex = selectOptions.findIndex(
					(option) => option.id === id
				);
				const updatedOptions = [...selectOptions];
				const isSelected = updatedOptions[optionIndex].isSelected;
				updatedOptions[optionIndex].isSelected = !isSelected;
				setSelectOptions(updatedOptions);
				const filteredOptions = updatedOptions.filter(
					(option) => option.isSelected === true
				);
				const selectedOption =
					filteredOptions.length > 0 ? filteredOptions : label;
				setSelectedOption(selectedOption);
			}
		},
		isSmartSearch,
		isMultiselect,
		...(isMultiselect && {
			selectAll: () => {
				const allSelected = selectOptions.every(
					(option) => option.isSelected === true
				);
				const updatedOptions = selectOptions.map((option) => ({
					...option,
					isSelected: !allSelected,
				}));
				setSelectOptions(updatedOptions);
				const filteredOptions = updatedOptions.filter(
					(option) => option.isSelected === true
				);
				const selectedOption =
					filteredOptions.length > 0 ? filteredOptions : label;
				setSelectedOption(selectedOption);
			},
		}),
		...(isMultiselect && {
			onChange: (e) => {
				handleSearchDropdown(e);
			},
		}),
		selected: selectedOption,
		...props,
	};
	return (
		<div className={classList} {...selectProps}>
			{!isSearchable && <Selected {...headerProps} />}
			{isSearchable && <SelectedSearch {...headerProps} />}
			{dropdownOpen && <Dropdown {...dropdownProps} />}
		</div>
	);
};

export { Select };
