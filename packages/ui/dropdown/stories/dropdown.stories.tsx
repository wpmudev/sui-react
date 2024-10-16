import React, { useState } from "react"

// Import required component(s)
import { Dropdown as SuiDropdown } from "../src"
import { Button } from "@wpmudev/sui-button"

import { IconsName } from "@wpmudev/sui-icons"

// Import documentation main page
import docs from "./ReactDropdown.mdx"
import { MenuItemProps, MenuGroupProps } from "../src/dropdown.types"

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

const menuOptions: Array<MenuItemProps | MenuGroupProps> = [
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
]

// Build story
export const Dropdown = ({
	example,
	color,
	...props
}: {
	example: string
	color: string
}) => {
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

	const perPage = 20

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					{"menu" === example && (
						<SuiDropdown
							{...props}
							isAsync={false}
							onMenuClick={(menuId, e) => {
								const checkedList = [...checkedItems]

								if (checkedList.indexOf(menuId as string) > -1) {
									checkedList.splice(checkedItems.indexOf(menuId as string), 1)
								} else {
									checkedList.push(menuId as string)
								}

								setCheckedItems(checkedList as [])
							}}
							menu={[
								{
									id: "view-form",
									label: "View form",
								},
								{
									id: "edit-form",
									label: "Edit form",
								},
								{
									id: "duplicate-form",
									label: "Duplicate form",
								},
								{
									id: "delete-form",
									label: "Delete form",
									props: {
										variation: "danger",
										icon: "Trash",
									},
								},
							]}
						/>
					)}
					{"async" === example && (
						<SuiDropdown
							{...props}
							type="select"
							isAsync={true}
							asyncOptions={{
								perPage,
								totalItems: optionsAPILimit,
							}}
							getOptions={async (
								search: string,
								{ page }: any,
								prevLoadedItems = [],
							) => {
								// calculate how many items to skip
								const skip = page * perPage - 10
								// store all menu items here
								const items: any = []
								const baseAPI = `https://dummyjson.com/products/search`
								let total = 0

								// fetch data from API
								await fetch(
									`${baseAPI}?limit=${perPage}&skip=${skip}&total=50&q=${search}`,
								)
									.then((res) => res.json())
									.then((result) => {
										total = result.total

										result.products.forEach((item: any) => {
											items.push({
												id: item?.id,
												label: item?.title,
												isSelected: false,
											})
										})
									})

								return {
									items,
									hasMore: [...items, ...prevLoadedItems].length < 100,
								}
							}}
						/>
					)}
					{"select-variable" === example && (
						<SuiDropdown
							{...props}
							type="select-variable"
							menu={[
								{
									id: "view-form",
									label: "View form",
									props: {
										variable: "{tag}",
										description: "Short description",
									},
								},
								{
									id: "edit-form",
									label: "Edit form",
									props: {
										variable: "{tag}",
										description: "Short description",
									},
								},
								{
									id: "duplicate-form",
									label: "Duplicate form",
									props: {
										variable: "{tag}",
										description: "Short description",
									},
								},
								{
									id: "delete-form",
									label: "Delete form",
									props: {
										variable: "{tag}",
										description: "Short description",
									},
								},
							]}
							onSearch={(string) => {
								// console.log("search", string)
							}}
						/>
					)}
					{"custom" === example && (
						<SuiDropdown menuCustomWidth={280} {...props}>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
									padding: "8px 16px",
								}}
							>
								<h3>CUSTOM CONTENT</h3>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
									aliquid beatae atque veritatis itaque placeat illum nemo eaque
									explicabo obcaecati qui, voluptas, possimus unde, quis magni
									quaerat? Unde, facilis voluptatem!
								</p>
							</div>
						</SuiDropdown>
					)}
					{"pro" === example && <SuiDropdown menu={menuOptions} {...props} />}
				</div>
			</div>
		</div>
	)
}

Dropdown.args = {
	example: "menu",
	label: "Menu Button",
	isSmall: false,
	isFixedHeight: true,
	iconOnly: false,
	renderContentOnTop: false,
	placement: "right",
	buttonIcon: "Menu",
	buttonProps: {
		type: "tertiary",
	},
	allowSearch: true,
	closeOnOuterClick: true,
	closeOnMenuItemClick: true,
	isFluid: false,
	size: "md",
	isAsync: false,
	isDisabled: false,
	onMenuClick: () => {},
}

Dropdown.argTypes = {
	example: {
		name: "Type",
		options: [
			"menu",
			//  "async",
			//  "select-variable",
			"pro",
			"custom",
		],
		control: {
			type: "select",
			labels: {
				menu: "Example: Menu",
				// select: "Example: Dropdown",
				// "select-variable": "Example: Select + Variable",
				pro: "Example: Pro Menu",
				// icon: "Example: Icon Only",
				custom: "Example: Custom Content",
			},
		},
	},
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
	buttonProps: {
		name: "Button Props",
		control: "object",
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
	isFluid: {
		name: "Full width",
		control: "boolean",
	},
	size: {
		name: "Size",
		options: ["sm", "md", "lg"],
		control: {
			type: "select",
			labels: {
				sm: "Small",
				md: "Medium",
				lg: "Large",
			},
		},
		if: {
			arg: "isFluid",
			eq: false,
		},
	},
	isDisabled: {
		name: "Disabled",
		control: "boolean",
	},
	allowSearch: {
		name: "Search",
		control: "boolean",
	},
	onMenuClick: {
		name: "onClick",
		type: Function,
	},
	closeOnOuterClick: {
		name: "Close (Outer click)",
		control: "boolean",
	},
	closeOnMenuItemClick: {
		name: "Close (Menu Item click)",
		control: "boolean",
	},
	isAsync: { table: { disable: true } },
	isResponsive: { table: { disable: true } },
	_htmlProps: { table: { disable: true } },
	_style: { table: { disable: true } },
	type: { table: { disable: true } },
	colorScheme: { table: { disable: true } },
	asyncOptions: { table: { disable: true } },
}
