import React, { useState } from "react"

import { Tag } from "@wpmudev/sui-tag"
import { IconsNamesType } from "@wpmudev/sui-icons"

// Import required component
import { Sidebar as SuiSidebar, SidebarItem, SidebarDropdown } from "../src"

// Import documentation main page.
import docs from "./Sidebar.mdx"
import { BoxGroup } from "@wpmudev/sui-box"
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

const items = [
	{ title: "General", url: "#", icon: "Settings", hasAction: false },
	{ title: "Integrations", url: "#", icon: "Link", hasAction: true },
	{ title: "Configs", icon: "Config", url: "#", hasAction: true },
	{
		title: "Data",
		url: "#",
		icon: "Refresh",
		isDisabled: true,
		hasAction: true,
	},
]

// Build footer story
const Sidebar = ({}) => {
	const [currentTab, setCurrentTab] = useState<string>("Option 2")

	const handleSidebarItemClick = (option: string) => () => {
		setCurrentTab(option)
	}

	const boxStyle = {
		margin: 0,
		padding: "30px 0",
		background: "#f8f8f8",
	}

	const renderSidebarItem = (
		title: string,
		url: string,
		icon?: IconsNamesType,
		hasAction = false,
		isDisabled = false,
	) => (
		<SidebarItem
			title={title}
			url={url}
			isActive={currentTab === title}
			onClick={handleSidebarItemClick(title)}
			icon={icon}
			action={
				hasAction ? (
					<Tag
						colorScheme="black"
						design="outlined"
						isDisabled={isDisabled}
						isSmall={true}
					>
						PRO
					</Tag>
				) : null
			}
			isDisabled={isDisabled}
		/>
	)

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					<BoxGroup>
						<Row align={{ md: "inline" }}>
							<Col size="3">
								<SuiSidebar>
									{items.map(({ title, url, icon, isDisabled, hasAction }) =>
										renderSidebarItem(
											title,
											url,
											icon as IconsNamesType,
											hasAction,
											isDisabled,
										),
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
		</div>
	)
}

// Set story arguments
Sidebar.args = {}

// Set controls for story arguments
Sidebar.argTypes = {}

// Publish required stories
export { Sidebar }
