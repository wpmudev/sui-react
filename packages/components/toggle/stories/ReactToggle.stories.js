import React from "react"

// Import required component
import { Toggle as SuiToggle } from "../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"

// Import documentation main page
import docs from "./ReactToggle.mdx"

// Configure default options
export default {
	title: "SUI/Components/Core/Toggle",
	component: SuiToggle,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Toggle" story
const Toggle = ({ example, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<SuiToggle {...args} />
					</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

// Set story arguments.
Toggle.args = {
	label: "Toggle Label",
	description:
		"Toggle description goes here. Lorem Ipsum is simply dummy text of the printing and typesetting industry it has been the industry's Standard.",
	isLabelHidden: false,
	isDisabled: false,
}

// Set controls for story arguments.
Toggle.argTypes = {
	label: {
		name: "Label",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
		control: {
			type: "text",
		},
	},
	isLabelHidden: {
		name: "Label hidden",
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
export { Toggle }
