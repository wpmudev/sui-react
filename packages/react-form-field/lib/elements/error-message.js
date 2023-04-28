import React from 'react';

// Build field error message element
export const ErrorMessage = ({ id, show = false, children }) => {
	const set = {};

	// Define main class name(s)
	set.class = 'sui-form-field__error-message';

	return (
		<span id={`${id}__error`} className={set.class}>
			{show && <span>{children}</span>}
		</span>
	);
}
