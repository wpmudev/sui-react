import React, { Fragment, useState } from "react"

// Import required component.
import { SetupBanner as SuiSetupBanner } from "../src"

// Import documentation main page.
import docs from "./SetupBanner.mdx"

// Build "SetupBanner" story.
const SetupBanner = ({ color, type }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}
	let plugin = {}

	// set data value based on plugin name
	switch (type) {
		case "smush":
			plugin = {
				title: "Smush",
			}
			break

		case "defender":
			plugin = {
				title: "Defender",
			}
			break

		case "snapshot":
			plugin = {
				title: "Snapshot",
			}
			break

		case "hummingbird":
			plugin = {
				title: "Hummingbird",
			}
			break

		case "forminator":
			plugin = {
				title: "Forminator",
			}
			break

		case "beehive":
			plugin = {
				title: "Beehive",
			}
			break

		case "hustle":
			plugin = {
				title: "Hustle",
			}
			break

		case "smartcrawl":
			plugin = {
				title: "Smartcrawl",
			}
			break

		case "shipper":
			plugin = {
				title: "Shipper",
			}
			break

		case "branda":
			plugin = {
				title: "Branda",
			}
			break

		default:
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiSetupBanner
						description="Welcome to Smush. The only tool you need to optimize your imeges. Before getting to it, let’s start with simple plugin setup. The recommended settings are pre-enabled by default, but you can adjust it after the setup."
						{...plugin}
					/>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
SetupBanner.args = {
	type: "smush",
}

// Set controls for story arguments.
SetupBanner.argTypes = {
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
