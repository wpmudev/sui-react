import React, { useState } from "react"

// Import required component(s)
import { Dropdown as SuiDropdown } from "../src"
import { Button } from "@wpmudev/sui-button"

import { IconsName } from "@wpmudev/sui-icons"

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
		display: "flex",
		gap: "8px",
		margin: 0,
		padding: "30px",
		border: "white" === color ? "1px solid #E6E6E6" : 0,
		borderRadius: "4px",
		background: "white" === color ? "#333" : "#fff",
	}

	const [checkedItems, setCheckedItems] = useState<Array<string | number>>([])
	const [optionsAPILimit, setOptionsAPILimit] = useState(0)

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					<SuiDropdown
						{...props}
						// onMenuClick={(menuId, e) => {
						// 	const checkedList = [...checkedItems]

						// 	if (checkedList.indexOf(menuId) > -1) {
						// 		checkedList.splice(checkedItems.indexOf(menuId), 1)
						// 	} else {
						// 		checkedList.push(menuId)
						// 	}

						// 	setCheckedItems(checkedList as [])
						// }}
						label="Select + Checkbox"
						type="select"
						menu={[
							// {
							// 	id: "view-form",
							// 	label: "View form",
							// 	props: {
							// 		isChecked: checkedItems.indexOf("view-form") > -1,
							// 	},
							// },
							// {
							// 	id: "edit-form",
							// 	label: "Edit form",
							// 	props: {
							// 		isChecked: checkedItems.indexOf("edit-form") > -1,
							// 	},
							// },
							// {
							// 	id: "duplicate-form",
							// 	label: "Duplicate form",
							// 	props: {
							// 		isChecked: checkedItems.indexOf("duplicate-form") > -1,
							// 	},
							// },
							// {
							// 	id: "delete-form",
							// 	label: "Delete form",
							// 	props: {
							// 		variation: "danger",
							// 		icon: "Trash",
							// 		isDisabled: true,
							// 	},
							// },
							{
								id: "menu-beehive",
								label: "Beehive",
								props: {
									href: "#",
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
									icon: "PluginSmartcrawl",
									variation: "smartcrawl",
								},
							},
							{
								id: "menu-ivt",
								label: "IVT",
								props: {
									icon: "PluginIvt",
									variation: "ivt",
								},
							},
						]}
						onSearch={(string) => {
							console.log("search", string)
						}}
						/*menu={[
							{
								id: "menu-beehive",
								label: "Beehive",
								props: {
									href: "#",
									icon: "PluginBeehive",
									variation: "beehive",
								},
							},
							{
								id: "plugin-variants",
								label: "Plugin Variations",
								menus: [
									{
										id: "menu-beehive",
										label: "Beehive",
										props: {
											href: "#",
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
											icon: "PluginSmartcrawl",
											variation: "smartcrawl",
										},
									},
									{
										id: "menu-ivt",
										label: "IVT",
										props: {
											icon: "PluginIvt",
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
						]}*/
					/>
					{/*<div
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
					</SuiDropdown>*/}
					<SuiDropdown
						{...props}
						type="select"
						isAsync={true}
						allowSearch={true}
						label="Select + API + Search"
						asyncOptions={{
							perPage: 10,
							totalItems: optionsAPILimit,
						}}
						getOptions={async (page, perPage, search) => {
							// calculate how many items to skip
							const skip = 1 === page ? 0 : page * perPage
							// store all menu items here
							const options: any = []

							const baseAPI = `https://dummyjson.com/products/search`

							// fetch data from API
							await fetch(
								`${baseAPI}?limit=${perPage}&skip=${skip}&q=${search}`,
							)
								.then((res) => res.json())
								.then((result) => {
									// set total numbers of options
									if (optionsAPILimit === 0) {
										setOptionsAPILimit(result?.total)
									}

									result.products.forEach((item: any) => {
										options.push({ id: item?.id, label: item?.title })
									})
								})

							return options
						}}
						_style={{
							width: "250px",
						}}
					/>
					<SuiDropdown
						{...props}
						type="select-variable"
						allowSearch={true}
						label="Select + Variable"
						menu={[
							{
								id: "view-form",
								label: "View form",
								props: {
									variable: "tag",
									description: "Short description",
								},
							},
							{
								id: "edit-form",
								label: "Edit form",
								props: {
									variable: "tag",
									description: "Short description",
								},
							},
							{
								id: "duplicate-form",
								label: "Duplicate form",
								props: {
									variable: "tag",
									description: "Short description",
								},
							},
							{
								id: "delete-form",
								label: "Delete form",
								props: {
									variable: "tag",
									description: "Short description",
								},
							},
						]}
						onSearch={(string) => {
							console.log("search", string)
						}}
						_style={{
							width: "250px",
						}}
					/>
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
	isFixedHeight: true,
	iconOnly: false,
	renderContentOnTop: false,
	placement: "right",
	buttonIcon: "Menu",
	onMenuClick: () => {},
}

Dropdown.argTypes = {
	label: {
		name: "Label",
		control: "text",
	},
	isSmall: {
		name: "Small",
		control: "boolean",
	},
	isFixedHeight: {
		name: "Fixed Height",
		control: "boolean",
	},
	renderContentOnTop: {
		name: "Render content on top",
		control: "boolean",
	},
	iconOnly: {
		name: "Icon Button",
		control: "boolean",
	},
	buttonIcon: {
		name: "Icon",
		options: IconsName,
		control: "select",
	},
	onMenuClick: {
		name: "On Click",
		type: Function,
	},
	placement: {
		name: "Placement",
		options: ["left", "right"],
		control: {
			type: "select",
			labels: {
				left: "Left",
				right: "Right",
			},
		},
	},
	isResponsive: { table: { disable: true } },
	_htmlProps: { table: { disable: true } },
}
