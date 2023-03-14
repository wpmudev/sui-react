import React, { Fragment, useState } from 'react';
import { isBoolean, isEmpty, isUndefined } from '@wpmudev/react-utils';

// Build "Textarea" component.
const Textarea = ({ description, ...props }) => {
	const {
		type,
		id,
		labelId,
		placeholder,
		descriptionId,
		errorMessage,
		errorId,
		icon,
		size,
		disabled,
		value = '',
		...inputprops
	} = props;

	const input = {};

	input.class = 'sui-input';

	input.description =
		!isUndefined(description) && !isEmpty(description) ? description : '';

	// Input id.
	input.id = !isUndefined(id) && !isEmpty(id) ? id : '';

	// Input type.
	input.type = !isUndefined(type) && !isEmpty(type) ? type : 'text';

	// Input value.
	input.value = value;

	// Input placeholder.
	input.placeholder =
		!isUndefined(placeholder) && !isEmpty(placeholder) ? placeholder : '';

	// Input aria-describedby and description id.
	input.descriptionId =
		!isUndefined(descriptionId) && !isEmpty(descriptionId)
			? descriptionId
			: '';

	// Input error message.
	input.error =
		!isUndefined(errorMessage) && !isEmpty(errorMessage)
			? errorMessage
			: '';
	input.errorId = !isUndefined(errorId) && !isEmpty(errorId) ? errorId : '';

	// Input size.
	if (!isEmpty(size) && !isUndefined(size) && 'sm' === size) {
		input.class += ' sui-input--sm';
	}

	// Input is disabled.
	input.disabled =
		!isUndefined(disabled) && isBoolean(disabled) ? disabled : false;

	if (input.disabled) {
		input.class += ' sui-input--disabled';
	}

	// Input error.
	if (!isEmpty(input.error)) {
		input.class += ' sui-input--error';
	}

	return (
		<div className={input.class}>
			<textarea
				defaultValue={input.value}
				className="sui-input__field"
				{...(!isEmpty(input.placeholder) && {
					placeholder: input.placeholder,
				})}
				{...(!isEmpty(input.id) && { id: input.id })}
				{...((!isEmpty(input.descriptionId) ||
					!isEmpty(input.descriptionId)) && {
					'aria-describedby':
						input.descriptionId + ' ' + input.errorId,
				})}
				{...(!isEmpty(input.disabled) && {
					disabled: input.disabled,
				})}
				{...inputprops}
			/>

			{!isEmpty(input.error) && (
				<span
					{...(!isEmpty(input.errorId) && { id: input.errorId })}
					className="sui-input__error-message"
					role="alert"
				>
					{input.error}
				</span>
			)}

			{!isEmpty(input.description) && (
				<span
					{...(!isEmpty(input.descriptionId) && {
						id: input.descriptionId,
					})}
					className="sui-input__description"
				>
					{input.description}
				</span>
			)}
		</div>
	);
};

// Publish required component.
export { Textarea };
