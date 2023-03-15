import React, { useState, useEffect } from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

// Import required component.
import { Password as SuiPassword } from '../lib/react-password';

// Import documentation main page.
import docs from './ReactPassword.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Password',
	component: SuiPassword,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Password" story.
const Password = ({
	example,
	label,
	description,
	view,
	color,
	size,
	disabled,
}) => {
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
					{'password' === example && (
						<SuiPassword
							id="password-default"
							label={label}
							value="pa$$Word123"
							labelId="label-id"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							view={view}
							size={size}
						/>
					)}

					{'password-error' === example && (
						<SuiPassword
							id="password-default"
							label={label}
							labelId="label-id"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							errorMessage="This is an error."
							errorId="error-id"
							view={view}
							size={size}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Password.args = {
	example: 'password',
	label: 'Password',
	description: 'Enter password.',
	view: 'icon',
	size: 'lg',
};

// Set controls for story arguments.
Password.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Basic Password': 'password',
				'Example: Password with error': 'password-error',
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
	view: {
		name: 'Hide and View',
		control: {
			type: 'inline-radio',
			options: {
				Button: 'button',
				'Icon Button': 'icon',
			},
		},
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
};

// Publish required stories.
export { Password };
