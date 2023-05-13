import React from 'react';

// Import required component
// import { Table as SuiTable } from '../lib/react-table';
import { Box, BoxGroup } from '@wpmudev/react-box';

// Import documentation main page
import docs from './ReactTable.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Simple Elements/Table',
	// component: SuiTable,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Field List" story
const Table = ({ example, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<p>Test</p>
					</BoxGroup>
				</Box>
			</div>
		</div>
	);
};

// Set story arguments.
Table.args = {};

// Set controls for story arguments.
Table.argTypes = {};

// Publish required stories.
export { Table };
