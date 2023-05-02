import React, { createElement } from 'react';

// Build field error message element
export const ErrorMessage = ({ id, show = false, children }) => {
	const set = {};

	// Define main class name(s)
	set.class = 'sui-form-field__helper';

	// Colorize text
	set.class += ' sui-color-error--50';

	// Define default tag
	set.tag = 'span';

	// Create element
	set.element = createElement(
		'span',
		{
			className: set.class
		},
		children
	);

	// Render
	return createElement(
		'span',
		{
			id: `${id}__error-message`,
			className: 'sui-form-field__error-message'
		},
		show ? set.element : ''
	);
}
