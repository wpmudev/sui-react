import React from 'react';

// Import required component.
import { Input as SuiInput } from '../lib/react-input';

// Import documentation main page.
import docs from './ReactInput.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Form Elements/Input',
	component: SuiInput,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Input" story.
const Input = ({
	example,
	...args
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiInput {...args} />
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Input.args = {
	example: 'standard',
	type: 'text',
	id: 'myCustomId',
	value: 'Hello World',
	isSmall: false,
	isError: false,
	isReadOnly: true,
	isDisabled: false,
};

// Set controls for story arguments.
Input.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Standard': 'standard',
				'Example: Read Only': 'readonly',
			},
		},
	},
	type: {
		name: 'Type',
		control: {
			type: 'select',
			options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url']
		}
	},
	id: {
		name: 'ID',
		control: 'text'
	},
	value: {
		name: 'Value',
	},
	isSmall: {
		name: 'Small',
		control: 'boolean'
	},
	isError: {
		name: 'Error',
		control: 'boolean',
		if: {
			arg: 'example',
			eq: 'standard'
		}
	},
	isReadOnly: {
		name: 'Read Only',
		control: 'boolean',
		if: {
			arg: 'example',
			eq: 'readonly'
		}
	},
	isDisabled: {
		name: 'Disabled',
		control: 'boolean',
		if: {
			arg: 'example',
			eq: 'standard'
		}
	},
};

// Publish required stories.
export { Input };
