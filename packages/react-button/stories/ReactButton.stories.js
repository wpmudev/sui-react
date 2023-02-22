import React, { Fragment, useState } from "react";

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
	const [nightMode, setNightMode] = useState(props.active);
	const [darkMode, setDarkMode] = useState(props.active);

	const changeNightMode = () => {
		setNightMode(!nightMode);

		if ( !nightMode ) {
			console.log( 'Night mode is enabled' );
		} else {
			console.log( 'Night mode is disabled' );
		}
	}

	const changeDarkMode = () => {
		setNightMode(!darkMode);

		if ( !darkMode ) {
			console.log( 'Dark mode is enabled' );
		} else {
			console.log( 'Dark mode is disabled' );
		}
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					{ 'link' === example && (
						<SuiButton href="" { ...props }>
							Click Here
						</SuiButton>
					)}

					{ 'button' === example && (
						<SuiButton { ...props }>
							Click Here
						</SuiButton>
					)}

					{ 'button-load' === example && (
						<SuiButton { ...props }>
							Click Here
						</SuiButton>
					)}

					{ 'toggle' === example && (
						<Fragment>
							<SuiButton
								variant="toggle"
								onClick={ changeNightMode }
								{ ...props }>
								Night Mode
							</SuiButton>

							<SuiButton
								variant="toggle"
								htmlFor="button-enable"
								onClick={ changeDarkMode }
								{ ...props }>
								Dark Mode
							</SuiButton>
						</Fragment>
					)}
				</div>
			</div>
		</div>
	);
}

// Set "Button" story arguments.
Button.args = {
	example: 'button',
	href: '',
	theme: 'primary',
	color: 'blue',
	segment: '',
	size: '',
	active: false,
	loading: false
}

// Set controls for "Button" story arguments.
Button.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Link': 'link',
				'Example: Basic Button': 'button',
				'Example: Loading Button': 'button-load',
				'Example: Toggle Button': 'toggle'
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
		},
		if: {
			arg: 'example',
			neq: 'toggle'
		}
	},
	segment: {
		name: 'Segment',
		control: {
			type: 'inline-radio',
			options: {
				'Left': 'left',
				'Middle': '',
				'Right': 'right'
			}
		},
		if: {
			arg: 'example',
			eq: 'toggle'
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
	active: {
		name: 'Active',
		control: {
			type: 'boolean'
		},
		if: {
			arg: 'example',
			eq: 'toggle'
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
