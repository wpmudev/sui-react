import React from 'react';
import docs from './Grid.mdx';

import { Layout } from './Container';
import { GridSample, Row, Col, BlockSample } from './Grid';

import '../src/layout.scss';

export default {
	title: 'SUI/CSS Framework/Layout/Grid',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

const alignmentOptions = ['inline', 'stacked'];

export const Grid = (args) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 3,
		background: '#fff',
	};

	return (
		<Layout fullwidth={false} justify={true} spacing={true}>
			<strong>This text needs to be aligned with the grid.</strong>{' '}
			Vestibulum id ligula porta felis euismod semper. Morbi leo risus,
			porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.
			Donec ullamcorper nulla non metus auctor fringilla. Curabitur
			blandit tempus porttitor. Donec ullamcorper nulla non metus auctor
			fringilla. Aenean lacinia bibendum nulla sed consectetur.
			<br />
			&nbsp;
			<br />
			<GridSample {...args} />
			<div style={boxStyles}>
				<GridSample {...args} />
				<Row alignMD="inline">
					<Col size="9">
						<BlockSample parent={true} color="blue">
							<span
								style={{ display: 'block', marginBottom: 10 }}
							>
								.sui-col--9
							</span>
							<GridSample border={true} {...args} />
						</BlockSample>
					</Col>
					<Col size="3">
						<BlockSample parent={true} color="blue">
							<span
								style={{ display: 'block', marginBottom: 10 }}
							>
								.sui-col--3
							</span>
							<BlockSample color="blue" />
						</BlockSample>
					</Col>
				</Row>
			</div>
		</Layout>
	);
};
Grid.args = {
	alignXS: 'stacked',
	alignSM: 'inline',
	alignMD: 'inline',
	alignLG: 'inline',
	alignXL: 'inline',
	size: 1,
};
Grid.argTypes = {
	alignXS: {
		name: 'None (Auto)',
		control: {
			type: 'radio',
			options: alignmentOptions,
		},
		table: {
			category: 'Row Controls',
			subcategory: 'Alignment',
		},
	},
	alignSM: {
		name: 'Small (≥ 783px)',
		control: {
			type: 'radio',
			options: alignmentOptions,
		},
		table: {
			category: 'Row Controls',
			subcategory: 'Alignment',
		},
	},
	alignMD: {
		name: 'Medium (≥ 1024px)',
		control: {
			type: 'radio',
			options: alignmentOptions,
		},
		table: {
			category: 'Row Controls',
			subcategory: 'Alignment',
		},
	},
	alignLG: {
		name: 'Large (≥ 1200px)',
		control: {
			type: 'radio',
			options: alignmentOptions,
		},
		table: {
			category: 'Row Controls',
			subcategory: 'Alignment',
		},
	},
	alignXL: {
		name: 'Extra Large (≥ 1600px)',
		control: {
			type: 'radio',
			options: alignmentOptions,
		},
		table: {
			category: 'Row Controls',
			subcategory: 'Alignment',
		},
	},
	size: {
		name: 'Column Size',
		control: {
			type: 'range',
			min: 1,
			max: 12,
		},
		table: {
			category: 'Column Controls',
		},
	},
};
