import React from "react"

// Import required component
import { SegmentedControl as SControl, SegmentedControlButton } from "../src"
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
						<SControl onChange={(newValue) => alert(newValue)} {...args}>
							<SegmentedControlButton value="icon-only" icon="Filter" />
							<SegmentedControlButton value="1">UPI</SegmentedControlButton>
							<SegmentedControlButton value="2">Visa</SegmentedControlButton>
							<SegmentedControlButton value="3" icon="Bell">
								MasterCard
							</SegmentedControlButton>
							<SegmentedControlButton value="4" isDisabled={true}>
								PayPal
							</SegmentedControlButton>
						</SControl>
					</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

// Set story arguments.
SegmentedControl.args = {
	isFullWidth: false,
}

// Set controls for story arguments.
SegmentedControl.argTypes = {
	isFullWidth: {
		name: "Full width",
		type: "boolean",
	},
}

// Publish required stories.
export { SegmentedControl }
