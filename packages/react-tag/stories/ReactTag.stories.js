import React from 'react';

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
const Tag = ({
	example,
	label,
	href,
	target,
	color,
	size,
	uppercase,
	style,
	disabled,
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
							size={size}
							type="button"
							color={color}
							uppercase={uppercase}
							style={style}
							onClick={() => console.log('Button Click.')}
							{...(disabled && { disabled: true })}
						>
							{label}
						</SuiTag>
					)}

					{'link' === example && (
						<SuiTag
							size={size}
							type="link"
							href={href}
							target={target}
							color={color}
							uppercase={uppercase}
							style={style}
							{...(disabled && { disabled: true })}
						>
							{label}
						</SuiTag>
					)}

					{'span' === example && (
						<SuiTag
							size={size}
							color={color}
							uppercase={uppercase}
							style={style}
							{...(disabled && { disabled: true })}
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
	size: '',
	style: 'default',
	uppercase: false,
	disabled: false,
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
		table: {
			category: 'Elements',
		},
	},
	href: {
		name: 'Link',
		table: {
			category: 'Elements',
		},
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
		table: {
			category: 'Elements',
		},
		control: {
			type: 'select',
			options: ['_self', '_blank'],
		},
		if: {
			arg: 'example',
			eq: 'link',
		},
	},
	size: {
		name: 'Size',
		control: {
			type: 'select',
			options: {
				'Size: Default': '',
				'Size: Small': 'sm',
			},
		},
		table: {
			category: 'Modifiers',
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
		table: {
			category: 'Modifiers',
		},
	},
	style: {
		name: 'Style',
		control: {
			type: 'select',
			options: {
				'Style: Default': 'default',
				'Style: Truncated': 'truncated',
				'Style: Multiline': 'multiline',
			},
		},
		table: {
			category: 'Modifiers',
		},
	},
	uppercase: {
		name: 'Uppercase',
		table: {
			category: 'Modifiers',
		},
	},
	disabled: {
		name: 'Disabled',
		table: {
			category: 'States',
		},
	},
};

// Publish required stories.
export { Tag };
