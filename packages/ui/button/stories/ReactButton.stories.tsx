import React, { Fragment } from "react"

// Import required component(s).
import { Button as StandardButton } from "../src"
import { ButtonProps } from "../src/button.types"

// Import documentation main page.
import docs from "./ReactButton.mdx"
import { IconsName } from "@wpmudev/sui-icons"

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
const Button = ({
	example,
	...attributes
}: {
	example: string
	attributes: ButtonProps
}) => {
	let content = "Cancel"

	// @ts-ignore
	const { colorScheme } = attributes

	if ("link" === example) {
		content = "Try Pro For Free"
	} else if ("button-load" === example) {
		content = "Save Settings"
	}

	const boxStyle = {
		margin: 0,
		padding: "30px",
		border: "white" === colorScheme ? "1px solid #E6E6E6" : 0,
		borderRadius: "4px",
		background: "white" === colorScheme ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					{(() => {
						switch (example) {
							case "label-icon":
								return (
									<Fragment>
										<StandardButton icon="ChevronLeft" {...attributes}>
											Prev
										</StandardButton>
										<StandardButton endIcon="ChevronRight" {...attributes}>
											Next
										</StandardButton>
									</Fragment>
								)
							case "icon":
								return (
									<StandardButton iconOnly={true} {...attributes}>
										Add
									</StandardButton>
								)
							default:
								return (
									<Fragment>
										{"button-icon" !== example && (
											<Fragment>
												{"button-load" === example && (
													// @ts-ignore
													<StandardButton {...attributes} isLoading={true}>
														{content}
													</StandardButton>
												)}
												{"button-load" !== example && (
													<StandardButton {...attributes}>
														{content}
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
	type: "primary",
	colorScheme: "blue",
	isSmall: false,
	isLoading: true,
	isDisabled: false,
	isResponsive: false,
	isFullWidth: false,
	icon: "Add",
	iconSize: "sm",
	htmlProps: {},
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
	type: {
		name: "Type",
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
	},
	icon: {
		name: "Icon",
		options: IconsName,
		control: {
			type: "select",
		},
		if: {
			arg: "example",
			eq: "icon",
		},
	},
	iconSize: {
		name: "Icon Size",
		options: ["sm", "md", "lg"],
		control: {
			type: "select",
			labels: {
				sm: "Small",
				md: "Medium",
				lg: "Large",
			},
		},
		if: {
			arg: "example",
			eq: "icon",
		},
	},
	colorScheme: {
		name: "Color Scheme",
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
	},
	isSmall: {
		name: "Small",
		control: {
			type: "boolean",
		},
	},
	isFullWidth: {
		name: "Full Width",
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
	htmlProps: {
		name: "HTML Props",
		control: {
			type: "object",
		},
	},
}

// Publish required stories.
export { Button }
