import React from 'react';
import docs from './Container.mdx';

import { Layout } from './Container';

import '../scss/layout.scss';

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
	return (
		<Layout {...args}>
			<h1>Container</h1>
			<p>
				Hello, I am a content wrapped inside a layout class:{' '}
				<code>sui-layout</code>. By default, I'll be fullscreen but you
				can wrap me inside a layout content element (
				<code>sui-layout__content</code>) to set a maximum width for the
				content.
			</p>
		</Layout>
	);
};
Container.args = {
	fullwidth: true,
};
Container.argTypes = {
	fullwidth: {
		name: 'Full Width',
		control: {
			type: 'boolean',
		},
	},
};
