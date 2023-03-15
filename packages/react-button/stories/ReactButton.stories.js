import React, { Fragment, useState } from "react";

// Import required component(s).
import { Button as SuiButton, IconButton as SuiIconButton } from "../lib/react-button";

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
	set.function = () => {
		let message = 'You clicked on a button.';

		if ( 'link' === example ) {
			message = 'You clicked on a link.';
		} else if ( 'button-load' === example ) {
			message = 'Changes were saved successfully.';
		}

		console.log( message );
	}

	if ( 'link' === example ) {
		set.content = 'Try Pro For Free';
	} else if ( 'button-load' === example ) {
		set.content = 'Save Settings';
	} else if ( 'button-toggle' === example ) {
		set.content = 'Dark Mode';
	}

	set.box = {
		margin: 0,
		padding: '30px',
		border: 'white' === props.color ? '1px solid #E6E6E6' : 0,
		borderRadius: '4px',
		background: 'white' === props.color ? '#333' : '#fff'
	}

	const [ isChecked, setIsChecked ] = useState(false);

	const checkedFunc = () => {
		setIsChecked(!isChecked);
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={ set.box }>
					{ 'label-icon' === example && (
						<Fragment>
							<SuiButton
								iconLead="chevron-left"
								disabled={ true }
								{ ...props }>
								Prev
							</SuiButton>
							<SuiButton
								iconTrail="chevron-right"
								onClick={ () => console.log( 'Go to next step.' ) }
								{ ...props }>
								Next
							</SuiButton>
						</Fragment>
					)}

					{ 'label-icon' !== example && (
						<Fragment>
							{ 'button-icon' === example && (
								<Fragment>
									<SuiIconButton icon="save" label="Save Settings" onClick={ set.function } { ...props } />
									<SuiIconButton icon="save" label="Save Settings" loading={ true } { ...props } />
								</Fragment>
							)}
							{ 'button-icon' !== example && (
								<SuiButton
									{ ... ( 'button-load' === example && { variant: 'loading' })}
									{ ... ( 'button-toggle' === example && { variant: 'toggle' })}
									onClick={ checkedFunc }
									{ ... ( isChecked && { isSelected: true })}
									{ ...props }>
									{ set.content }
								</SuiButton>
							)}
						</Fragment>
					)}
				</div>
			</div>
		</div>
	);
}

Button.args = {
	example: 'button',
	href: '',
	target: '_blank',
	htmlFor: '',
	appearance: 'primary',
	color: 'blue',
	className: 'sui-toggle',
	isSmall: false,
	isLoading: true,
	isDisabled: false
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
				'Example: Toggle': 'button-toggle',
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
	target: {
		name: 'Target',
		control: {
			type: 'select',
			options: [
				'_self',
				'_blank'
			]
		},
		if: {
			arg: 'example',
			eq: 'link'
		}
	},
	htmlFor: {
		name: 'For (input ID)',
		control: {
			type: 'text'
		},
		if: {
			arg: 'example',
			eq: 'button-toggle'
		}
	},
	appearance: {
		name: 'Appearance',
		control: {
			type: 'select',
			options: {
				'-': '',
				'Primary': 'primary',
				'Secondary': 'secondary',
				'Tertiary': 'tertiary'
			}
		},
		if: {
			arg: 'example',
			neq: 'button-toggle'
		}
	},
	color: {
		name: 'Color',
		control: {
			type: 'select',
			options: {
				'-': '',
				'Blue': 'blue',
				'Black': 'black',
				'Red': 'red',
				'Navy': 'navy',
				'White': 'white'
			}
		},
		if: {
			arg: 'example',
			neq: 'button-toggle'
		}
	},
	className: {
		name: 'Class Name',
		control: {
			type: 'text'
		},
		if: {
			arg: 'example',
			eq: 'button-toggle'
		}
	},
	isSmall: {
		name: 'Small',
		control: {
			type: 'boolean'
		}
	},
	isLoading: {
		name: 'Loading',
		control: {
			type: 'boolean'
		},
		if: {
			arg: 'example',
			eq: 'button-load'
		}
	},
	isDisabled: {
		name: 'Disabled',
		control: {
			type: 'boolean'
		}
	}
}

// Publish required stories.
export { Button }
