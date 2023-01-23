import React from "react";

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
	theme,
	color,
	size,
	uppercase,
	truncated,
	multiline,
	disabled
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
					{ 'button' === example && (
						<SuiTag
							size={size}
							htmlTag="button"
							theme={theme}
							color={color}
							uppercase={uppercase}
							truncated={truncated}
							multiline={multiline}
							onClick={() => console.log("Button Click.")}
							{ ... ( disabled && { disabled: true } ) }
						>
							{label}
						</SuiTag>
					)}

					{ 'link' === example && (
						<SuiTag
							size={size}
							htmlTag="a"
							href="#"
							target="_blank"
							theme={theme}
							color={color}
							uppercase={uppercase}
							truncated={truncated}
							multiline={multiline}
							{ ... ( disabled && { disabled: true } ) }
						>
							{label}
						</SuiTag>
					)}

					{ 'span' === example && (
						<SuiTag
							size={size}
							theme={theme}
							color={color}
							uppercase={uppercase}
							truncated={truncated}
							multiline={multiline}
							{ ... ( disabled && { disabled: true } ) }
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
	label: 'Default',
	theme: 'primary',
	color: 'blue',
	uppercase: false,
	truncated: false,
	multiline: true,
	disabled: false,
};

// Set controls for story arguments.
Tag.argTypes = {
	example: {
		name: 'Example',
		control : {
			type: 'select',
			options: {
				'Example: Default': 'span',
				'Example: Link': 'link',
				'Example: Basic Button': 'button'
			}
		}
	},
	label: {
		name: 'Label',
		table: {
			category: 'Elements'
		}
	},
	theme: {
		name: 'Theme',
		control: {
			type: 'select',
			options: {
				'Theme: Primary': 'primary',
				'Theme: Secondary': 'secondary'
			}
		},
		table: {
			category: 'Modifiers'
		}
	},
	size: {
		name: 'Size',
		control: {
			type: 'select',
			options: {
				'Size: Default': '',
				'Size: Mini': 'xs',
				'Size: Small': 'sm'
			}
		},
		table: {
			category: 'Modifiers'
		}
	},
	color: {
		name: 'Color',
		control: {
			type: 'select',
			options: {
				'Color: Default': 'default',
				'Color: Red': 'red',
				'Color: Yellow': 'yellow',
				'Color: Green': 'green',
				'Color: Blue': 'blue',
				'Color: Purple': 'purple',
			}
		},
		table: {
			category: 'Modifiers'
		}
	},
	uppercase: {
		name: 'Uppercase',
		table: {
			category: 'States'
		}
	},
	truncated: {
		name: 'Truncated',
		table: {
			category: 'States'
		}
	},
	multiline: {
		name: 'Multiline',
		table: {
			category: 'States'
		}
	},
	disabled: {
		name: 'Disabled',
		table: {
			category: 'States'
		}
	}
};

// Publish required stories.
export { Tag };
