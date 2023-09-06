import React from "react"

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

// Build footer story
const Sidebar = ({}) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SidebarDropdown>
					<SidebarItem title="Sidebar item" url="#" />
					<SidebarItem isActive={true} title="Sidebar Item (active)" url="#" />
					<SidebarItem title="Sidebar item" url="#" />
					<SidebarItem
						isDisabled={true}
						title="Sidebar item (disabled)"
						url="#"
					/>
				</SidebarDropdown>
				<Box>
					<BoxGroup>
						<Row align={{ md: "inline" }}>
							<Col size="3">
								<SuiSidebar>
									<SidebarItem
										action={tag}
										title="Sidebar item"
										url="#"
										icon="Bell"
									/>
									<SidebarItem
										isActive={true}
										action={tag}
										title="Sidebar Item (active)"
										url="#"
										icon="Bell"
									/>
									<SidebarItem action={tag} title="Sidebar item" url="#" />
									<SidebarItem
										isDisabled={true}
										title="Sidebar item (disabled)"
										url="#"
										icon="Bell"
									/>
								</SuiSidebar>
							</Col>
							<Col size="9">This is a side content.</Col>
						</Row>
					</BoxGroup>
				</Box>
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
