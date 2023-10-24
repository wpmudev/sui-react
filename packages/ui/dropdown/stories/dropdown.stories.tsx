import React from "react"

// Import required component(s)
import { Dropdown as SuiDropdown } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./ReactDropdown.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Dropdown",
	component: SuiDropdown,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Dropdown = ({ color, ...props }: { color: string }) => {
	const boxStyle = {
		margin: 0,
		padding: "30px",
		border: "white" === color ? "1px solid #E6E6E6" : 0,
		borderRadius: "4px",
		background: "white" === color ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					<SuiDropdown
						{...props}
						menu={[
							{
								id: "plugin-variants",
								label: "Plugin Variations",
								menus: [
									{
										id: "menu-beehive",
										label: "Beehive",
										props: {
											icon: "PluginBeehive",
											variation: "beehive",
										},
									},
									{
										id: "menu-branda",
										label: "Branda",
										props: {
											icon: "PluginBranda",
											variation: "branda",
										},
									},
									{
										id: "menu-defender",
										label: "Defender",
										props: {
											icon: "PluginDefender",
											variation: "defender",
										},
									},
									{
										id: "menu-forminator",
										label: "Forminator",
										props: {
											icon: "PluginForminator",
											variation: "forminator",
										},
									},
									{
										id: "menu-hummingbird",
										label: "Hummingbird",
										props: {
											icon: "PluginHummingbird",
											variation: "hummingbird",
										},
									},
									{
										id: "menu-hustle",
										label: "Hustle",
										props: {
											icon: "PluginHustle",
											variation: "hustle",
										},
									},
									{
										id: "menu-shipper",
										label: "Shipper",
										props: {
											icon: "PluginShipper",
											variation: "shipper",
										},
									},
									{
										id: "menu-smush",
										label: "Smush",
										props: {
											icon: "PluginSmush",
											variation: "smush",
										},
									},
									{
										id: "menu-smartcrawl",
										label: "SmartCrawl",
										props: {
											icon: "PluginSmartCrawl",
											variation: "smartcrawl",
										},
									},
									{
										id: "menu-ivt",
										label: "IVT",
										props: {
											icon: "PluginIVT",
											variation: "ivt",
										},
									},
								],
							},
							{
								id: "group-2",
								label: "Web Services",
								menus: [
									{
										id: "domain",
										label: "DomainName Delight",
										props: {},
									},
									{
										id: "cms",
										label: "CMS Creation Platter",
										props: {},
									},
									{
										id: "hosting-hotspot",
										label: "Hosting Hotspot",
										props: {},
									},
									{
										id: "seo-smoothie",
										label: "SEO Smoothie",
										props: {},
									},
									{
										id: "code-compiler-combo",
										label: "Code Compiler Combo",
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
								icon="package"
								color="blue"
								isSmall={true}
								isFullWidth={true}
							>
								Unlock bonus features
							</Button>
						</div>
					</SuiDropdown>
					<br />
					<SuiDropdown {...props}>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								padding: "8px 24px",
							}}
						>
							CUSTOM CONTENT ONLY
						</div>
					</SuiDropdown>
				</div>
			</div>
		</div>
	)
}

Dropdown.args = {
	label: "Menu Button",
	isSmall: false,
	iconOnly: false,
	onMenuClick: () => {},
}

Dropdown.argTypes = {
	isSmall: {
		name: "Small",
	},
	iconOnly: {
		name: "Icon Button",
	},
	onMenuClick: {
		name: "onMenuClick",
		type: Function,
	},
}