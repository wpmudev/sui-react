import React from 'react';
import docs from './tab-docs/Paragraph.mdx';

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

const ParagraphDemo = ({ small, children }) => {
	const smallExists = small && 'boolean' === typeof small;

	if ( smallExists && small ) {
		return <p><small>{ children }</small></p>
	}

	return <p>{children}</p>;
};

export const Paragraph = ({ align, small, children }) => {
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
				<ParagraphDemo small={ small }>{children}</ParagraphDemo>
			</div>
		</div>
	);
};
Paragraph.args = {
	align: 'left',
	small: false,
	children: 'The quick brown fox jumps over the lazy dog.',
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
	small: {
		name: 'Small Size',
		control: {
			type: 'boolean',
		},
		table: {
			category: 'Element',
		},
	},
	children: {
		name: 'Demo Content',
		table: {
			category: 'Element',
		},
	},
};
