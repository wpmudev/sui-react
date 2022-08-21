import React from 'react';
import docs from './tab-docs/Overline.mdx';

import '../src/typography.scss';

export default {
	title: 'SUI/CSS Framework/Typography/Overline',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

const OverlineDemo = ({ children }) => {
	return <p className="sui-overline">{children}</p>;
};

export const Overline = ({ align, children }) => {
	const hasAlign = align && align !== '' ? true : false;
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: '#FFF',
		textAlign: hasAlign ? align : 'left',
	};

	return (
		<div className="sui-layout sui-layout--justify sui-layout--spacing">
			<div style={boxStyles}>
				<OverlineDemo>{children}</OverlineDemo>
			</div>
		</div>
	);
};
Overline.args = {
	align: 'left',
	children: 'The quick brown fox jumps over the lazy dog',
};
Overline.argTypes = {
	align: {
		name: 'Text Align',
		control: {
			type: 'select',
			options: {
				Left: 'left',
				Center: 'center',
				Right: 'right',
			},
		},
		table: {
			category: 'Container',
		},
	},
	children: {
		name: 'Demo Content',
		table: {
			category: 'Element',
		},
	},
};
