import React, { createElement, Fragment, useState } from 'react';
import { isEmpty, isUndefined, isFunction } from '@wpmudev/react-utils';
import { Icon } from './elements/input-icon';

// Build "Input" component.
const Input = ({
	id,
	className = '',
	type = 'text',
	value = '',
	label,
	labelId,
	description,
	descriptionId,
	errorMessage,
	errorId,
	iconLead,
	iconTrail,
	isSmall = false,
	isDisabled = false,
	onChange = () => {},
	...props
}) => {
	const is = {};
	const set = {};

	// Define tooltip states.
	[set.inputValue, set.setInputValue] = useState(value);

	// Parameter(s) validation.
	is.label = !isUndefined(label) && !isEmpty(label) ? true : false;
	is.description =
		!isUndefined(description) && !isEmpty(description) ? true : false;
	is.id = !isUndefined(id) && !isEmpty(id) ? true : false;
	is.labelId = !isUndefined(labelId) && !isEmpty(labelId) ? true : false;
	is.descriptionId =
		!isUndefined(descriptionId) && !isEmpty(descriptionId) ? true : false;
	is.error =
		!isUndefined(errorMessage) && !isEmpty(errorMessage) ? true : false;
	is.errorId = !isUndefined(errorId) && !isEmpty(errorId) ? true : false;
	is.lead = !isUndefined(iconLead) && !isEmpty(iconLead) ? true : false;
	is.trail = !isUndefined(iconTrail) && !isEmpty(iconTrail) ? true : false;
	is.value = !isEmpty(set.inputValue) ? true : false;

	// set base values.
	set.class = 'sui-input';
	set.type = type;

	// add classes
	if (!isEmpty(className)) {
		set.class += ' ' + className;
	}

	// set input id.
	if (is.id) {
		set.id = id;
	}

	// set input aria-labelledby.
	if (is.label) {
		set.label = label;
	}

	// set input label id.
	if (is.labelId) {
		set.labelId = labelId;
	}

	// set input aria-describedby and description id.
	if (is.description) {
		set.description = description;
	}

	if (is.descriptionId) {
		set.descriptionId = descriptionId;
	}

	// set input error message and error id.
	if (is.error) {
		set.error = errorMessage;
		set.class += ' sui-input--error';
	}

	if (is.errorId) {
		set.errorId = errorId;
		set.descriptionId += ' ' + errorId;
	}

	// set lead icon for input.
	if (is.lead) {
		set.icon = iconLead;
	}

	// set trail icon for input.
	if (is.trail) {
		set.icon = iconTrail;
	}

	// Input size.
	if (isSmall) {
		set.class += ' sui-input--sm';
	}

	// Input is disabled.
	if (isDisabled) {
		set.disabled = true;
		set.class += ' sui-input--disabled';
	}

	// if input is filled with value.
	if (is.value) {
		set.class += ' sui-input--filled';
	}

	// if input has icon.
	if (is.lead || is.trail) {
		set.class += ' sui-input__icon';
		set.class += is.trail
			? ' sui-input__icon--right'
			: ' sui-input__icon--left';
	}

	set.inputMarkup = (
		<Fragment>
			{(is.lead || is.trail) && <Icon name={set.icon} />}
			{createElement('input', {
				type: set.type,
				className: 'sui-input__field',
				value: is.value ? set.inputValue : '',
				...(is.id && { id: set.id }),
				...(is.labelId && {
					'aria-labelledby': set.labelId,
				}),
				...((is.descriptionId || is.errorId) && {
					'aria-describedby': set.descriptionId,
				}),
				...(isDisabled && {
					disabled: set.disabled,
				}),
				onChange: (e) => {
					set.setInputValue(e.target.value);
					if (isFunction(onChange)) {
						onChange(e);
					}
				},
				...props,
			})}
			{is.label &&
				createElement(
					'label',
					{
						className: 'sui-input__label',
						...(is.id && { htmlFor: set.id }),
						...(is.labelId && { id: set.labelId }),
					},
					set.label
				)}
		</Fragment>
	);

	set.errorMarkup = createElement(
		'span',
		{
			...(is.errorId && { id: set.errorId }),
			className: 'sui-input__error-message',
			role: 'alert',
		},
		set.error
	);

	set.descMarkup = createElement(
		'span',
		{
			className: 'sui-input__description',
			...(is.descriptionId && {
				id: set.descriptionId,
			}),
		},
		set.description
	);

	return createElement(
		'div',
		{
			className: set.class,
		},
		createElement(
			'div',
			{
				className: 'sui-input__wrapper',
			},
			set.inputMarkup
		),
		is.error && set.errorMarkup,
		is.description && set.descMarkup
	);
};

// Publish required component.
export { Input };
