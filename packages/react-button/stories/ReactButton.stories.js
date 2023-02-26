import React from "react";

// Import required component(s).
import { Button as SuiButton } from "../lib/react-button";

// Import documentation main page.
import docs from './ReactButton.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Button',
	component: SuiButton,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs
		}
	}
}

// Build "Button" story.
const Button = ({ example, ...props }) => {
	const set = {};

	set.content = 'Cancel';

	if ( 'link' === example ) {
		set.content = 'Try Pro For Free';
	} else if ( 'button-load' === example ) {
		set.content = 'Save Settings';
	} else if ( 'button-icon' === example ) {
		set.content = <span slot="icon" name="save" label="Save Settings" />;
	}

	set.box = {
		margin: 0,
		padding: '30px',
		border: 0,
		borderRadius: '4px',
		background: '#fff'
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={ set.box }>
					{ 'label-icon' === example && (
						<SuiButton { ...props }>
							Next Step
							<span slot="icon" name="chevron-right" />
						</SuiButton>
					)}

					{ 'label-icon' !== example && (
						<SuiButton { ...props }>
							{ set.content }
						</SuiButton>
					)}
				</div>
			</div>
		</div>
	);
}

Button.args = {
	example: 'button',
	href: '',
	theme: 'primary',
	color: 'blue',
	size: '',
	loading: false
}

Button.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Link': 'link',
				'Example: Button': 'button',
				'Example: Loading': 'button-load',
				'Example: Label + Icon': 'label-icon',
				'Example: Icon Button': 'button-icon'
			}
		}
	},
	href: {
		name: 'Link',
		control: {
			type: 'text'
		},
		if: {
			arg: 'example',
			eq: 'link'
		}
	},
	theme: {
		name: 'Theme',
		control: {
			type: 'select',
			options: {
				'Primary': 'primary',
				'Secondary': 'secondary',
				'Tertiary': 'tertiary'
			}
		}
	},
	color: {
		name: 'Color',
		control: {
			type: 'select',
			options: {
				'Blue': 'blue',
				'Black': 'black',
				'Red': 'red',
				'Navy': 'navy',
				'White': 'white'
			}
		}
	},
	size: {
		name: 'Size',
		control: {
			type: 'inline-radio',
			options: {
				'Default': '',
				'Small': 'sm'
			}
		}
	},
	loading: {
		name: 'Loading',
		control: {
			type: 'boolean'
		},
		if: {
			arg: 'example',
			eq: 'button-load'
		}
	}
}

// Publish required stories.
export { Button }
