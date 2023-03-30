import React, { createElement, Fragment, useState } from 'react';
import { isEmpty, isUndefined, isFunction } from '@wpmudev/react-utils';
import { Icon } from './elements/input-icon';
import { Button } from '@wpmudev/react-button';

// Build "Password" component.
const Password = ({
	id,
	className = '',
	value = '',
	label,
	labelId,
	description,
	descriptionId,
	view,
	errorMessage,
	errorId,
	iconLead,
	isSmall = false,
	isDisabled = false,
	onChange = () => {},
	...props
}) => {
	const is = {};
	const set = {};

	// Define tooltip states.
	[set.inputValue, set.setInputValue] = useState(value);
	[set.inputType, set.setInputType] = useState('password');

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
	is.value = !isEmpty(set.inputValue) ? true : false;
	is.buttonIcon =
		!isUndefined(view) && !isEmpty(view) && 'icon' === view ? true : false;

	// set base values.
	set.class = 'sui-input sui-password';
	set.buttonAppearance = 'secondary';

	// set icon
	if ('password' !== set.inputType) {
		set.iconButton = 'hide';
	} else {
		set.iconButton = 'show';
	}

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

	// set show/hide button
	if ('password' === set.inputType && !is.buttonIcon) {
		set.showHideButton = 'Show';
	} else if ('password' === set.inputType && is.buttonIcon) {
		set.showHideButton = 'Show password';
	} else if ('text' === set.inputType && is.buttonIcon) {
		set.showHideButton = 'Hide password';
	} else {
		set.showHideButton = 'Hide';
	}

	// set show.hide button appearance
	if (is.buttonIcon) {
		set.buttonAppearance = 'tertiary';
	}

	if (!is.value || isDisabled) {
		set.buttonAppearance = 'tertiary';
	}

	set.inputMarkup = (
		<Fragment>
			{is.lead && <Icon name={set.icon} />}
			{createElement('input', {
				type: set.inputType,
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

			{createElement(
				Button,
				{
					appearance: set.buttonAppearance,
					color: 'black',
					...(is.buttonIcon && { iconLead: set.iconButton }),
					...((!is.value || isDisabled) && { tabIndex: -1 }),
					...((!is.value || isDisabled) && { isDisabled: true }),
					onClick: () => {
						set.setInputType(
							'password' === set.inputType ? 'text' : 'password'
						);
					},
				},
				set.showHideButton
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
export { Password };
