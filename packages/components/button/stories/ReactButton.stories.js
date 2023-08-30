import React, { Fragment } from "react"

// Import required component(s).
import { Button as StandardButton, LoadingButton } from "../src"

// Import documentation main page.
import docs from "./ReactButton.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Core/Button",
	component: StandardButton,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Button" story.
const Button = ({ example, ...props }) => {
	const set = {}

	set.content = "Cancel"
	set.function = () => {
		let message = "You clicked on a button."

		if ("link" === example) {
			message = "You clicked on a link."
		} else if ("button-load" === example) {
			message = "Changes were saved successfully."
		}

		console.log(message)
	}

	if ("link" === example) {
		set.content = "Try Pro For Free"
	} else if ("button-load" === example) {
		set.content = "Save Settings"
	}

	set.box = {
		margin: 0,
		padding: "30px",
		border: "white" === props.color ? "1px solid #E6E6E6" : 0,
		borderRadius: "4px",
		background: "white" === props.color ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					{(() => {
						switch (example) {
							case "label-icon":
								return (
									<Fragment>
										<StandardButton
											icon="chevron-left"
											onClick={() => console.log("Go to prev step.")}
											{...props}
										>
											Prev
										</StandardButton>
										<StandardButton
											icon="chevron-right"
											iconPosition="end"
											onClick={() => console.log("Go to next step.")}
											{...props}
										>
											Next
										</StandardButton>
									</Fragment>
								)
							case "icon":
								return (
									<StandardButton
										icon="add"
										iconOnly={true}
										onClick={() => console.log("Go to prev step.")}
										{...props}
									>
										Add
									</StandardButton>
								)
							default:
								return (
									<Fragment>
										{"button-icon" !== example && (
											<Fragment>
												{"button-load" === example && (
													<LoadingButton {...props}>
														{set.content}
													</LoadingButton>
												)}
												{"button-load" !== example && (
													<StandardButton {...props}>
														{set.content}
													</StandardButton>
												)}
											</Fragment>
										)}
									</Fragment>
								)
						}
					})()}
				</div>
			</div>
		</div>
	)
}

Button.args = {
	example: "button",
	href: "",
	target: "_blank",
	htmlFor: "",
	appearance: "primary",
	color: "blue",
	isSmall: false,
	isLoading: true,
	isDisabled: false,
	isResponsive: false,
}

Button.argTypes = {
	example: {
		name: "Example",
		options: ["link", "button", "button-load", "label-icon", "icon"],
		control: {
			type: "select",
			labels: {
				link: "Example: Link",
				button: "Example: Button",
				"button-load": "Example: Loading",
				"label-icon": "Example: Label + Icon",
				icon: "Example: Icon only",
			},
		},
	},
	href: {
		name: "Link",
		control: {
			type: "text",
		},
		if: {
			arg: "example",
			eq: "link",
		},
	},
	target: {
		name: "Target",
		options: ["_self", "_blank"],
		control: {
			type: "select",
		},
		if: {
			arg: "example",
			eq: "link",
		},
	},
	htmlFor: {
		name: "For (input ID)",
		control: {
			type: "text",
		},
		if: {
			arg: "example",
			eq: "button-toggle",
		},
	},
	appearance: {
		name: "Appearance",
		options: ["", "primary", "secondary", "tertiary"],
		control: {
			type: "select",
			labels: {
				"": "-",
				primary: "Primary",
				secondary: "Secondary",
				tertiary: "Tertiary",
			},
		},
		if: {
			arg: "example",
			neq: "button-toggle",
		},
	},
	color: {
		name: "Color",
		options: ["", "blue", "black", "red", "navy", "white"],
		control: {
			type: "select",
			labels: {
				"": "-",
				blue: "Blue",
				black: "Black",
				red: "Red",
				navy: "Navy",
				white: "White",
			},
		},
		if: {
			arg: "example",
			neq: "button-toggle",
		},
	},
	isSmall: {
		name: "Small",
		control: {
			type: "boolean",
		},
	},
	isLoading: {
		name: "Loading",
		control: {
			type: "boolean",
		},
		if: {
			arg: "example",
			eq: "button-load",
		},
	},
	isDisabled: {
		name: "Disabled",
		control: {
			type: "boolean",
		},
	},
	isResponsive: {
		name: "Hide label (Mobile)",
		control: {
			type: "boolean",
		},
		if: {
			arg: "example",
			eq: "label-icon",
		},
	},
}

// Publish required stories.
export { Button }
