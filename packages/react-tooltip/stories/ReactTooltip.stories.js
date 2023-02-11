import React from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Import required component.
import { Tooltip as SuiTooltip } from '../lib/react-tooltip';

// Import documentation main page.
import docs from './ReactTooltip.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Tooltip',
	component: SuiTooltip,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Tooltip" story.
const Tooltip = ({
	example,
	label,
	theme,
	tooltipText,
	position,
	customWidth,
	customMobileWidth,
	iconMode,
	iconString,
	icon,
	color
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	const props = {};

	props.theme = theme;
	props.icon = iconString;

	if ( 'object' === iconMode ) {
		props.icon = icon;
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTooltip
						{ ... ( 'none' !== iconMode && { icon: props.icon } ) }
						label={label}
						tooltipText={tooltipText}
						position={position}
						customWidth={customWidth}
						customMobileWidth={customMobileWidth}
						href="text"
						onClick={() => console.log('button clicked.')}
					>
						{label}
					</SuiTooltip>
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Tooltip.args = {
	example: 'button',
	label: 'Button',
	tooltipText: 'Tooltip label',
	iconMode: 'none',
	iconString: 'add',
	icon: {
		name: 'add',
		size: 'md',
		position: 'lead'
	},
	position: 'top',
	customWidth: '',
	customMobileWidth: ''
};

// Set controls for story arguments.
Tooltip.argTypes = {
	example: {
		name: 'Example',
		control : {
			type: 'select',
			options: {
				'Example: Static': 'span',
				'Example: Link': 'link',
				'Example: Button': 'button',
				'Example: Icon': 'icon'
			}
		}
	},
	label: {
		name: 'Button Label',
		table: {
			category: 'Elements'
		}
	},
	tooltipText: {
		name: 'Tooltip Text',
		table: {
			category: 'Elements'
		}
	},
	position: {
		name: 'Position',
		table: {
			category: 'Modifiers'
		},
		control: {
			type: 'select',
			options: {
				Top: 'top',
				'Top Left': 'top-left',
				'Top Right': 'top-right',
				Bottom: 'bottom',
				'Bottom Left': 'bottom-left',
				'Bottom Right': 'bottom-right',
				Left: 'left',
				Right: 'right',
			},
		},
	},
	iconMode: {
		name: 'Icon Mode',
		control: {
			type: 'inline-radio',
			options: {
				None: 'none',
				String: 'string',
				Object: 'object'
			}
		},
		table: {
			category: 'Modifiers'
		},
	},
	iconString: {
		name: 'Icon String',
		control: 'text',
		table: {
			category: 'Modifiers'
		},
		if: {
			arg: 'iconMode',
			eq: 'string'
		}
	},
	icon: {
		name: 'Icon Object',
		control: 'object',
		table: {
			category: 'Modifiers'
		},
		if: {
			arg: 'iconMode',
			eq: 'object'
		}
	},
	customWidth: {
		name: 'Custom Width',
		table: {
			category: 'Modifiers'
		},
		control: {
			type: 'number',
		},
	},
	customMobileWidth: {
		name: 'Custom Width (Mobile)',
		table: {
			category: 'Modifiers'
		},
		control: {
			type: 'number',
		},
	}
};

// Publish required stories.
export { Tooltip };
