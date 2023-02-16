import React, { useState, useEffect } from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Import required component.
import { Avatar as SuiAvatar } from '../lib/react-avatar';

// Import documentation main page.
import docs from './ReactAvatar.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Avatar',
	component: SuiAvatar,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Avatar" story.
const Avatar = ({
	color,
	iconMode,
	iconString,
	image,
	status,
	size
}) => {

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	const props = {};

	props.icon = iconString;

	if ( 'none' === iconMode ) {
		props.icon = 'user-alt';
	}

	if ( 'image' === iconMode ) {
		props.icon = image;
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiAvatar
						{ ... ( 'image' !== iconMode ? { icon: props.icon } : { image: props.icon } ) }
						size={size}
						status={status}
					></SuiAvatar>
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Avatar.args = {
	status: 'none',
	iconMode: 'image',
	iconString: 'logo',
	image: 'https://avatars.githubusercontent.com/u/40248406?v=4',
	size: 'default'
};

// Set controls for story arguments.
Avatar.argTypes = {
	iconMode: {
		name: 'Icon Mode',
		control: {
			type: 'inline-radio',
			options: {
				None: 'none',
				Image: 'image',
				String: 'string'
			}
		},
		table: {
			category: 'Elements'
		}
	},
	iconString: {
		name: 'Icon String',
		control: 'text',
		table: {
			category: 'Elements'
		},
		if: {
			arg: 'iconMode',
			eq: 'string'
		}
	},
	image: {
		name: 'Image',
		control: 'text',
		table: {
			category: 'Elements'
		},
		if: {
			arg: 'iconMode',
			eq: 'image'
		}
	},
	status: {
		name: 'Status',
		control: {
			type: 'select',
			options: {
				'Status: None': 'none',
				'Status: Warning': 'warning',
				'Status: Danger': 'danger',
				'Status: Check': 'check-alt',
				'Status: Timer': 'timer'
			}
		},
		table: {
			category: 'Elements'
		}
	},
	size: {
		name: 'Size',
		control: {
			type: 'select',
			options: {
				'Size: Default': 'default',
				'Size: Small': 'small'
			}
		},
		table: {
			category: 'Modifiers'
		}
	},
};

// Publish required stories.
export { Avatar };
