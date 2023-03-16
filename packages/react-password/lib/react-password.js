import React, { useState } from 'react';
import { isBoolean, isEmpty, isUndefined } from '@wpmudev/react-utils';
import { Button as SuiButton } from '@wpmudev/react-button';

// Build "Password" component.
const Password = ({ label, description, ...props }) => {
	const {
		id,
		labelId,
		placeholder,
		descriptionId,
		view,
		errorMessage,
		errorId,
		size,
		disabled,
		value = '',
		...inputprops
	} = props;

	const [inputValue, setInputValue] = useState(
		!isUndefined(value) ? value : ''
	);

	const [inputType, setInputType] = useState('password');

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		setInputValue(inputValue);
	};

	const input = {};

	input.class = 'sui-input sui-password';

	input.label = !isUndefined(label) && !isEmpty(label) ? label : '';
	input.description =
		!isUndefined(description) && !isEmpty(description) ? description : '';

	// Input id.
	input.id = !isUndefined(id) && !isEmpty(id) ? id : '';

	// Input type.
	input.type = inputType;

	// Input placeholder.
	input.placeholder =
		!isUndefined(placeholder) && !isEmpty(placeholder) ? placeholder : '';

	// Input aria-labelledby and label id.
	input.labelId = !isUndefined(labelId) && !isEmpty(labelId) ? labelId : '';

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

	// Input view password as text or button.
	input.view = !isUndefined(view) && !isEmpty(view) ? view : 'button';

	// Renders icon element.
	input.icon = Object.assign({
		name: 'password' === inputType ? 'show' : 'hide',
		size: 'lg',
		position: 'lead',
		label: '',
	});

	const hasIcon = 'button' !== input.view ? true : false;

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

	// if input is filled with value.
	if (!isEmpty(inputValue)) {
		input.class += ' sui-input--filled';
	}

	// if password has icon.
	if (hasIcon) {
		input.class += ' sui-password--icon';
	}

	return (
		<div className={input.class}>
			<div className="sui-input__wrapper">
				<input
					value={inputValue}
					type={input.type}
					className="sui-input__field"
					{...(!isEmpty(input.placeholder) && {
						placeholder: input.placeholder,
					})}
					{...(!isEmpty(input.id) && { id: input.id })}
					{...(!isEmpty(input.labelId) && {
						'aria-labelledby': input.labelId,
					})}
					{...((!isEmpty(input.descriptionId) ||
						!isEmpty(input.descriptionId)) && {
						'aria-describedby':
							input.descriptionId + ' ' + input.errorId,
					})}
					{...(!isEmpty(input.disabled) && {
						disabled: input.disabled,
					})}
					onChange={handleInputChange}
					{...inputprops}
				/>
				{!isEmpty(input.label) && (
					<label
						className="sui-input__label"
						{...(!isEmpty(input.id) && { htmlFor: input.id })}
						{...(!isEmpty(input.labelId) && {
							id: input.labelId,
						})}
					>
						{input.label}
					</label>
				)}
				{hasIcon ? (
					<SuiButton
						theme="tertiary"
						color="black"
						icon={input.icon}
						onClick={() => {
							setInputType(
								'password' === inputType ? 'text' : 'password'
							);
						}}
					></SuiButton>
				) : (
					<SuiButton
						theme="secondary"
						color="black"
						onClick={() => {
							setInputType(
								'password' === inputType ? 'text' : 'password'
							);
						}}
					>
						{'password' === inputType ? 'Show' : 'Hide'}
					</SuiButton>
				)}
			</div>

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
export { Password };
