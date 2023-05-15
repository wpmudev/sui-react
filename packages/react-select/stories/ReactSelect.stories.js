import React, { Fragment } from 'react';

// Import required component(s).
import { Select as StandardSelect, SearchSelect, SmartSearchSelect, MultiSelect } from '../lib/react-select';

// Import documentation main page.
import docs from './ReactSelect.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Form Elements/Select',
	component: Select,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Select" story.
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
					{'select' === example && (
						<StandardSelect {...props} />
					)}
					{'search' === example && (
						<SearchSelect {...props} />
					)}
					{'smart-search' === example && (
						<SmartSearchSelect {...props} />
					)}
					{'multi-select' === example && (
						<MultiSelect {...props} />
					)}
				</div>
			</div>
		</div>
	);
};

Select.args = {
	id: "id-1",
	example: 'select',
	label: 'Select Country',
	options: [
		{
			icon: 'settings',
			id: 'option-1',
			label: 'Option 1 is the option.',
			isSelected: false
		},
		{
			icon: 'settings',
			id: 'option-2',
			label: 'Option 2',
			isSelected: false
		},
		{
			icon: 'settings',
			id: 'option-3',
			label: 'Option 3',
			isSelected: false
		},
		{
			icon: 'settings',
			id: 'option-4',
			label: 'Option 4',
			isSelected: false
		},
		{
			icon: 'settings',
			id: 'option-5',
			label: 'Option 5',
			isSelected: false
		},
		{
			icon: 'settings',
			id: 'option-6',
			label: 'Option 6',
			isSelected: false
		},
		{
			icon: 'settings',
			id: 'option-7',
			label: 'Option 7',
			isSelected: false
		},
		{
			icon: 'settings',
			id: 'option-8',
			label: 'India',
			isSelected: false
		}
	],
	isError: false,
	isReadOnly: false,
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
				'Example: Search': 'search',
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
	}
};

// Publish required stories.
export { Select };
