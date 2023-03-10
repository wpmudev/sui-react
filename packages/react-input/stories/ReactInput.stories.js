import React, { useState, useEffect } from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

// Import required component.
import { Input as SuiInput } from '../lib/react-input';

// Import documentation main page.
import docs from './ReactInput.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Input',
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
	label,
	description,
	color,
	size,
	iconMode,
	iconString,
	icon,
	disabled,
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	const props = {};

	props.color = color;
	props.icon = iconString;

	if ('object' === iconMode) {
		props.icon = icon;
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{'input' === example && (
						<SuiInput
							id="input-default"
							label={label}
							labelId="label-id"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							size={size}
							disabled={disabled}
							{...('none' !== iconMode && { icon: props.icon })}
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
							size={size}
							disabled={disabled}
							{...('none' !== iconMode && { icon: props.icon })}
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
							size={size}
							disabled={disabled}
							{...('none' !== iconMode && { icon: props.icon })}
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
	size: 'lg',
	iconMode: 'none',
	iconString: 'add',
	icon: {
		name: 'add',
		size: 'md',
		position: 'lead',
	},
	disabled: false,
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
		table: {
			category: 'Elements',
		},
	},
	description: {
		name: 'Description',
		table: {
			category: 'Elements',
		},
	},
	size: {
		name: 'Size',
		control: {
			type: 'select',
			options: {
				Large: 'lg',
				Small: 'sm',
			},
		},
		table: {
			category: 'Modifiers',
		},
	},
	iconMode: {
		name: 'Icon Mode',
		control: {
			type: 'inline-radio',
			options: {
				None: 'none',
				String: 'string',
				Object: 'object',
			},
		},
		table: {
			category: 'Elements',
		},
	},
	iconString: {
		name: 'Icon String',
		control: 'text',
		table: {
			category: 'Elements',
		},
		if: {
			arg: 'iconMode',
			eq: 'string',
		},
	},
	icon: {
		name: 'Icon Object',
		control: 'object',
		table: {
			category: 'Elements',
		},
		if: {
			arg: 'iconMode',
			eq: 'object',
		},
	},
	disabled: {
		name: 'Disabled',
		table: {
			category: 'States',
		},
	},
};

// Publish required stories.
export { Input };
