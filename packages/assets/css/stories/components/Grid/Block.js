import React from 'react';

export const Block = ({ container, color, title, children, ...args }) => {
	const isContainer = container && 'boolean' === typeof container;

	const decorator = {
		minHeight: 60,
		overflow: 'hidden',
		borderRadius: 4 + 'px',
		fontSize: 10 + 'px',
		lineHeight: 16 + 'px',
		fontFamily: 'Menlo, Courier, monospace',
		fontWeight: 'bold',
	};

	if (isContainer) {
		decorator.padding = '15px 10px';
	} else {
		decorator.display = 'flex';
		decorator.alignItems = 'center';
		decorator.justifyContent = 'center';
		decorator.padding = 5;
	}

	switch (color) {
		case 'blue':
			decorator.background = '#e1eaff';
			decorator.color = '#0056b1';

			// if (border && border === true) {
			// 	decorator.border = '1px solid #0056b1';
			// }
			break;

		default:
			decorator.background = '#f9e1ff';
			decorator.color = '#8d00b1';

			// if (border && border === true) {
			// 	decorator.border = '1px solid #8d00b1';
			// }
			break;
	}

	return (
		<div style={decorator} {...args}>
			{title && 'undefined' !== title && '' !== title && (
				<span style={{ display: 'block', marginBottom: 10 }}>
					{title}
				</span>
			)}
			{children}
		</div>
	);
};
