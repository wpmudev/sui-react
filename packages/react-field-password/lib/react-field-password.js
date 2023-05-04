import React, {useState} from "react";

import {Field} from '@wpmudev/react-form-field';
import {Input, InputRef} from '@wpmudev/react-input';
import {IconButton} from '@wpmudev/react-icon-button';
import {Button} from '@wpmudev/react-button';

export const PasswordField = ({
	id,
	label,
	helper,
	errorMessage,
	button,
	isLabelHidden = false,
	isError = false,
	isDisabled = false,
	...props
}) => {
	const is = {};
	const set = {};

	// Define field error state
	const error = Object.assign(
		{
			state: isError,
			text: errorMessage
		}
	);

	// Define password visibility
	[is.filled, set.value] = useState(false);
	[is.visible, set.visibility] = useState(false);

	// Field settings
	set.fieldProps = {
		id: id,
		label: label,
		helper: helper,
		error: error,
		isLabelHidden: isLabelHidden,
	};

	// Input settings
	set.inputProps = {
		type: is.visible ? 'text' : 'password',
		id: id,
		inputClass: 'sui-password__input',
		isError: isError,
		isDisabled: isDisabled,
		onKeyUp: () => {
			const getValue = document.getElementById(id).value;
			if (getValue.length > 0) {
				set.value(true);
			} else {
				set.value(false);
			}
		},
		...props,
	};

	// Button settings
	set.button = Object.assign(
		{
			type: 'icon-button',
			showLabel: 'Show',
			hideLabel: 'Hide',
			icon: is.visible ? 'hide' : 'show',
			props: {
				color: 'black',
				className: 'sui-password__button',
				isSmall: true,
				isDisabled: isDisabled || !is.filled ? true : false,
				onClick: () => set.visibility(!is.visible)
			},
			html: ''
		},
		button
	);

	// Render button appearance
	switch (set.button.type) {
		case 'standard':
			set.button.props.appearance = 'secondary';
			set.button.html = (
				<Button {...set.button.props}>
					{is.visible ? set.button.hideLabel : set.button.showLabel}
				</Button>
			);
			break;

		default:
			set.button.props.appearance = 'tertiary';
			set.button.html = (
				<IconButton
					icon={set.button.icon}
					label={is.visible ? set.button.hideLabel : set.button.showLabel}
					{...set.button.props} />
			);
			break;
	}

	return (
		<Field {...set.fieldProps}>
			<div className="sui-password">
				<Input {...set.inputProps} />
				{set.button.html}
			</div>
		</Field>
	);
}

export const PasswordFieldRef = ({...props}) => {
	return (
		<Field>
			<InputRef type="password" {...props} />
		</Field>
	);
}
