import React from "react"

// Import required component.
import { Tag as SuiTag } from "../src"

// Import documentation main page.
import docs from "./ReactTag.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Core/Tag",
	component: SuiTag,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Tag" story.
const Tag = ({ children, ...props }) => {
	const set = {}

	set.box = {
		margin: 0,
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		background: props.color === "white" ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<SuiTag {...props}>{children}</SuiTag>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Tag.args = {
	children: "Hello, I am a tag",
	design: "",
	color: "",
	style: "",
	isUppercase: false,
	isSmall: false,
	isDisabled: false,
}

// Set controls for story arguments.
Tag.argTypes = {
	children: {
		name: "Content",
	},
	design: {
		name: "Design",
		options: ["", "outlined"],
		control: {
			type: "select",
			labels: {
				"": "Design: Solid",
				outlined: "Design: Outlined",
			},
		},
	},
	color: {
		name: "Color",
		options: ["", "blue", "navy", "yellow", "red", "green", "black", "white"],
		control: {
			type: "select",
			labels: {
				"": "Color: Default",
				blue: "Color: Blue (Information)",
				navy: "Color: Navy Blue",
				yellow: "Color: Yellow (Warning)",
				red: "Color: Red (Error)",
				green: "Color: Green (Success)",
				black: "Color: Black",
				white: "Color: White",
			},
		},
	},
	style: {
		name: "Style",
		options: ["", "multiline", "truncated"],
		control: {
			type: "select",
			labels: {
				"": "Style: Default",
				multiline: "Style: Multiline",
				truncated: "Style: Truncated",
			},
		},
	},
	isUppercase: {
		name: "Uppercase",
		control: {
			type: "boolean",
		},
	},
	isSmall: {
		name: "Small",
		control: {
			type: "boolean",
		},
	},
	isDisabled: {
		name: "Disabled",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories.
export { Tag }
