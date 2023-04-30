import React, { Fragment, useState } from 'react';

// Import modules
import { TextField as SuiTextField, TextFieldRef } from '../lib/react-field-text';
import { LoadingButton } from '@wpmudev/react-button';

// Import documentation
import docs from './ReactFieldText.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Form Elements/Text Field',
	component: SuiTextField,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Text Field" story.
const TextField = ({
	example,
	...args
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{'standard' === example && (
						<SuiTextField {...args} />
					)}
					{'readonly' === example && (
						<SuiTextField defaultValue="Read only field" {...args} />
					)}
					{'error' === example && (
						<Fragment>
							<TextFieldRef
								id="fullName"
								label="Enter a name"
								helper='Type "Jhon Doe" in the field above to get a successful submit, or anything else to get an error message.'
								errorMessage='You need to type "John Doe" to get a successful submit.'
								isError={hasError} />
							<LoadingButton
								appearance="primary"
								color="blue"
								style={{margin: 0}}
								isLoading={isLoading}
								onClick={() => {
									const getField = document.getElementById('fullName');
									const getValue = getField.value;

									setIsLoading(true);

									setTimeout(() => {
										if (getValue !== 'John Doe') {
											setHasError(true);
										} else {
											setHasError(false);
										}
										setIsLoading(false);
									}, 1000);
								}}>
								Submit
							</LoadingButton>
						</Fragment>
					)}
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
TextField.args = {
	example: 'standard',
	type: 'text',
	id: 'myCustomId',
	label: 'Full Name',
	helper: 'Cras mattis consectetur purus sit amet fermentum.',
	errorMessage: 'Maecenas faucibus mollis interdum.',
	isLabelHidden: false,
	isSmall: false,
	isError: false,
	isReadOnly: true,
	isDisabled: false,
};

// Set controls for story arguments.
TextField.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Standard': 'standard',
				'Example: Read Only': 'readonly',
				'Example: Error interactive': 'error'
			},
		},
	},
	type: {
		name: 'Type',
		control: {
			type: 'select',
			options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url']
		},
		if: {
			arg: 'example',
			neq: 'error'
		}
	},
	id: {
		name: 'ID',
		control: 'text',
		if: {
			arg: 'example',
			neq: 'error'
		}
	},
	label: {
		name: 'Label',
		if: {
			arg: 'example',
			neq: 'error'
		}
	},
	helper: {
		name: 'Helper',
		if: {
			arg: 'example',
			neq: 'error'
		}
	},
	errorMessage: {
		name: 'Error Message',
		if: {
			arg: 'example',
			neq: 'error'
		}
	},
	isSmall: {
		name: 'Small',
		control: 'boolean',
		if: {
			arg: 'example',
			neq: 'error'
		}
	},
	isLabelHidden: {
		name: 'SR Label',
		control: 'boolean',
		if: {
			arg: 'example',
			neq: 'error'
		}
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
export { TextField };
