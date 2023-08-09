import React, { Fragment, useState } from "react"

// Import required component.
import { SetupBanner as SuiSetupBanner } from "../src"

// Import documentation main page.
import docs from "./SetupBanner.mdx"

// Build "SetupBanner" story.
const SetupBanner = ({ color, banner }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}
	let plugin = {}

	// set data value based on plugin name
	switch (banner) {
		case "smush":
			plugin = {
				icon: "PluginSmush",
				bgColor: "#382856",
				iconBGColor: "#2DC4E0",
				title: "Smush",
			}
			break

		case "defender":
			plugin = {
				icon: "PluginDefender",
				bgColor: "#1D1D1D",
				iconBGColor: "#282A2C",
				title: "Defender",
			}
			break

		case "snapshot":
			plugin = {
				icon: "PluginSnapshot",
				bgColor: "#1D273A",
				iconBGColor: "#1A325E",
				title: "Snapshot",
			}
			break

		case "hummingbird":
			plugin = {
				icon: "PluginHummingbird",
				bgColor: "#1A3B3F",
				iconBGColor: "#FF8E3C",
				title: "Hummingbird",
			}
			break

		case "forminator":
			plugin = {
				icon: "PluginForminator",
				bgColor: "#1F2852",
				iconBGColor: "#1F2852",
				title: "Forminator",
			}
			break

		case "beehive":
			plugin = {
				icon: "PluginBeehive",
				bgColor: "#0F3070",
				iconBGColor: "#013AA9",
				title: "Beehive",
			}
			break

		case "hustle":
			plugin = {
				icon: "PluginHustle",
				bgColor: "#1D1D1D",
				iconBGColor: "#1A1A1A",
				title: "Hustle",
			}
			break

		case "smartcrawl":
			plugin = {
				icon: "PluginSmartCrawl",
				bgColor: "#353637",
				iconBGColor: "#DE240A",
				title: "Smartcrawl",
			}
			break

		case "shipper":
			plugin = {
				icon: "PluginShipper",
				bgColor: "#12313B",
				iconBGColor: "#7B5499",
				title: "Shipper",
			}
			break

		case "branda":
			plugin = {
				icon: "PluginBranda",
				bgColor: "#2D2D2D",
				iconBGColor: "#FF8184",
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
	banner: "smush",
}

// Set controls for story arguments.
SetupBanner.argTypes = {
	banner: {
		name: "Banner",
		description: "",
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
