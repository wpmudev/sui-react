import React from "react"

// Import required component
import { Menu as SuiMenu, MenuItem } from "../src"

// Import documentation main page
import docs from "./ReactMenu.mdx"
import { MenuGroup } from "../src/menu-group"

// Configure default options
export default {
	title: "SUI/Components/Core/Menu",
	component: SuiMenu,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build menu story
const Menu = ({}) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={{ width: "300px", backgroundColor: "white" }}>
					<SuiMenu>
						<MenuGroup title="Extra Optimization">
							<MenuItem icon="FileCheck">JavaScript Execution</MenuItem>
							<MenuItem icon="FileCheck">Critical CSS</MenuItem>
							<MenuItem isDisabled={true}>Menu Item 2</MenuItem>
							<MenuItem>Menu Item 2</MenuItem>
						</MenuGroup>
						<MenuGroup title="Performance">
							<MenuItem icon="FileCheck">Uptime Monitoring</MenuItem>
							<MenuItem icon="FileCheck">Site management tools</MenuItem>
							<MenuItem href="google.com">Menu Item 2</MenuItem>
							<MenuItem>Menu Item 2</MenuItem>
						</MenuGroup>
					</SuiMenu>
				</div>
			</div>
		</div>
	)
}

// Set story arguments
Menu.args = {
	example: "default",
}

// Set controls for story arguments
Menu.argTypes = {}

// Publish required stories
export { Menu }
