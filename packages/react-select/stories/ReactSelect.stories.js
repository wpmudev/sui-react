import React, { Fragment } from 'react';

// Import required component(s).
import { Select as SuiSelect } from '../lib/react-select';

// Import documentation main page.
import docs from './ReactSelect.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Select',
	component: Select,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Button" story.
const Select = ({ example, ...props }) => {
	const set = {};

	set.box = {
		margin: 0,
		padding: '30px',
		border: 'white' === props.color ? '1px solid #E6E6E6' : 0,
		borderRadius: '4px',
		background: 'white' === props.color ? '#333' : '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<SuiSelect {...props} />
				</div>
			</div>
		</div>
	);
};

Select.args = {
	example: 'button',
	options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
	isDisabled: false,
	isSmall: false,
};

Select.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Select': 'select',
				'Example: Multiselect': 'multi-select',
				'Example: Smartsearch': 'smart-search',
			},
		},
	},
	options: {
		name: 'Options',
	},
	isDisabled: {
		name: 'Disabled',
	},
	isSmall: {
		name: 'Small',
	},
};

// Publish required stories.
export { Select };
