import React from "react"

// Import required component(s)
import { Navigation as SuiNavigation, NavigationUserProps } from "../src"
import { PluginsSlug } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { Dropdown } from "@wpmudev/sui-dropdown"

// Import documentation main page
import docs from "./navigation.mdx"

// Configure default options
export default {
	title: "SUI/Components/Modules/Navigation",
	component: SuiNavigation,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Navigation = (props: {
	status: NavigationUserProps["status"]
	isMenuDisabled: NavigationUserProps["isMenuDisabled"]
	plugin: PluginsSlug
	title: string
	description: string
}) => {
	const { status, isMenuDisabled, plugin, title, description } = props

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<div>
					<SuiNavigation
						brand={{
							plugin,
							title,
							description,
						}}
						user={{
							user: {
								image: "https://avatars.githubusercontent.com/u/14994452?v=4",
								name: "John doe",
								email: "john.doe@incsub.com",
							},
							status,
							isMenuDisabled,
							menu: [
								{
									id: "the-hub",
									label: "The Hub",
									props: {
										icon: "PluginDefender",
									},
								},
								{
									id: "product-roadmap",
									label: "Product Roadmap",
									props: {
										icon: "PluginSmush",
									},
								},
								{
									id: "product-roadmap",
									label: "Unlock Pro features",
									props: {
										icon: "PluginSmush",
										variation: "smush",
									},
								},
							],
						}}
					>
						<Button
							type="tertiary"
							icon="Bell"
							colorScheme="black"
							isResponsive={true}
						>
							Help
						</Button>
						<Button
							icon="Bell"
							type="tertiary"
							colorScheme="black"
							isResponsive={true}
						>
							Documentation
						</Button>
						<Button
							icon="PluginSmush"
							type="tertiary"
							colorScheme="black"
							isResponsive={true}
						>
							Support Smush
						</Button>
						<Dropdown
							buttonIcon="Bell"
							label="Connect features"
							placement="left"
							isResponsive={true}
							size="lg"
							menu={[
								{
									id: "group-1",
									label: "Extra Optimization",
									menus: [
										{
											id: "menu-2",
											label: "Uptime Monitoring",
											props: {
												icon: "CheckAlt",
											},
										},
										{
											id: "menu-2",
											label: "Site management tools",
											props: {},
										},
									],
								},
								{
									id: "group-2",
									label: "Performance",
									menus: [
										{
											id: "menu-2",
											label: "Uptime Monitoring",
											props: {},
										},
										{
											id: "menu-2",
											label: "Site management tools",
											props: {},
										},
									],
								},
							]}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									padding: "8px 24px",
								}}
							>
								<Button
									type="primary"
									icon="Package"
									colorScheme="blue"
									isSmall={true}
									isFullWidth={true}
								>
									Unlock bonus features
								</Button>
							</div>
						</Dropdown>
					</SuiNavigation>
				</div>
			</div>
		</div>
	)
}

Navigation.args = {
	isMenuDisabled: false,
	status: "confirmed",
	plugin: "smush",
	title: "Smush Pro",
	description: "Description",
}

Navigation.argTypes = {
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
