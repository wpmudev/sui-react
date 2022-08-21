import React from 'react';
import docs from './tab-docs/Heading.mdx';

import '../src/typography.scss';

export default {
	title: 'SUI/CSS Framework/Typography/Heading',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

const HeadingDemo = ({ type, children }) => {
	const hasType = type && type !== '' ? true : false;
	const setType = hasType ? ' sui-heading--' + type : '';

	return <h1 className={`sui-heading${setType}`}>{children}</h1>;
};

export const Heading = ({ children, align, type }) => {
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
				<HeadingDemo type={type}>{children}</HeadingDemo>
			</div>
		</div>
	);
};
Heading.args = {
	align: 'left',
	type: 'h1',
	children: 'The quick brown fox jumps over the lazy dog',
};
Heading.argTypes = {
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
	type: {
		name: 'Heading Type',
		control: {
			type: 'select',
			options: {
				'Heading 1': 'h1',
				'Heading 2': 'h2',
				'Heading 3': 'h3',
				'Heading 4': 'h4',
				'Heading 5': 'h5',
			},
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
