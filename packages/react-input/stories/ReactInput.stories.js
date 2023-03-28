import React from 'react';

// Import required component.
import { Input as SuiInput } from '../lib/react-input';

// Import documentation main page.
import docs from './ReactInput.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Input',
	component: Input,
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
	label,
	description,
	color,
	isSmall,
	iconLead,
	iconTrail,
	isDisabled,
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{'input' === example && (
						<SuiInput
							id="input-default"
							label={label}
							value="true"
							labelId="label-id"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							isSmall={isSmall}
							isDisabled={isDisabled}
							iconLead={iconLead}
							iconTrail={iconTrail}
						/>
					)}

					{'input-error' === example && (
						<SuiInput
							id="input-default"
							label={label}
							labelId="label-id"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							errorMessage="This is an error."
							errorId="error-id"
							isSmall={isSmall}
							isDisabled={isDisabled}
							iconLead={iconLead}
							iconTrail={iconTrail}
						/>
					)}

					{'input-readonly' === example && (
						<SuiInput
							id="input-default"
							label={label}
							labelId="label-id"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							readOnly={true}
							isSmall={isSmall}
							isDisabled={isDisabled}
							value="Ready only"
							iconLead={iconLead}
							iconTrail={iconTrail}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Input.args = {
	example: 'input',
	label: 'Label',
	description: 'Help text',
	iconMode: 'none',
	iconLead: 'user',
	iconTrail: 'user',
	isSmall: false,
	isDisabled: false,
};

// Set controls for story arguments.
Input.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Basic Input': 'input',
				'Example: Input with error': 'input-error',
				'Example: Read only input': 'input-readonly',
			},
		},
	},
	label: {
		name: 'Label',
	},
	description: {
		name: 'Description',
	},
	isSmall: {
		name: 'Small',
	},
	iconMode: {
		name: 'Icon Mode',
		control: {
			type: 'inline-radio',
			options: {
				None: 'none',
				Lead: 'icon-lead',
				Trail: 'icon-trail',
			},
		},
	},
	iconLead: {
		name: 'Icon Lead',
		control: 'text',
		if: {
			arg: 'iconMode',
			eq: 'icon-lead',
		},
	},
	iconTrail: {
		name: 'Icon Trail',
		control: 'text',
		if: {
			arg: 'iconMode',
			eq: 'icon-trail',
		},
	},
	isDisabled: {
		name: 'Disabled',
	},
};

// Publish required stories.
export { Input };
