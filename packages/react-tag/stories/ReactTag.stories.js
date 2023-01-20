import React, { useState, useEffect } from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Import required component.
import { Tag as SuiTag } from '../lib/react-tag';

// Import documentation main page.
import docs from './ReactTag.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Tag',
	component: SuiTag,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Tag" story.
const Tag = ({ ...props }) => {
	console.log(props);
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: props.color !== 'white' ? '#fff' : '#333',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTag {...props} />
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Tag.args = {
	label: 'Primary',
	childrenContent: false,
	color: 'default',
	size: 'default',
	icon: '',
	href: '',
	onClick: '',
	ghost: false,
	uppercase: false,
	truncated: false,
	multiline: false,
};

// Set controls for story arguments.
Tag.argTypes = {
	label: {
		description: 'The label of the tag.',
		control: {
			type: 'text',
		},
	},
	childrenContent: {
		description: 'If true, the content of the tag will be rendered as children.',
		control: {
			type: 'boolean',
		},
	},
	color: {
		description: 'The color of the tag that will be filled background.',
		control: {
			type: 'select',
			options: ['default', 'red', 'yellow', 'green', 'blue', 'purple', 'disabled'],
		},
	},
	size: {
		description: 'The size of the tag.',
		control: {
			type: 'select',
			options: { default: 'default', small: 'sm', 'mini pro': 'pro', 'mini beta': 'beta' },
		},
	},
	icon: {
		description: 'Add icon inside the tag.',
		control: {
			type: 'text',
		},
	},
	href: {
		description: 'The link or href of the tag.',
		control: { type: 'text' },
	},
	onClick: {
		description: 'The button with onClick function for the tag.',
		control: { type: 'function' },
	},
	ghost: {
		description: 'Some designs will require outlined tags.',
		control: { type: 'boolean' },
	},
	truncated: {
		description:
			'By default tags are multi-line, this mean height of the tag will adjust depending on the amount of text and its width. But there are times when you will need to truncate text inside tag instead using multi-line text.',
		control: { type: 'boolean' },
	},
	uppercase: {
		description: 'Some tags require to have uppercase text.',
		control: { type: 'boolean' },
	},
	multiline: {
		description: 'Some tags require to have multi-line text.',
		control: { type: 'boolean' },
	},
};

// Publish required stories.
export { Tag };
