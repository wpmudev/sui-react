import React from 'react';

// Import required component
import { ProgressBar as SuiProgressBar } from '../lib/react-progress-bar';
import { Box, BoxGroup } from '@wpmudev/react-box';

// Import documentation main page
import docs from './ReactProgressBar.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Compound Elements/Progress Bar',
	// component: SuiProgressBar,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Field List" story
const ProgressBar = ({ example, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<SuiProgressBar {...args} />
					</BoxGroup>
				</Box>
			</div>
		</div>
	);
};

// Set story arguments
ProgressBar.args = {
	label: 'Loading Data...',
	value: 50,
	size: '',
	isInline: false,
	hasValue: true,
	hasAction: false
};

// Set controls for story arguments
ProgressBar.argTypes = {
	label: {
		name: 'Label'
	},
	value: {
		name: 'Value',
		control: {
			type: 'number',
			min: 0,
			max: 100
		}
	},
	size: {
		size: 'Size',
		control: {
			type: 'select',
			options: {
				'Size: Small': 'sm',
				'Size: Default': '',
				'Size: Large': 'lg',
			},
		},
	},
	isInline: {
		name: 'Inline'
	},
	hasValue: {
		name: 'Show Value'
	},
	hasAction: {
		name: 'Show Action'
	},
};

// Publish required stories
export { ProgressBar };
