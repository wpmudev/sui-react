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
export const Dropdown = ({ example, ...props }) => {
	const set = {}

	set.box = {
		margin: 0,
		padding: "30px",
		border: "white" === props.color ? "1px solid #E6E6E6" : 0,
		borderRadius: "4px",
		background: "white" === props.color ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<SuiDropdown
						{...props}
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
						<div style={{ display: "flex", justifyContent: "center" }}>
							<Button appearance="primary" color="blue" isSmall={true}>
								Unlock bonus features
							</Button>
						</div>
					</SuiDropdown>
				</div>
			</div>
		</div>
	)
}

Dropdown.args = {
	example: "standard",
	id: "myUniqueId",
	label: "Menu Button",
	isSmall: false,
	hasCta: false,
	isLabelHidden: false,
}

Dropdown.argTypes = {
	example: {
		name: "Example",
		options: ["standard", "standard-icon", "link-options", "click-options"],
		control: {
			type: "select",
			options: {
				"Example: Standard": "standard",
				"Example: Option with icon": "standard-icon",
				"Example: Option with link": "link-options",
				"Example: Option with action": "click-options",
			},
		},
	},
	isSmall: {
		name: "Small",
	},
	hasCta: {
		name: "CTA Button",
	},
	isLabelHidden: {
		name: "Icon Button",
	},
}
