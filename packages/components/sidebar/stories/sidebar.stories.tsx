import React, { useState } from "react"

import { Tag } from "@wpmudev/sui-tag"

// Import required component
import { Sidebar as SuiSidebar, SidebarItem, SidebarDropdown } from "../src"

// Import documentation main page.
import docs from "./Sidebar.mdx"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import { Col, Row } from "@wpmudev/sui-grid"

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

const items = [
	{ title: "Option 1", url: "#", icon: "Bell" },
	{ title: "Option 2", url: "#", icon: "Bell" },
	{ title: "Option 3", url: "#" },
	{
		title: "Option 4 (disabled)",
		url: "#",
		icon: "Bell",
		isDisabled: true,
	},
]

// Build footer story
const Sidebar = ({}) => {
	const [currentTab, setCurrentTab] = useState<String>("Option 2")

	const handleSidebarItemClick = (option: String) => () => {
		setCurrentTab(option)
	}

	const renderSidebarItem = (
		title: string,
		url: string,
		icon?: string,
		hasAction = false,
		isDisabled = false,
	) => (
		<SidebarItem
			title={title}
			url={url}
			isActive={currentTab === title}
			onClick={handleSidebarItemClick(title)}
			icon={icon}
			action={hasAction ? tag : null}
			isDisabled={isDisabled}
		/>
	)

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<BoxGroup>
					<Row align={{ md: "inline" }}>
						<Col size="3">
							<SuiSidebar>
								{items.map(({ title, url, icon, isDisabled }) =>
									renderSidebarItem(title, url, icon, true, isDisabled),
								)}
							</SuiSidebar>
							<SidebarDropdown selectedItemName={currentTab}>
								{items.map(({ title, url, isDisabled }) =>
									renderSidebarItem(title, url, undefined, false, isDisabled),
								)}
							</SidebarDropdown>
						</Col>
						<Col size="9">
							<div
								style={{
									background: "white",
									height: "100%",
									minHeight: "200px",
									padding: "25px",
								}}
							>
								<div className="main">{currentTab}</div>
							</div>
						</Col>
					</Row>
				</BoxGroup>
			</div>
		</div>
	)
}

// Set story arguments
Sidebar.args = {}

// Set controls for story arguments
Sidebar.argTypes = {}

// Publish required stories
export { Sidebar }
