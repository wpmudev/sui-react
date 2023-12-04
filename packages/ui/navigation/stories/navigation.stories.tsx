import React from "react"

// Import required component(s)
import { Navigation as SuiNavigation } from "../src"
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
export const Navigation = ({ ...props }) => {
	const actions = [
		<Button
			key={0}
			appearance="secondary"
			color="black"
			isSmall={true}
			isFullWidth={true}
		>
			Primary
		</Button>,
		<Button
			key={1}
			appearance="secondary"
			color="black"
			isSmall={true}
			isFullWidth={true}
		>
			Secondary
		</Button>,
	]

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<div>
					<SuiNavigation
						{...props}
						brand={{
							title: "Smush Pro",
							description: "Description",
						}}
						user={{
							user: {
								image: "https://avatars.githubusercontent.com/u/14994452?v=4",
								name: "John doe",
								email: "john.doe@incsub.com",
							},
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
							appearance="tertiary"
							icon="Bell"
							color="black"
							isResponsive={true}
						>
							Help
						</Button>
						<Button
							icon="Bell"
							appearance="tertiary"
							color="black"
							isResponsive={true}
						>
							Documentation
						</Button>
						<Button
							icon="PluginSmush"
							appearance="tertiary"
							color="black"
							isResponsive={true}
						>
							Support Smush
						</Button>
						<Dropdown
							buttonIcon="Bell"
							label="Connect features"
							direction="left"
							isResponsive={true}
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
									appearance="primary"
									icon="Package"
									color="blue"
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

Navigation.args = {}

Navigation.argTypes = {}
