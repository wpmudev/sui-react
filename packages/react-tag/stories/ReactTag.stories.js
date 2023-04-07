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
const Tag = ({
	example,
	label,
	href,
	target,
	color,
	isSmall,
	isDisabled,
	isUppercase,
	design,
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{'button' === example && (
						<SuiTag
							isSmall={isSmall}
							type="button"
							color={color}
							isUppercase={isUppercase}
							design={design}
							onClick={() => console.log('Button Click.')}
							isDisabled={isDisabled}
						>
							{label}
						</SuiTag>
					)}

					{'link' === example && (
						<SuiTag
							isSmall={isSmall}
							type="a"
							href={href}
							target={target}
							color={color}
							isUppercase={isUppercase}
							design={design}
							isDisabled={isDisabled}
						>
							{label}
						</SuiTag>
					)}

					{'span' === example && (
						<SuiTag
							isSmall={isSmall}
							color={color}
							isUppercase={isUppercase}
							design={design}
							isDisabled={isDisabled}
						>
							{label}
						</SuiTag>
					)}
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Tag.args = {
	example: 'span',
	label: 'This is a label.',
	href: '',
	target: '_blank',
	color: 'default',
	design: '',
	isUppercase: false,
	isSmall: false,
	isDisabled: false,
};

// Set controls for story arguments.
Tag.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Default': 'span',
				'Example: Link': 'link',
				'Example: Basic Button': 'button',
			},
		},
	},
	label: {
		name: 'Label',
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
	color: {
		name: 'Color',
		control: {
			type: 'select',
			options: {
				'Color: Default': 'default',
				'Color: Blue': 'blue',
				'Color: Yellow': 'yellow',
				'Color: Red': 'red',
				'Color: Green': 'green',
				'Color: White': 'white',
				'Color: Black': 'black',
				'Color: Dark Blue': 'dark-blue',
			},
		},
	},
	design: {
		name: 'Design',
		control: {
			type: 'select',
			options: {
				'Design: Default': '',
				'Design: Truncated': 'truncated',
				'Design: Multiline': 'multiline',
			},
		},
	},
	isUppercase: {
		name: 'Uppercase',
	},
	isSmall: {
		name: 'Small',
		control: {
			type: 'boolean',
		},
	},
	isDisabled: {
		name: 'Disabled',
	},
};

// Publish required stories.
export { Tag };
