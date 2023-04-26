import React from 'react';

// Import required component.
import { Avatar as SuiAvatar } from '../lib/react-avatar';

// Import documentation main page.
import docs from './ReactAvatar.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Avatar',
	component: Avatar,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Avatar" story.
const Avatar = ({ color, iconMode, iconString, image, status, isSmall }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	const props = {};

	props.icon = iconString;

	if ('none' === iconMode) {
		props.icon = 'user-alt';
	}

	if ('image' === iconMode) {
		props.icon = image;
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiAvatar
						{...('image' !== iconMode
							? { icon: props.icon }
							: { image: props.icon })}
						isSmall={isSmall}
						status={status}
					></SuiAvatar>
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Avatar.args = {
	status: '',
	iconMode: 'image',
	iconString: 'logo',
	image: {
		alt: 'image-alt',
		src: 'https://avatars.githubusercontent.com/u/40248406?v=4',
	},
	isSmall: false,
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
				String: 'string',
			},
		},
	},
	iconString: {
		name: 'Icon String',
		control: 'text',
		if: {
			arg: 'iconMode',
			eq: 'string',
		},
	},
	image: {
		name: 'Image',
		control: 'object',
		if: {
			arg: 'iconMode',
			eq: 'image',
		},
	},
	status: {
		name: 'Status',
		control: {
			type: 'select',
			options: {
				'Status: None': '',
				'Status: Confirmed': 'confirmed',
				'Status: Awaiting': 'awaiting',
				'Status: Not Accepted': 'not-accepted',
				'Status: Not Connected': 'not-connected',
			},
		},
	},
	isSmall: {
		name: 'Small',
	},
};

// Publish required stories.
export { Avatar };
