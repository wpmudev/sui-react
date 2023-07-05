import React, { Fragment } from 'react';

// Import required component
import { Toggle as SuiToggle } from '../lib/react-toggle';
import { Box, BoxGroup } from '@wpmudev/react-box';

// Import documentation main page
import docs from './ReactToggle.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Simple Elements/Toggle',
	component: SuiToggle,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Toggle" story
const Toggle = ({ example, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<SuiToggle {...args} />
					</BoxGroup>
				</Box>
			</div>
		</div>
	);
};

// Set story arguments.
Toggle.args = {
	label: 'Toggle Label',
	isLabelHidden: false,
	isDisabled: false
};

// Set controls for story arguments.
Toggle.argTypes = {};

// Publish required stories.
export { Toggle };
