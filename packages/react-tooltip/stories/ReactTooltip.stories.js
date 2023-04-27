import React from 'react';

// Import required component.
import { Tooltip as SuiTooltip } from '../lib/react-tooltip';

// Import documentation main page.
import docs from './ReactTooltip.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Tooltip',
	component: Tooltip,
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
	href,
	target,
	appearance,
	position,
	customWidth,
	customMobileWidth,
	color,
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	const set = {};

	set.content = 'Tooltip text';

	const props = {};

	props.appearance = appearance;

	if ('link' === example) {
		set.content = 'Tooltip link';
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{'button' === example && (
						<SuiTooltip
							label={label}
							appearance="primary"
							color="black"
							position={position}
							customWidth={customWidth}
							customMobileWidth={customMobileWidth}
							onClick={() => console.log('Button Clicked.')}
						>
							{set.content}
						</SuiTooltip>
					)}

					{'text' === example && (
						<SuiTooltip
							type="text"
							label={label}
							position={position}
							customWidth={customWidth}
							customMobileWidth={customMobileWidth}
						>
							{set.content}
						</SuiTooltip>
					)}

					{'link' === example && (
						<SuiTooltip
							href={href}
							target={target}
							label={label}
							appearance="primary"
							color="black"
							position={position}
							customWidth={customWidth}
							customMobileWidth={customMobileWidth}
						>
							{set.content}
						</SuiTooltip>
					)}
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Tooltip.args = {
	example: 'button',
	href: '',
	target: '_blank',
	label: 'Button',
	position: 'top',
	customWidth: '',
	customMobileWidth: '',
};

// Set controls for story arguments.
Tooltip.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Link': 'link',
				'Example: Button': 'button',
				'Example: Text': 'text',
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
	position: {
		name: 'Position',
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
				'Left Top': 'left-top',
				'Left Bottom': 'left-bottom',
				Right: 'right',
				'Right Top': 'right-top',
				'Right Bottom': 'right-bottom',
			},
		},
	},
	customWidth: {
		name: 'Custom Width',
		control: {
			type: 'number',
		},
	},
	customMobileWidth: {
		name: 'Custom Width (Mobile)',
		control: {
			type: 'number',
		},
	},
};

// Publish required stories.
export { Tooltip };
