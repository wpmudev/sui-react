import React, { createElement, useState } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

// Build input component
export const Input = ({
	type,
	value,
	placeholder,
	id,
	className,
	isSmall = false,
	isReadOnly = false,
	isError = false,
	isDisabled = false,
	onMouseEnter,
	onMouseLeave,
	onChange,
	...props
}) => {
	const is = {};
	const has = {};
	const set = {};

	// Define states
	[is.value, set.value] = useState(value);
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);

	// Properties validation
	has.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	has.value = !isUndefined(is.value) && !isEmpty(is.value) ? true : false;
	has.placeholder = !isUndefined(placeholder) && !isEmpty(placeholder) ? true : false;
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;

	if (!has.id) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n`
		);
	}

	// Define input type
	switch (type) {
		case 'email':
		case 'numer':
		case 'password':
		case 'search':
		case 'tel':
		case 'url':
			set.type = type;
			break;

		default:
			set.type = 'text';
			break;
	}

	// Define main class name
	set.class = 'sui-input';

	// Define small class name
	if (isSmall) {
		set.class += ' sui-input--sm';
	}

	// Define class name(s) for states
	if (isReadOnly) {
		set.class += ' sui-input--readonly';
	} else {
		if (is.hover) {
			set.class += ' sui-input--hover';
		}

		if (is.focus) {
			set.class += ' sui-input--focus';
		}

		if (has.value) {
			set.class += ' sui-input--filled';
		}

		if (isError) {
			set.class += ' sui-input--error';
		}
	}

	// Define disabled class name
	if (isDisabled) {
		set.class += ' sui-input--disabled';
	}

	// Define custom class name
	if (has.class) {
		set.class += ` ${className}`;
	}

	// Create input element
	set.markup = createElement(
		'input',
		{
			type: set.type,
			... (has.value && {value: is.value}),
			... (has.placeholder && {placeholder: placeholder}),
			id: id,
			className: `sui-input__input`,
			... (isReadOnly && {readOnly: true}),
			... (isDisabled && {disabled: true}),
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
			onChange: (e) => {
				if (!isReadOnly) set.value(e.target.value);

				if (isFunction(onChange)) {
					onChange(e);
				}
			},
			...props
		}
	);

	// Render component
	return (
		<div className={set.class}>
			{set.markup}
		</div>
	);
}
