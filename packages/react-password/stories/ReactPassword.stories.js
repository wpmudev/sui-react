import React from 'react';

// Import required component.
import { Password as SuiPassword } from '../lib/react-password';

// Import documentation main page.
import docs from './ReactPassword.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Password',
	component: Password,
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
	isSmall,
	isDisabled,
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
							isSmall={isSmall}
							isDisabled={isDisabled}
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
							isSmall={isSmall}
							isDisabled={isDisabled}
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
	isSmall: false,
	isDisabled: false,
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
	},
	description: {
		name: 'Description',
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
	},
	isSmall: {
		name: 'Small',
	},
	isDisabled: {
		name: 'Disabled',
	},
};

// Publish required stories.
export { Password };
