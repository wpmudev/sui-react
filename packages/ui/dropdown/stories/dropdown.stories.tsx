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

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					{"select-checkbox" === example && (
						<SuiDropdown
							{...props}
							onMenuClick={(menuId, e) => {
								const checkedList = [...checkedItems]

								if (checkedList.indexOf(menuId) > -1) {
									checkedList.splice(checkedItems.indexOf(menuId), 1)
								} else {
									checkedList.push(menuId)
								}

								setCheckedItems(checkedList as [])
							}}
							type="select-checkbox"
							menu={[
								{
									id: "view-form",
									label: "View form",
									props: {
										isChecked: checkedItems.indexOf("view-form") > -1,
									},
								},
								{
									id: "edit-form",
									label: "Edit form",
									props: {
										isChecked: checkedItems.indexOf("edit-form") > -1,
									},
								},
								{
									id: "duplicate-form",
									label: "Duplicate form",
									props: {
										isChecked: checkedItems.indexOf("duplicate-form") > -1,
									},
								},
								{
									id: "delete-form",
									label: "Delete form",
									props: {
										variation: "danger",
										icon: "Trash",
										isDisabled: true,
									},
								},
							]}
							onSearch={(string) => {
								console.log("search", string)
							}}
						/>
					)}
					{"select" === example && (
						<SuiDropdown
							{...props}
							type="select"
							isAsync={true}
							allowSearch={true}
							asyncOptions={{
								perPage: 20,
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
					)}
					{"select-variable" === example && (
						<SuiDropdown
							{...props}
							type="select-variable"
							allowSearch={true}
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
								console.log("search", string)
							}}
							menuCustomWidth={250}
							_style={{
								width: "250px",
							}}
						/>
					)}
					{"custom" === example && (
						<SuiDropdown menuCustomWidth={280} menu={menuOptions} {...props}>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									padding: "8px 16px",
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
						</SuiDropdown>
					)}
					{"pro" === example && (
						<SuiDropdown
							menuCustomWidth={280}
							menu={menuOptions}
							{...props}
						></SuiDropdown>
					)}
				</div>
			</div>
		</div>
	)
}

Dropdown.args = {
	example: "select-checkbox",
	label: "Menu Button",
	isSmall: false,
	isFixedHeight: true,
	iconOnly: false,
	renderContentOnTop: false,
	placement: "right",
	buttonIcon: "Menu",
	allowSearch: true,
	closeOnOuterClick: true,
	isAsync: true,
	onMenuClick: () => {},
}

Dropdown.argTypes = {
	example: {
		name: "Type",
		options: ["select-checkbox", "select", "select-variable", "pro", "custom"],
		control: {
			type: "select",
			labels: {
				"select-checkbox": "Example: Select + Checkbox",
				select: "Example: Dropdown",
				"select-variable": "Example: Select + Variable",
				pro: "Example: Pro Menu",
				icon: "Example: Icon Only",
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
	isAsync: { table: { disable: true } },
	isResponsive: { table: { disable: true } },
	_htmlProps: { table: { disable: true } },
	_style: { table: { disable: true } },
	type: { table: { disable: true } },
	colorScheme: { table: { disable: true } },
	asyncOptions: { table: { disable: true } },
}
