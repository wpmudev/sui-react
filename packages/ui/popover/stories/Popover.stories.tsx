import React from "react"

// Import required component.
import { Popover as SuiPopover, PopoverBaseProps } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page.
import docs from "./Popover.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Core/Popover",
	component: SuiPopover,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Popover" story.
const Popover = ({
	tootlipText,
	color,
}: { example: string; tootlipText: string } & PopoverBaseProps) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiPopover
						trigger={<Button>Test</Button>}
						header={<h4>This is popover title</h4>}
						footer={<Button isSmall={true}>Next</Button>}
						image="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/3061f01a175c457af10a05953daf0d47?_a=AQAEufR"
					>
						{tootlipText}
					</SuiPopover>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Popover.args = {
	tootlipText:
		"This is popover body content. Add links if it is required. If there needs more elements than only texts detach the component and design it following the guideline.",
	href: "",
	target: "_blank",
	label: "Button",
	position: "top",
	customWidth: "",
	customMobileWidth: "",
}

// Set controls for story arguments.
Popover.argTypes = {
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
		name: "Popover Text",
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
export { Popover }
