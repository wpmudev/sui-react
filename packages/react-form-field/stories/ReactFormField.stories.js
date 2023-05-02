import React from 'react';

// Import required component
import { Field } from '../lib/react-form-field';

// Import documentation main page
import docs from './ReactFormField.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Form Elements/Form Field',
	component: Field,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build component playground
export const FormField = ({ example, ...args }) => {
	const set = {};

	set.box = {
		padding: 20,
		borderRadius: 4,
		background: '#fff'
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<Field {...args}>
						{'input' === example && (
							<input
								id={args.id}
								type="text"
								placeholder="Unstyled input"
								style={{display: 'block'}} />
						)}
						{'radio' === example && (
							<radiogroup style={{display: 'block'}}>
								<input type="radio" id="radio1" name="radio" value="1" /> Option 1
								<input type="radio" id="radio2" name="radio" value="2" /> Option 2
							</radiogroup>
						)}
					</Field>
				</div>
			</div>
		</div>
	);
};

// Define playground arguments
FormField.args = {
	example: '',
	id: 'myCustomElement',
	label: 'Label',
	helper: 'Helper text',
	error: {
		state: false,
		text: 'Error message'
	},
	className: 'myCustomClass',
	isSmall: false,
	isDisabled: false,
	isLabelHidden: false,
};
FormField.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Empty Field': '',
				'Example: Field + Input': 'input',
				'Example: Field + Radio': 'radio'
			},
		},
	},
	id: {
		name: 'ID',
		type: 'string',
	},
	label: {
		name: 'Label',
		type: 'string',
	},
	helper: {
		name: 'Helper Text',
		type: 'string',
	},
	error: {
		name: 'Error Settings',
		control: 'object',
		if: {
			arg: 'example',
			neq: ''
		}
	},
	className: {},
	isSmall: {
		name: 'Small',
		control: 'boolean'
	},
	isDisabled: {
		name: 'Disabled',
		control: 'boolean'
	},
	isLabelHidden: {
		name: 'SR Label',
		control: 'boolean'
	}
};
