import React from 'react';

// Build field helper text element
export const Helper = ({ id, children }) => {
	const set = {};

	// Define main class name(s)
	set.class = 'sui-form-field__helper';

	return (
		<span id={`${id}__helper`} className={set.class}>
			{children}
		</span>
	);
}
