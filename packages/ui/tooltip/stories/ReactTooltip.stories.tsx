import React from "react"

// Import required component.
import { Tooltip as SuiTooltip, TooltipBaseProps } from "../src"

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
	type,
	label,
	tootlipText,
	placement,
	customWidth,
	customMobileWidth,
	color,
}: { tootlipText: string } & TooltipBaseProps) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTooltip
						type={type}
						label={label}
						placement={placement}
						customWidth={customWidth}
						customMobileWidth={customMobileWidth}
						{...("button" === type
							? { buttonProps: { type: "primary", colorScheme: "black" } }
							: {})}
					>
						{tootlipText}
					</SuiTooltip>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Tooltip.args = {
	type: "button",
	tootlipText: "Tooltip text",
	label: "Button",
	placement: "top",
	customWidth: "",
	customMobileWidth: "",
}

// Set controls for story arguments.
Tooltip.argTypes = {
	type: {
		name: "Type",
		options: ["button", "text", "icon"],
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
	placement: {
		name: "Placement",
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
