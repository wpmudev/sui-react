import React from "react"

// Import required component.
import { SetupBanner as SuiSetupBanner } from "../src"

// Import documentation main page.
import docs from "./SetupBanner.mdx"

// Build "SetupBanner" story.
const SetupBanner = ({ color, ...props }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiSetupBanner {...props} />
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
SetupBanner.args = {
	type: "smush",
	title: "Smush",
	description:
		"Welcome to Smush. The only tool you need to optimize your images. Before getting to it, let’s start with simple plugin setup. The recommended settings are pre-enabled by default, but you can adjust it after the setup.",
}

// Set controls for story arguments.
SetupBanner.argTypes = {
	title: {
		name: "Title",
		description: "Plugin banner title.",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
		description: "Plugin banner description.",
		control: {
			type: "text",
		},
	},
	type: {
		name: "Type",
		description: "Select the plugin banner.",
		options: [
			"smush",
			"defender",
			"snapshot",
			"hummingbird",
			"forminator",
			"beehive",
			"hustle",
			"smartcrawl",
			"shipper",
			"branda",
		],
		control: {
			type: "select",
			labels: {
				smush: "Smush",
				defender: "Defender",
				snapshot: "Snapshot",
				hummingbird: "Hummingbird",
				forminator: "Forminator",
				beehive: "Beehive",
				hustle: "Hustle",
				smartcrawl: "Smartcrawl",
				shipper: "Shipper",
				branda: "Branda",
			},
		},
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Core/Setup Banner",
	component: SetupBanner,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { SetupBanner }
