import React, { createElement, Fragment, useState } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

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
	};

	const handleDropdownToggle = () => {
		set.setDropdownOpen(!is.dropdownOpen);
	};

	const handleSearchDropdown = (searchValue) => {
		const optionsArray = options;
		set.setDropdownOpen(true);
		if(isEmpty(searchValue)) {
			set.setOptions(optionsArray);
		} else {
			set.setOptions(optionsArray.filter(option => option.value.includes(searchValue)));
		}
	};

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
		set.options.map((option) => {
			return (
				<Fragment>
					<li id={option.id} role="option" tabIndex="0" className={option.value === is.selectedOption ? 'option selected' : 'option'} onClick={() => handleOptionClick(option.value)} onKeyDown={(e) => { if (e.key === 'Enter') { handleOptionClick(option.value) }}} >
						<span className="suicons suicons--settings" aria-hidden="true"></span>
						{option.value}
					</li>
				</Fragment>
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
				<div>
					<input 
						type="text" 
						value={ is.selectedOption } 
						className='select-header sui-select__input'
						onClick={ handleDropdownToggle }
						onChange={(e) => {
							set.setSelectedOption(e.target.value);
						}}
						onKeyUp={(e) => {
							handleSearchDropdown(e.target.value);
						}}
						tabIndex='0'
						aria-haspopup='listbox'
						aria-expanded={is.dropdownOpen}
					/>
				</div>
				{is.dropdownOpen && set.dropdownHTML}
			</div>
		</Fragment>
	);
};

export { Select };
