import React from "react"

// Import required modules
import { Integration as SuiIntegration } from "../src"

// Import documentation
import docs from "./integration.mdx"

// Import required assets
import image from "./images/icon.png"

// Default settings
export default {
	title: "SUI/Components/Modules/Integration",
	component: SuiIntegration,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Integration = ({ ...args }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#f8f8f8",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiIntegration {...args} />
				</div>
			</div>
		</div>
	)
}

// Story props defaults
Integration.args = {
	title: "Amazon S3",
	description:
		"Compress offloaded images including when you're removing files from your host server.",
	image: {
		alt: "amazon",
		src: image,
	},
	isDisabled: false,
	additionalInfo: "",
	isSettings: false,
	isPro: false,
}

// Story props settings
Integration.argTypes = {
	title: {
		name: "Title",
		control: "text",
	},
	description: {
		name: "Description",
		control: "text",
	},
	image: {
		name: "Icon",
		control: "object",
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
	},
	additionalInfo: {
		name: "Additional Info",
	},
	isSettings: {
		name: "Settings",
		control: "boolean",
	},
	isPro: {
		name: "Pro",
		control: "boolean",
	},
}
