import React from "react"

// Import required component
import { ProgressBar as SuiProgressBar } from "../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"

// Import documentation main page
import docs from "./ReactProgressBar.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Progress Bar",
	// component: SuiProgressBar,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Field List" story
const ProgressBar = ({ example, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<SuiProgressBar {...args} />
					</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

// Set story arguments
ProgressBar.args = {
	label: "Loading Data...",
	value: 50,
	size: "sm",
	allowCancel: true,
	isIndeterminate: true,
	hasValue: false,
	isInline: false,
}

// Set controls for story arguments
ProgressBar.argTypes = {
	label: {
		name: "Label",
	},
	value: {
		name: "Value",
		control: {
			type: "number",
			min: 0,
			max: 100,
		},
	},
	size: {
		name: "Size",
		options: ["sm", "lg"],
		control: {
			type: "select",
			labels: {
				sm: "Small (sm)",
				lg: "Large (lg)",
			},
		},
	},
	allowCancel: {
		name: "Allow Cancel",
	},
	isIndeterminate: {
		name: "Indeterminate",
	},
}

// Publish required stories
export { ProgressBar }
