import React from 'react';
import docs from './Subtitle.mdx';

import '../src/typography.scss';

export default {
	title: 'SUI/CSS Framework/Typography/Subtitle',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

const SubtitleDemo = ({ small, children }) => {
	const isSmall = small && small === true ? true : false;
	const setSmall = isSmall ? ' sui-subtitle--sm' : '';

	return <p className={`sui-subtitle${setSmall}`}>{children}</p>;
};

export const Subtitle = ({ align, small, children }) => {
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
				<SubtitleDemo small={small}>{children}</SubtitleDemo>
			</div>
		</div>
	);
};
Subtitle.args = {
	small: false,
	align: 'left',
	children: 'The quick brown fox jumps over the lazy dog',
};
Subtitle.argTypes = {
	small: {
		name: 'Small Size',
		control: {
			type: 'boolean',
		},
	},
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
