import React from "react";

export const Col = ({size, children}) => {
	const has = {}
	const set = {}

	// Props validation
	has.size = 'undefined' !== typeof size && '' !== size;

	// Define main class
	set.class = 'sui-col';

	// Define class based on the column size
	if (has.size) {
		set.class += ' sui-col--' + size;
	}

	return (
		<div className={set.class}>
			{children}
		</div>
	);
};
