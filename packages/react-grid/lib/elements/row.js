import React from "react";

export const Row = ({align, children}) => {
	const set = {}

	// Assign alignment based on screen size
	set.align = Object.assign(
		{
			xs: '',
			sm: '',
			md: '',
			lg: '',
			xl: '',
		},
		align
	);

	// Define main class
	set.class = 'sui-row';

	// Define class name based on alignment
	for (let key in align) {
		// Check if value is not empty
		if (align[key] !== '') {
			// Check if extra-small key exists
			if (key === 'xs') {
				// Check if value is not "stacked"
				if (align[key] !== 'stacked') {
					set.class += ` sui-row--${align[key]}`;
				}
			} else {
				set.class += ` sui-row-${key}--${align[key]}`;
			}
		}
	}

	return <div className={set.class}>{children}</div>;
}
