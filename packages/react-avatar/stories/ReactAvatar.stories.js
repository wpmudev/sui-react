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
	example,
	iconMode,
	iconString,
	icon,
	image,
	status
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
						status={status}
					></SuiAvatar>
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Avatar.args = {
	status: 'warning',
	iconMode: 'image',
	iconString: 'logo',
	image: 'https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png',
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
		control: 'select',
		table: {
			category: 'Elements'
		},
		options: {
			'Status: Online': 'online',
			'Status: Warning': 'warning',
			'Status: Check': 'check'
		}
	},
	size: {
		name: 'Size',
		control: 'select',
		table: {
			category: 'Modifiers'
		},
		options: {
			'Size: Default': 'default',
			'Size: Small': 'small'
		}
	},
};

// Publish required stories.
export { Avatar };
