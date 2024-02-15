import React, { createRef, useState } from "react"

import { Tag } from "@wpmudev/sui-tag"
import { IconsNamesType } from "@wpmudev/sui-icons"

// Import required component
import { Drawer as SuiDrawer, DrawerActions, DrawerHeader } from "../src"

// Import documentation main page.
import docs from "./Drawer.mdx"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import { Col, Row } from "@wpmudev/sui-grid"
import { DrawerFooter } from "../src/drawer-footer"
import { DrawerBody } from "../src/drawer-body"
import { Button } from "@wpmudev/sui-button"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Drawer",
	component: SuiDrawer,
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

const _internalDrawer = ({
	toggleRef,
	title = "Drawer header",
	desc = "",
	...props
}) => {
	return (
		<SuiDrawer ref={toggleRef} {...props}>
			<DrawerHeader
				title={title}
				hintText={desc}
				tooltipOptions={{ position: "bottom" }}
			/>
			<DrawerBody>
				<div style={{ padding: "16px" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					rutrum sem eros, sed tempor sapien porta ac. Nullam purus metus.
				</div>
			</DrawerBody>
			<DrawerFooter>
				<div>
					<Button appearance="secondary" color="blue" isSmall={true}>
						Secondary
					</Button>
					<Button appearance="primary" color="blue" isSmall={true}>
						Primary
					</Button>
				</div>
			</DrawerFooter>
		</SuiDrawer>
	)
}

// Build footer story
const Drawer = (props) => {
	const [currentTab, setCurrentTab] = useState<string>("Option 2")

	const handleDrawerItemClick = (option: string) => () => {
		setCurrentTab(option)
	}

	const ref = createRef<DrawerActions | null>()
	const overNavRef = createRef<DrawerActions | null>()
	const underNavRef = createRef<DrawerActions | null>()

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<_internalDrawer
					toggleRef={ref}
					{...props}
					tooltipOptions={{ position: "bottom" }}
					title="Drawer title"
					desc="Drawer for body container, it is fixed positioned"
				/>
				<BoxGroup>
					<Row>
						<Col size="12">
							<Box>
								<div
									style={{
										background: "white",
										height: "100%",
										minHeight: "500px",
										position: "relative",
									}}
								>
									<_internalDrawer
										toggleRef={overNavRef}
										{...props}
										tooltipOptions={{ position: "bottom" }}
										title="Drawer title"
										desc="Above the top navigation"
										hasContainer={true}
									/>
									<div
										style={{
											padding: "20px 24px",
											borderBottom: "solid 1px #e0e0e0",
										}}
									>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<div>Header Row</div>
											<div>Header actions</div>
										</div>
									</div>
									<div
										style={{
											padding: "20px",
											position: "relative",
											minHeight: "600px",
										}}
									>
										<_internalDrawer
											toggleRef={underNavRef}
											{...props}
											tooltipOptions={{ position: "bottom" }}
											title="Drawer title"
											desc="Below the top navigation"
											hasContainer={true}
											disableShadow={true}
										/>
										<Button
											appearance="primary"
											color="blue"
											isSmall={true}
											onClick={() => {
												ref?.current?.toggle()
												overNavRef?.current?.hide()
												underNavRef?.current?.hide()
											}}
										>
											Body drawer
										</Button>
										<Button
											appearance="primary"
											color="blue"
											isSmall={true}
											onClick={() => {
												overNavRef?.current?.toggle()
												underNavRef?.current?.hide()
												ref?.current?.hide()
											}}
										>
											Over navigation drawer
										</Button>
										<Button
											appearance="primary"
											color="blue"
											isSmall={true}
											onClick={() => {
												underNavRef?.current?.toggle()
												overNavRef?.current?.hide()
												ref?.current?.hide()
											}}
										>
											Under navigation drawer
										</Button>
									</div>
								</div>
							</Box>
						</Col>
					</Row>
				</BoxGroup>
			</div>
		</div>
	)
}

// Set story arguments
Drawer.args = {
	position: "right",
	size: "large",
	outerClickClose: true,
	hasContainer: false,
	disableShadow: false,
}

// Set controls for story arguments
Drawer.argTypes = {
	position: {
		name: "Position",
		options: ["right", "left"],
		control: {
			type: "select",
			labels: {
				left: "Left",
				right: "Right (Default)",
			},
		},
	},
	size: {
		name: "Size",
		options: ["sm", "large"],
		control: {
			type: "select",
			labels: {
				sm: "Small",
				large: "Large (default)",
			},
		},
	},
	hasContainer: {
		name: "Inside Container",
		control: {
			type: "boolean",
		},
	},
	outerClickClose: {
		name: "Outer click close",
		control: {
			type: "boolean",
		},
	},
	disableShadow: {
		name: "Disable shadow",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories
export { Drawer }
