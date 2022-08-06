import React from 'react';
import docs from './Grid.mdx';

import { Layout } from './Container';
import { GridSample } from './Grid';

import '../scss/layout.scss';

export default {
	title: 'SUI/CSS Framework/Layout/Grid',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

export const Grid = (args) => {
	return (
		<Layout contained={true}>
			<GridSample {...args} />
		</Layout>
	);
};
Grid.args = {
	size: 1,
};
Grid.argTypes = {
	size: {
		name: 'Column Size',
		control: {
			type: 'range',
			min: 1,
			max: 12,
		},
	},
};
