import React, { Children } from 'react';

export const Row = ({ alignment, children }) => {
	const align = Object.assign(
		{
			xs: '',
			sm: '',
			md: '',
			lg: '',
			xl: '',
		},
		alignment
	);

	let alignClass = '';

	for (let key in align) {
		// Check if value is not empty.
		if (align[key] !== '') {
			// Check if extra-small key exists.
			if (key === 'xs') {
				// Check if value is not "stacked".
				if (align[key] !== 'stacked') {
					alignClass += ` sui-row--${align[key]}`;
				}
			} else {
				alignClass += ` sui-row-${key}--${align[key]}`;
			}
		}
	}

	return <div className={`sui-row${alignClass}`}>{children}</div>;
};
