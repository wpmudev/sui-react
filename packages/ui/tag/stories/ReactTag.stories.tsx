import React, { useState } from "react"

// Import required component.
import { Tag as SuiTag, TagProps } from "../src"

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
const Tag = ({ children, ...props }: TagProps & { color?: string }) => {
	const [isVisisble, setIsVisible] = useState(true)

	const boxStyle = {
		margin: 0,
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		background: props?.colorScheme === "white" ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					{isVisisble && (
						<SuiTag
							{...props}
							onDismiss={() => {
								setIsVisible(!isVisisble)
							}}
						>
							{children}
						</SuiTag>
					)}
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Tag.args = {
	children: "Hello, I am a tag.",
	design: "",
	colorScheme: "",
	contentWrap: "default",
	isUppercase: false,
	isSmall: false,
	isDisabled: false,
	isDismissable: false,
	onDismiss: () => {},
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
	colorScheme: {
		name: "Color Scheme",
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
	contentWrap: {
		name: "Content Wrap",
		options: ["default", "multiline", "truncated"],
		control: {
			type: "select",
			labels: {
				default: "Style: Default",
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
	isDismissable: {
		name: "Dismissable",
		control: {
			type: "boolean",
		},
		if: {
			arg: "contentWrap",
			eq: "default",
		},
	},
	onDismiss: {
		name: "On Dismiss",
		control: Function,
		if: {
			arg: "isDismissable",
			eq: true,
		},
	},
}

// Publish required stories.
export { Tag }
