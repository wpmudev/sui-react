import React from 'react';
import docs from './Paragraph.mdx';

import '../src/typography.scss';

export default {
	title: 'SUI/CSS Framework/Typography/Paragraph',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

const ParagraphDemo = ({ children }) => {
	return <p>{children}</p>;
};

export const Paragraph = ({ align, children }) => {
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
				<ParagraphDemo>{children}</ParagraphDemo>
			</div>
		</div>
	);
};
Paragraph.args = {
	align: 'left',
	children: 'The quick brown fox jumps over the lazy dog',
};
Paragraph.argTypes = {
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
