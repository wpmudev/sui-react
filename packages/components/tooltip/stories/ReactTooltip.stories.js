import React from "react"

// Import required component.
import { Tooltip as SuiTooltip } from "../src"

// Import documentation main page.
import docs from "./ReactTooltip.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Core/Tooltip",
	component: SuiTooltip,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Tooltip" story.
const Tooltip = ({
	example,
	label,
	href,
	tootlipText,
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
		background: color !== "white" ? "#fff" : "#333",
	}

	const set = {}

	set.content = tootlipText

	const props = {}

	props.appearance = appearance

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{"button" === example && (
						<SuiTooltip
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

					{"text" === example && (
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

					{"link" === example && (
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
					{"icon" === example && (
						<SuiTooltip
							label={label}
							type="icon"
							icon="info"
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
	)
}

// Set story arguments.
Tooltip.args = {
	example: "button",
	tootlipText: "Tooltip text",
	href: "",
	target: "_blank",
	label: "Button",
	position: "top",
	customWidth: "",
	customMobileWidth: "",
}

// Set controls for story arguments.
Tooltip.argTypes = {
	example: {
		name: "Example",
		options: ["link", "button", "text", "icon"],
		control: {
			type: "select",
			labels: {
				link: "Example: Link",
				button: "Example: Button",
				text: "Example: Text",
				icon: "Example: Icon",
			},
		},
	},
	tootlipText: {
		name: "Tooltip Text",
	},
	label: {
		name: "Label",
		control: {
			type: "text",
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
	position: {
		name: "Position",
		options: [
			"top",
			"top-left",
			"top-right",
			"bottom",
			"bottom-left",
			"bottom-right",
			"left",
			"left-top",
			"left-bottom",
			"right",
			"right-top",
			"right-bottom",
		],
		control: {
			type: "select",
			labels: {
				top: "Top",
				"top-left": "Top Left",
				"top-right": "Top Right",
				bottom: "Bottom",
				"bottom-left": "Bottom Left",
				"bottom-right": "Bottom Right",
				left: "Left",
				"left-top": "Left Top",
				"left-bottom": "Left Bottom",
				right: "Right",
				"right-top": "Right Top",
				"right-bottom": "Right Bottom",
			},
		},
	},
	customWidth: {
		name: "Custom Width",
		control: {
			type: "number",
		},
	},
	customMobileWidth: {
		name: "Custom Width (Mobile)",
		control: {
			type: "number",
		},
	},
}

// Publish required stories.
export { Tooltip }
