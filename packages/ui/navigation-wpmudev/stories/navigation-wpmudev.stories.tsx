import React, { createRef, RefObject } from "react"

// Import required component(s)
import { NavigationWPMUDEV as SuiNavigation } from "../src"
import { PluginsSlug } from "@wpmudev/sui-utils"

// Import documentation main page
// import docs from "./navigation.mdx"

// Configure default options
export default {
	title: "SUI/Components/Modules/Navigation WPMUDEV",
	component: SuiNavigation,
	parameters: {
		layout: "fullscreen",
		docs: {
			// page: docs,
		},
	},
}

// Build story
export const Navigation = (props: {
	isPro: boolean
	action: boolean
	status: NavigationUserProps["status"]
	isMenuDisabled: NavigationUserProps["isMenuDisabled"]
	plugin: PluginsSlug
	title: string
	description: string
}) => {
	const { action, isPro, status, isMenuDisabled, plugin, title, description } =
		props

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<SuiNavigation></SuiNavigation>
			</div>
		</div>
	)
}

Navigation.args = {
	isPro: true,
	action: true,
	isMenuDisabled: false,
	status: "confirmed",
	plugin: "smush",
	title: "Smush Pro",
	description: "Description",
}

Navigation.argTypes = {
	isPro: {
		name: "Pro",
		control: {
			type: "boolean",
		},
	},
	action: {
		name: "Action buttons",
		control: {
			type: "boolean",
		},
	},
	isMenuDisabled: {
		name: "Menu Disabled",
		control: {
			type: "boolean",
		},
	},
	status: {
		name: "User Status",
		options: ["none", "confirmed", "awaiting", "not-accepted", "not-connected"],
		control: {
			type: "select",
			labels: {
				none: "None",
				confirmed: "Confirmed",
				awaiting: "Awaiting",
				"not-accepted": "Not Accepted",
				"not-connected": "Not Connected",
			},
		},
	},
	plugin: {
		name: "Plugin",
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
			"blc",
			"thc",
			"dashboard",
		],
		control: {
			type: "select",
			labels: {
				smush: "smush",
				defendre: "defender",
				snapshot: "snapshot",
				hummigbird: "hummingbird",
				forminator: "forminator",
				beehive: "beehive",
				hustle: "hustle",
				smartcrawl: "smartcrawl",
				shipper: "shipper",
				branda: "branda",
				blc: "blc",
				thc: "thc",
			},
		},
	},
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
		control: {
			type: "text",
		},
	},
}
