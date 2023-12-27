import React from "react"

// Import required component.
import { Popover as SuiPopover, PopoverBaseProps } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page.
import docs from "./Popover.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Popover",
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
	position,
}: { example: string; tootlipText: string } & PopoverBaseProps) => {
	const boxStyles = {
		borderRadius: 4,
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiPopover
						position={position ?? "bottom"}
						trigger={
							<Button isSmall={true} appearance="primary" color="blue">
								Open popup
							</Button>
						}
						header={<h4>This is popover title</h4>}
						footer={
							<Button isSmall={true} appearance="secondary" color="black">
								Know more
							</Button>
						}
						// image="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/3061f01a175c457af10a05953daf0d47?_a=AQAEufR"
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry standard dummy text ever
						since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</SuiPopover>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Popover.args = {
	position: "right-bottom",
}

// Set controls for story arguments.
Popover.argTypes = {
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
}

// Publish required stories.
export { Popover }
