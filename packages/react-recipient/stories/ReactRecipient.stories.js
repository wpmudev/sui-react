import React from 'react';

// Import required component
import { Recipient as SuiRecipient } from '../lib/react-recipient';

// Import documentation main page
import docs from './ReactRecipient.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Recipient',
	component: Recipient,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Avatar" story.
const Recipient = ({ ...props }) => {
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
					<SuiRecipient {...props} />
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Recipient.args = {
	example: ''
};

// Set controls for story arguments.
Recipient.argTypes = {
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
export { Recipient };
