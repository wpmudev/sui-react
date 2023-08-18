import React from "react"

// Import required modules
import { Selector as SuiSelector } from "../src"

// Import documentation
import docs from "./selector.mdx"

// Default settings
export default {
	title: "SUI/Components/Core/Selector",
	component: SuiSelector,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Selector = ({ ...args }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		// background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiSelector {...args} />
				</div>
			</div>
		</div>
	)
}

// Story props defaults
Selector.args = {
	label: "Selector label",
	isDisabled: false,
	icon: "CheckAlt",
	title: "Option Title",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	imageUrl: "https://placehold.co/200x100.png",
}

// Story props settings
Selector.argTypes = {
	defaultValue: {
		table: {
			disable: true,
		},
	},
	icon: {
		name: "Icon",
		control: {
			type: "text",
		},
	},
}
