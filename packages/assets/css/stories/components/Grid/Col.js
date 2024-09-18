import React from 'react';

export const Col = ({ size, children }) => {
	const hasSize = 'undefined' !== typeof size && '' !== size;

	return (
		<div className={`sui-col${hasSize ? ' sui-col--' + size : ''}`}>
			{children}
		</div>
	);
};
