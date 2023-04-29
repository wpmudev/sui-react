import React from 'react';
import { isEmpty, isObject, isUndefined } from '@wpmudev/react-utils';

// Import required modules
import { Label } from './elements/label';
import { Helper } from './elements/helper';
import { ErrorMessage } from './elements/error-message';

// Build form field component
const Field = ({
	id,
	label,
	helper,
	error,
	className,
	isSmall = false,
	isDisabled = false,
	isLabelHidden = false,
	children,
	...props
}) => {
	const has = {}
	const set = {}

	// Define error object
	set.error = Object.assign(
		{
			state: false,
			text: ''
		},
		error
	);

	// Props validation
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false;
	has.helper = !isUndefined(helper) && !isEmpty(helper) ? true : false;
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;

	// Define main class name
	set.class = 'sui-form-field';

	// Define small class name
	if (isSmall) {
		set.class += ' sui-form-field--sm';
	}

	// Define disabled class name
	if (isDisabled) {
		set.class += ' sui-form-field--disabled';
	}

	// Define custom class name(s)
	if (has.class) {
		set.class += ` ${className}`;
	}

	// Render field
	return (
		<div className={set.class} { ...props }>
			<Label id={id} hidden={isLabelHidden}>{label}</Label>
			{children}
			{(isObject(error) && Object.keys(error).length > 0) && (
				<ErrorMessage id={id} show={set.error.state} small={isSmall}>
					{set.error.text}
				</ErrorMessage>
			)}
			{has.helper && (
				<Helper id={id} small={isSmall}>
					{helper}
				</Helper>
			)}
		</div>
	);
}

// Publish component(s)
export { Field }
