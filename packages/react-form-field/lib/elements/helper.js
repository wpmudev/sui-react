import React, { createElement } from 'react';

// Build field helper text element
export const Helper = ({ id, children }) => {
	const set = {};

	// Define main class name(s)
	set.class = 'sui-form-field__helper';

	// Define default tag
	set.tag = 'span';

	// Render
	return createElement(
		set.tag,
		{
			id: `${id}__helper`,
			className: set.class
		},
		children
	);
}
