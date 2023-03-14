import React, { useState, useEffect } from 'react';

// Import required component.
import { Textarea as SuiTextarea } from '../lib/react-textarea';

// Import documentation main page.
import docs from './ReactTextarea.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Textarea',
	component: SuiTextarea,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Textarea" story.
const Textarea = ({ example, description, color, size, disabled }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	const props = {};

	props.color = color;

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{'textarea' === example && (
						<SuiTextarea
							id="textarea-default"
							rows="4"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							size={size}
							disabled={disabled}
						/>
					)}

					{'textarea-error' === example && (
						<SuiTextarea
							id="textarea-default"
							rows="4"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							errorMessage="This is an error."
							errorId="error-id"
							size={size}
							disabled={disabled}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Textarea.args = {
	example: 'textarea',
	description: 'Help text',
	size: 'lg',
	disabled: false,
};

// Set controls for story arguments.
Textarea.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Basic Textarea': 'textarea',
				'Example: Textarea with error': 'textarea-error',
			},
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
	disabled: {
		name: 'Disabled',
		table: {
			category: 'States',
		},
	},
};

// Publish required stories.
export { Textarea };
