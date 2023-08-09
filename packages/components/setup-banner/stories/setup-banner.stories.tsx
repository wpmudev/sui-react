import React, { Fragment, useState } from "react"

// Import required component.
import { SetupBanner as SuiSetupBanner } from "../src"

// Import documentation main page.
import docs from "./SetupBanner.mdx"

const plugins = [
	{
		icon: "PluginSmush",
		bgColor: "#382856",
		iconBGColor: "#2DC4E0",
		title: "Smush",
	},
	{
		icon: "PluginDefender",
		bgColor: "#1D1D1D",
		iconBGColor: "#282A2C",
		title: "Defender",
	},
	{
		icon: "PluginSnapshot",
		bgColor: "#1D273A",
		iconBGColor: "#1A325E",
		title: "Snapshot",
	},
	{
		icon: "PluginHummingbird",
		bgColor: "#1A3B3F",
		iconBGColor: "#FF8E3C",
		title: "Hummingbird",
	},
	{
		icon: "PluginForminator",
		bgColor: "#1F2852",
		iconBGColor: "#1F2852",
		title: "Forminator",
	},
	{
		icon: "PluginBeehive",
		bgColor: "#0F3070",
		iconBGColor: "#013AA9",
		title: "Beehive",
	},
	{
		icon: "PluginHustle",
		bgColor: "#1D1D1D",
		iconBGColor: "#1A1A1A",
		title: "Hustle",
	},
	{
		icon: "PluginSmartCrawl",
		bgColor: "#353637",
		iconBGColor: "#DE240A",
		title: "Smartcrawl",
	},
	{
		icon: "PluginShipper",
		bgColor: "#12313B",
		iconBGColor: "#7B5499",
		title: "Shipper",
	},
	{
		icon: "PluginBranda",
		bgColor: "#2D2D2D",
		iconBGColor: "#FF8184",
		title: "Branda",
	},
]

// Build "SetupBanner" story.
const SetupBanner = ({ color }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		// background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{plugins.map((plugin, index) => (
						<Fragment key={index}>
							<SuiSetupBanner
								{...plugin}
								description="Welcome to Smush. The only tool you need to optimize your imeges. Before getting to it, let’s start with simple plugin setup. The recommended settings are pre-enabled by default, but you can adjust it after the setup."
							/>
							<br />
						</Fragment>
					))}
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
SetupBanner.args = {}

// Set controls for story arguments.
SetupBanner.argTypes = {
	content: {
		name: "Content",
		description: "The SetupBanner content to display.",
		control: "text",
		if: {
			arg: "isSmall",
			eq: true,
		},
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Collections/Setup Banner",
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
