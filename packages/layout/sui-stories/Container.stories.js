import React from 'react';
import docs from './Container.mdx';

import { Layout } from './Container';

import '../src/layout.scss';

export default {
	title: 'SUI/CSS Framework/Layout/Container',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
		interactions: {
			disabled: true,
		},
	},
};

export const Container = (args) => {
	const boxStyles = {
		padding: '16px 0',
		background: '#fff',
	};

	const boxWrapperStyles = {
		padding: '0 32px',
	};

	const logoStyles = {
		width: 48,
		height: 48,
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16,
		background: '#2DC4E0',
		color: '#FFF',
		fontSize: 22,
		lineHeight: 1,
		fontWeight: 700,
		textAlign: 'center',
	};

	return (
		<Layout {...args}>
			<div style={boxStyles}>
				<div style={boxWrapperStyles}>
					<div style={logoStyles}>L</div>
				</div>
			</div>
		</Layout>
	);
};
Container.args = {
	fullwidth: true,
	justify: true,
	spacing: true,
};
Container.argTypes = {
	fullwidth: {
		name: 'Full Width',
		control: {
			type: 'boolean',
		},
	},
	justify: {
		name: 'Top Spacing',
		control: {
			type: 'boolean',
		},
	},
	spacing: {
		name: 'Sides Spacing',
		control: {
			type: 'boolean',
		},
	},
};
