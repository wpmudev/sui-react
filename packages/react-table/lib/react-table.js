import React, { createElement } from 'react';

export const TableHead = ({ children }) => {
	return (
		<thead className="sui-table__head">
			{ children }
		</thead>
	);
}

export const TableBody = ({ children }) => {
	return (
		<tbody className="sui-table__body">
			{ children }
		</tbody>
	);
}

export const TableFooter = ({ children }) => {
	return (
		<tfoot className="sui-table__footer">
			{ children }
		</tfoot>
	);
}

export const TableRow = ({ children }) => {
	return (
		<tr className="sui-table__row">
			{ children }
		</tr>
	);
}

export const TableCell = ({ children, hasCheckbox, isHeading, ...props }) => {
	const set = {};

	// Define element tag name
	set.tag = 'td';

	if (isHeading) {
		set.tag = 'th';
	}

	// Define element props
	set.props = {
		className: 'sui-table__cell',
		...props
	}

	// Define class name variations
	if (hasCheckbox) {
		set.props.className += ' sui-table__checkbox';
	}

	return createElement(
		set.tag,
		{ ...set.props },
		children
	);
}

export const Table = ({ children }) => {
	return (
		<table className="sui-table">
			{ children }
		</table>
	);
}
