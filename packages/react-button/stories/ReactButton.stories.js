import React, { useState, useEffect } from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Import required component.
import { Button as SuiButton } from '../lib/react-button';

// Import documentation main page.
import docs from './ReactButton.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Button',
	component: SuiButton,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Button" story.
const Button = ({
	example,
	label,
	theme,
	color,
	iconMode,
	iconString,
	icon,
	disabled
}) => {
	const [isLoading, setIsLoading] = useState(false);

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	const props = {};

	props.theme = theme;
	props.color = color;
	props.icon = iconString;

	if ( 'object' === iconMode ) {
		props.icon = icon;
	}

	const selectedProps = Object.assign({
		action: 'onClick',
		example: (!isUndefined(example) && !isEmpty(example))
			? 'button' === example
				? 'Basic Button'
				: 'link' === example
					? 'Link'
					: 'button-alt' === example
						? 'Loading Button'
						: 'Basic Button'
			: 'Basic Button',
		theme: props.theme,
		color: props.color,
		icon: props.icon
	});

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{ 'button' === example && (
						<SuiButton
							{ ... ( 'none' !== iconMode && { icon: props.icon } ) }
							theme={props.theme}
							color={props.color}
							{ ... ( disabled && { disabled: true } ) }
							onClick={() => console.log(selectedProps)}>
							{label}
						</SuiButton>
					)}

					{ 'button-alt' === example && (
						<SuiButton
							{ ... ( 'none' !== iconMode && { icon: props.icon } ) }
							theme={props.theme}
							color={props.color}
							loading={isLoading}
							{ ... ( disabled && { disabled: true } ) }
							onClick={() => {
								setIsLoading(true);
								console.log(selectedProps);

								setTimeout( () => {
									setIsLoading(false);
								}, 1500 );
							}}>
							{label}
						</SuiButton>
					)}

					{ 'link' === example && (
						<SuiButton
							href="#"
							target="_blank"
							{ ... ( 'none' !== iconMode && { icon: props.icon } ) }
							theme={props.theme}
							color={props.color}
							{ ... ( disabled && { disabled: true } ) }>
							{label}
						</SuiButton>
					)}
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Button.args = {
	example: 'button',
	label: 'Button',
	iconMode: 'none',
	iconString: 'add',
	icon: {
		name: 'add',
		size: 'md',
		position: 'lead'
	},
	theme: 'primary',
	color: 'blue',
	disabled: false
};

// Set controls for story arguments.
Button.argTypes = {
	example: {
		name: 'Example',
		control : {
			type: 'select',
			options: {
				'Example: Link': 'link',
				'Example: Basic Button': 'button',
				'Example: Loading Button': 'button-alt'
			}
		}
	},
	label: {
		name: 'Label',
		table: {
			category: 'Elements'
		}
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
			category: 'Elements'
		}
	},
	iconString: {
		name: 'Icon String',
		control: 'text',
		table: {
			category: 'Elements'
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
			category: 'Elements'
		},
		if: {
			arg: 'iconMode',
			eq: 'object'
		}
	},
	theme: {
		name: 'Theme',
		control: {
			type: 'select',
			options: {
				'Theme: Primary': 'primary',
				'Theme: Secondary': 'secondary',
				'Theme: Tertiary': 'tertiary'
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
				'Color: Blue': 'blue',
				'Color: Black': 'black',
				'Color: Red': 'red',
				'Color: Hub': 'hub',
				'Color: White': 'white'
			}
		},
		table: {
			category: 'Modifiers'
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
export { Button };
