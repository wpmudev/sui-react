import React from "react";

import {Field} from '@wpmudev/react-form-field';
import {Input, InputRef} from "@wpmudev/react-input";

export const TextField = ({
	id,
	label,
	helper,
	errorMessage,
	isSmall = false,
	isLabelHidden = false,
	isError = false,
	isDisabled = false,
	...props
}) => {
	const error = Object.assign(
		{
			state: isError,
			text: errorMessage
		}
	);

	return (
		<Field
			id={id}
			label={label}
			helper={helper}
			error={error}
			isLabelHidden={isLabelHidden}
			isSmall={isSmall}
			isDisabled={isDisabled}>
			<Input
				id={id}
				isSmall={isSmall}
				isError={isError}
				isDisabled={isDisabled}
				{...props} />
		</Field>
	);
}

export const TextFieldRef = ({
	id,
	label,
	helper,
	errorMessage,
	isSmall = false,
	isLabelHidden = false,
	isError = false,
	isDisabled = false,
	...props
}) => {
	const error = Object.assign(
		{
			state: isError,
			text: errorMessage
		}
	);

	return (
		<Field
			id={id}
			label={label}
			helper={helper}
			error={error}
			isLabelHidden={isLabelHidden}
			isSmall={isSmall}
			isDisabled={isDisabled}>
			<InputRef
				id={id}
				isSmall={isSmall}
				isError={isError}
				isDisabled={isDisabled}
				{...props} />
		</Field>
	);
}
