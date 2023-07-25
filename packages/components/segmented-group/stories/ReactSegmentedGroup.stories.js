import React from "react"

// Import required component
import { SegmentedGroup as Group } from "../src"
import { Button } from "@wpmudev/sui-button"
import { Box, BoxGroup } from "@wpmudev/sui-box"

// Import documentation main page
import docs from "./ReactSegmentedGroup.mdx"

// Build "Field List" story
const SegmentedGroup = ({ isLabelHidden, isSmall, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Box>
					<BoxGroup isInline={false}>
						<Group>
							<Button icon="desktop" isFirst={true}>
								Desktop
							</Button>
							<Button icon="mobile" isLast={true}>
								Mobile
							</Button>
						</Group>
					</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

// Set story arguments.
SegmentedGroup.args = {
	isLabelHidden: false,
	isSmall: false,
}

// Set controls for story arguments.
SegmentedGroup.argTypes = {
	isLabelHidden: {
		name: "Hide Label",
	},
	isSmall: {
		name: "Small Button",
	},
}

// Configure default options
export default {
	title: "SUI/Components/Advanced/Segmented Group",
	component: Group,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { SegmentedGroup }
