import React from "react"

// Import required component
import { SegmentedButton as Button } from "../src"
import { Box, BoxGroup } from "@wpmudev/react-box"

// Import documentation main page
import docs from "./ReactSegmentedButton.mdx"

// Configure default options
export default {
	title: "SUI/Components/Compound Elements/Segmented Button",
	// component: Button,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Field List" story
const SegmentedButton = ({ example, children, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<Button {...args}>{children}</Button>
					</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

// Set story arguments.
SegmentedButton.args = {
	icon: "desktop",
	children: "Toggle Button",
	isFirst: false,
	isLast: false,
	isLabelHidden: false,
	isSmall: false,
}

// Set controls for story arguments.
SegmentedButton.argTypes = {
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
export { SegmentedButton }
