import React from 'react';

// Import required component(s).
import { IconButton as StandardIconButton } from '../lib/react-icon-button';

// Import documentation main page.
import docs from './ReactIconButton.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Icon Button',
	component: StandardIconButton,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Icon Button" story.
const IconButton = ({ example, ...props }) => {
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
					{ 'link' === example && (
						<StandardIconButton
							icon="external-link"
							label="Open link in external window"
							{ ...props } />
					)}
					{ 'button' === example && (
						<StandardIconButton
							icon="add"
							label="Install plugin"
							onClick={() => console.log('Installing plugin...')}
							{ ...props } />
					)}
					{ 'button-load' === example && (
						<StandardIconButton
							icon="download"
							label="Download"
							onClick={() => console.log('Downloading plugin...')}
							{ ...props } />
					)}
				</div>
			</div>
		</div>
	);
};

IconButton.args = {
	example: 'button',
	href: '',
	target: '_blank',
	// htmlFor: '',
	appearance: 'primary',
	color: 'blue',
	isSmall: false,
	isLoading: true,
	isDisabled: false,
};

IconButton.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Link': 'link',
				'Example: Button': 'button',
				'Example: Loading': 'button-load',
			},
		},
	},
	href: {
		name: 'Link',
		control: {
			type: 'text',
		},
		if: {
			arg: 'example',
			eq: 'link',
		},
	},
	target: {
		name: 'Target',
		control: {
			type: 'select',
			options: ['_self', '_blank'],
		},
		if: {
			arg: 'example',
			eq: 'link',
		},
	},
	// htmlFor: {
	// 	name: 'For (input ID)',
	// 	control: {
	// 		type: 'text',
	// 	},
	// 	if: {
	// 		arg: 'example',
	// 		eq: 'button-toggle',
	// 	},
	// },
	appearance: {
		name: 'Appearance',
		control: {
			type: 'select',
			options: {
				'-': '',
				Primary: 'primary',
				Secondary: 'secondary',
				Tertiary: 'tertiary',
			},
		},
	},
	color: {
		name: 'Color',
		control: {
			type: 'select',
			options: {
				'-': '',
				Blue: 'blue',
				Black: 'black',
				Red: 'red',
				Navy: 'navy',
				White: 'white',
			},
		},
	},
	isSmall: {
		name: 'Small',
		control: {
			type: 'boolean',
		},
	},
	isLoading: {
		name: 'Loading',
		control: {
			type: 'boolean',
		},
		if: {
			arg: 'example',
			eq: 'button-load',
		},
	},
	isDisabled: {
		name: 'Disabled',
		control: {
			type: 'boolean',
		},
	},
};

// Publish required stories.
export { IconButton };
