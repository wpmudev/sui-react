import React, { createElement, Fragment, useState } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

import { Hint } from 'react-autocomplete-hint';


// Build "Base Button" component.
const Select = ({
	id,
	options,
	className = '',
	isDisabled = false,
	isSmall = false,
	isReadOnly = false,
	isError = false,
	onMouseEnter,
	onMouseLeave,
	onChange,
}) => {
	const is = {};
	const has = {};
	const set = {};

	// Define states
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);
	[is.dropdownOpen, set.setDropdownOpen] = useState(false);
	[is.selectedOption, set.setSelectedOption] = useState('');
	[set.options, set.setOptions] = useState(options);
	[set.suggestedText, set.setSuggestedText] = useState('');

	// Properties validation
	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;

	if (!has.id) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n`
		);
	}

	// Define select class.
	set.class = 'sui-select';
	set.arrowClass = 'suicons';

	// handle actions
	const handleOptionClick = (option) => {
		set.setSelectedOption(option);
		set.setDropdownOpen(false);
		clearSearchValues();
	};

	const handleDropdownToggle = () => {
		set.setDropdownOpen(!is.dropdownOpen);
	};

	const handleSearchDropdown = (event) => {
		const searchValue = event.target.value.toLowerCase();
		const optionsArray = options;
		let suggestedText = "";
		
		set.setDropdownOpen(true);
		if(isEmpty(searchValue)) {
			set.setOptions(optionsArray);
			set.setSuggestedText('');
		} else {
			const filteredOptions = optionsArray.filter(option => option.value.toLowerCase().startsWith(searchValue));
			const formattedOptions = filteredOptions.map(option => {
				const index = option.value.toLowerCase().indexOf(searchValue);
				if (index === -1) {
				  	return option;
				} else {
					return {
						...option,
						newValue: option.value.substring(0, index) + option.value.substring(index + searchValue.length),
						formattedValue: option.value.substring(0, searchValue.length)
					};
				}
			});
			for (let i = 0; i < options.length; i++) {
				const optionValue = options[i].value.toLowerCase();
				
				if (optionValue.startsWith(searchValue)) {
				  suggestedText = options[i].value;
				  break;
				}
			}
			set.setOptions(formattedOptions);
			set.setSuggestedText(suggestedText);
		}
	};

	const clearSearchValues = () => {
		set.setSuggestedText('');
		set.setOptions(options);
	}

	if (isSmall) {
		set.class += ' sui-select--sm';
	}

	if (is.hover) {
		set.class += ' sui-select--hover';
	}
	
	if (is.dropdownOpen) {
		set.class += ' sui-select--open';
		set.arrowClass += ' suicons--chevron-up'
	} else {
		set.arrowClass += ' suicons--chevron-down'
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

	if (!isEmpty(className)) {
		set.class += ` ${className}`;
	}

	set.dropdownHTML = createElement(
		'ul',
		{
			className: 'options-list',
			role: 'listbox',
			'aria-label': 'Dropdown options',
		},
		set.options.map(({ icon, id, value, newValue = value, formattedValue = '' }) => {
			return (
				<li key={id} id={id} role="option" tabIndex="0" className={value === is.selectedOption ? 'option selected' : 'option'} onClick={() => handleOptionClick(value)} onKeyDown={(e) => { if (e.key === 'Enter') { handleOptionClick(value) }}} >
					<span className={`suicons suicons--${icon}`} aria-hidden="true"></span>
					<span>{formattedValue && <strong>{formattedValue}</strong>}{newValue}</span>
				</li>
			) 
		})
	);

	return (
		<Fragment>
			<div 
				className={ set.class }
				onMouseEnter={(e) => {
					if (!isReadOnly) set.hover(true);
	
					if (isFunction(onMouseEnter)) {
						onMouseEnter(e);
					}
				}}
				onMouseDownCapture={() => (!isReadOnly) ? set.focus(true) : {}}
				onMouseUpCapture={() => (!isReadOnly) ? set.focus(true) : {}}
				onMouseLeave={(e) => {
					if (!isReadOnly) set.hover(false);
	
					if (isFunction(onMouseLeave)) {
						onMouseLeave(e);
					}
				}}
				onBlurCapture={() => (!isReadOnly) ? set.focus(false) : {}}
			>
				<div className="sui-select__header">
					<input 
						type="text" 
						value={ is.selectedOption } 
						className='select-header sui-select__input'
						onClick={ handleDropdownToggle }
						onChange={(e) => {
							set.setSelectedOption(e.target.value);
						}}
						onKeyUp={(e) => {
							handleSearchDropdown(e);
						}}
						tabIndex='0'
						aria-haspopup='listbox'
						aria-expanded={is.dropdownOpen}
					/>
					{set.suggestedText && <div className="sui-select__suggestions">{set.suggestedText}</div>}
					<span className={set.arrowClass} aria-hidden="true"></span>
				</div>
				{is.dropdownOpen && set.dropdownHTML}
			</div>
		</Fragment>
	);
};

export { Select };
