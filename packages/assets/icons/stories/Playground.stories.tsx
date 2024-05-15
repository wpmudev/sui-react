import React from "react"
import Icons, { IconsName, IconsNamesType } from "@wpmudev/sui-icons"

// Configure default options.
export default {
	title: "SUI/Icons Pack",
	//component: <>Hello!</>,
	parameters: {
		layout: "fullscreen",
	},
}

// Build "Icon" story.
const Playground = ({ ...args }) => {
	const {
		icon: name,
		title,
		viewBox,
		iconHeight,
		iconWidth,
		colorScheme,
		size,
		fill,
	} = args
	const boxStyle = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
		fontSize: 0,
		lineHeight: 1,
	}

	const IconName = name

	// Set Icon & iconColor based on "variation" value
	const IconTag = Icons[IconName as IconsNamesType]

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					<IconTag
						title={title}
						viewBox={viewBox}
						iconHeight={iconHeight}
						iconWidth={iconWidth}
						colorScheme={colorScheme}
						size={size}
						fill={fill}
					/>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Playground.args = {
	icon: "Add",
	viewBox: "0 0 24 24",
	colorScheme: "",
	size: "",
	fill: "",
	iconHeight: 24,
	iconWidth: 24,
}

// Set controls for story arguments.
Playground.argTypes = {
	icon: {
		name: "Icon",
		options: IconsName,
		control: {
			type: "select",
		},
	},
	fill: {
		name: "Fill",
		control: "color",
	},
	colorScheme: {
		name: "Color Scheme",
		options: ["", "neutral", "informative", "success", "warning", "critical"],
		control: { type: "select" },
	},
	size: {
		name: "Size",
		options: ["", "xs", "sm", "md", "lg", "xl"],
		control: { type: "select" },
	},
	iconHeight: {
		name: "Icon Height",
		control: "number",
	},
	iconWidth: {
		name: "Icon Width",
		control: "number",
	},
}

// Publish required stories.
export { Playground }
