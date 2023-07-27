import React from "react"

// Import required component
import { SegmentedControl as SControl } from "../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"

// Import documentation main page
import docs from "./SegmentedControl.mdx"

// Configure default options
export default {
	title: "SUI/Components/Core/Segmented Control",
	// component: Button,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Field List" story
const SegmentedControl = ({ example, children, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<SControl {...args}>{children}</SControl>
					</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

// Set story arguments.
SegmentedControl.args = {
	icon: "desktop",
	children: "Toggle Button",
	isFirst: false,
	isLast: false,
	isLabelHidden: false,
	isSmall: false,
}

// Set controls for story arguments.
SegmentedControl.argTypes = {
	icon: {
		name: "Icon",
	},
	children: {
		name: "Label",
	},
	isFirst: {
		name: "First Button",
		if: {
			arg: "isLast",
			eq: false,
		},
	},
	isLast: {
		name: "Last Button",
		if: {
			arg: "isFirst",
			eq: false,
		},
	},
	isLabelHidden: {
		name: "Hide Label",
	},
	isSmall: {
		name: "Small Button",
	},
}

// Publish required stories.
export { SegmentedControl }
