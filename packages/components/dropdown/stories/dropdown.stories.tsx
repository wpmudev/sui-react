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
						onMenuClick={(id, e) => {
							console.log("DEBUG: Menu Item Clicked", id, e)
						}}
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
