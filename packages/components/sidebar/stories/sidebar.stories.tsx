import React from "react"

import { Tag } from "@wpmudev/sui-tag"

// Import required component
import { Sidebar as SuiSidebar, SidebarItem } from "../src"

// Import documentation main page.
import docs from "./Sidebar.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Sidebar",
	component: SuiSidebar,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const tag = (
	<Tag color="black" design="outlined" isSmall={true}>
		PRO
	</Tag>
)

// Build footer story
const Sidebar = ({}) => {
	return (
		<div style={{ maxWidth: "400px", padding: "30px 0" }}>
			<SuiSidebar>
				<SidebarItem action={tag} title="Sidebar item" url="#" />
				<SidebarItem
					isActive={true}
					action={tag}
					title="Sidebar Item (active)"
					url="#"
				/>
				<SidebarItem action={tag} title="Sidebar item" url="#" />
				<SidebarItem
					isDisabled={true}
					title="Sidebar item (disabled)"
					url="#"
				/>
			</SuiSidebar>
		</div>
	)
}

// Set story arguments
Sidebar.args = {}

// Set controls for story arguments
Sidebar.argTypes = {}

// Publish required stories
export { Sidebar }
