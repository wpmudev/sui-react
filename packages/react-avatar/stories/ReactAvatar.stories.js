import React from 'react';

// Import required component
import { Avatar as SuiAvatar } from '../lib/react-avatar';

// Import documentation main page
import docs from './ReactAvatar.mdx';

// Import required assets
import image from './images/unreal-person.jpg';

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
const Avatar = ({ ...props }) => {
	const set = {};

	set.box = {
		padding: 20,
		borderRadius: 4,
		background: '#fff',
		fontSize: 0,
		lineHeight: 1
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<SuiAvatar {...props} />
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Avatar.args = {
	example: 'icon',
	status: '',
	image: {
		alt: 'Unreal Person avatar image',
		src: image,
	},
	isSmall: false,
};

// Set controls for story arguments.
Avatar.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Icon Avatar': 'icon',
				'Example: Image Avatar': 'image'
			},
		},
	},
	image: {
		name: 'Image',
		control: 'object',
		if: {
			arg: 'example',
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
		control: 'boolean',
	},
};

// Publish required stories.
export { Avatar };
