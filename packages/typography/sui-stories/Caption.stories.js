import React from 'react';
import docs from './Caption.mdx';

import '../src/typography.scss';

export default {
	title: 'SUI/CSS Framework/Typography/Caption',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

const CaptionDemo = ({ children }) => {
	return <p className="sui-caption">{children}</p>;
};

export const Caption = ({ align, children }) => {
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
				<CaptionDemo>{children}</CaptionDemo>
			</div>
		</div>
	);
};
Caption.args = {
	align: 'left',
	children: 'The quick brown fox jumps over the lazy dog',
};
Caption.argTypes = {
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
	},
	children: {
		name: 'Demo Content',
	},
};
