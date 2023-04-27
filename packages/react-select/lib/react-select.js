import React, { createElement, Fragment, useState } from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

// Build "Base Button" component.
const Select = ({
	options,
	isDisabled = false,
	isSmall = false,
	className = '',
}) => {
	const is = {};
	const set = {};

	// set default state of select
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);
	[is.DropdownOpen, set.setDropdownOpen] = useState(false);
	[is.selectedOption, set.setSelectedOption] = useState('');

	// set defaullt values
	set.options = options;

	// Define select class.
	set.class = 'sui-select';

	// handle actions
	const handleOptionClick = (option) => {
		set.setSelectedOption(option);
		set.setDropdownOpen(false);
	};

	const handleDropdownToggle = () => {
		set.setDropdownOpen(!is.DropdownOpen);
	};

	if (isSmall) {
		set.class += ' sui-select--sm';
	}

	if (is.hover) {
		set.class += ' sui-select--hover';
	}

	if (is.focus) {
		set.class += ' sui-select--focus';
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
		set.options.map((option) =>
			createElement(
				'li',
				{
					key: option,
					className: 'option',
					onClick: () => handleOptionClick(option),
					onKeyDown: (e) => {
						if (e.key === 'Enter') {
							handleOptionClick(option);
						}
					},
					role: 'option',
					tabIndex: 0,
					'aria-selected': is.selectedOption === option,
				},
				option
			)
		)
	);

	return createElement(
		'div',
		{
			className: set.class,
		},
		createElement(
			'div',
			{
				className: 'select-header',
				onClick: handleDropdownToggle,
				onKeyDown: (e) => {
					if (e.key === 'Enter') {
						handleDropdownToggle();
					}
				},
				tabIndex: '0',
				'aria-haspopup': 'listbox',
				'aria-expanded': is.DropdownOpen,
			},
			createElement(
				'span',
				{
					className: 'selected-option',
				},
				is.selectedOption || 'Select'
			),
			createElement('span', {
				className: 'arrow',
				'aria-hidden': true,
			})
		),
		is.DropdownOpen && set.dropdownHTML
	);
};

export { Select };
