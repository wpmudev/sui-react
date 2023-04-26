import React from 'react';

// Import required component.
import { Tag as SuiTag } from '../lib/react-tag';

// Import documentation main page.
import docs from './ReactTag.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Tag',
	component: Tag,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Tag" story.
const Tag = ({ children, ...props }) => {
	const set = {};

	set.box = {
		margin: 0,
		padding: '30px',
		border: '1px solid #E6E6E6',
		borderRadius: '4px',
		background: props.color === 'white' ? '#333' : '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<SuiTag {...props}>
						{children}
					</SuiTag>
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Tag.args = {
	children: 'Hello, I am a tag',
	design: '',
	color: '',
	style: '',
	isUppercase: false,
	isSmall: false,
};

// Set controls for story arguments.
Tag.argTypes = {
	children: {
		name: 'Content',
	},
	design: {
		name: 'Design',
		control: {
			type: 'select',
			options: {
				'Design: Solid': '',
				'Design: Outlined': 'outlined',
			},
		},
	},
	color: {
		name: 'Color',
		control: {
			type: 'select',
			options: {
				'Color: Default': '',
				'Color: Blue (Information)': 'blue',
				'Color: Navy Blue': 'navy',
				'Color: Yellow (Warning)': 'yellow',
				'Color: Red (Error)': 'red',
				'Color: Green (Success)': 'green',
				'Color: Black': 'black',
				'Color: White': 'white',
			},
		},
	},
	style: {
		name: 'Style',
		control: {
			type: 'select',
			options: {
				'Style: Default': '',
				'Style: Multiline': 'multiline',
				'Style: Truncated': 'truncated',
			},
		},
	},
	isUppercase: {
		name: 'Uppercase',
		control: {
			type: 'boolean',
		},
	},
	isSmall: {
		name: 'Small',
		control: {
			type: 'boolean',
		},
	},
};

// Publish required stories.
export { Tag };
