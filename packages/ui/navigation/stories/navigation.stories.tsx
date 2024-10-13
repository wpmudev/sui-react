import React, { createRef, RefObject } from "react"

// Import required component(s)
import { Navigation as SuiNavigation, NavigationUserProps } from "../src"
import { PluginsSlug } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { Dropdown } from "@wpmudev/sui-dropdown"
import {
	Drawer,
	DrawerActions,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
} from "@wpmudev/sui-drawer"
import { MoreFromWPMUDEV } from "@wpmudev/sui-modules"

// Import documentation main page
import docs from "./navigation.mdx"

// Configure default options
export default {
	title: "SUI/Components/Modules/Navigation",
	component: SuiNavigation,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const _internalDrawer = ({
	toggleRef,
	title = "Drawer header",
	desc = "",
	...props
}: {
	toggleRef: RefObject<DrawerActions | null>
	title: string
	desc: string
	[key: string]: any
}) => {
	return (
		<Drawer ref={toggleRef} {...props}>
			<DrawerHeader title={title} />
			<DrawerBody>
				<div style={{ padding: "16px" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					rutrum sem eros, sed tempor sapien porta ac. Nullam purus metus.
				</div>
			</DrawerBody>
			<DrawerFooter>
				<div>
					<Button type="secondary" colorScheme="blue" isSmall={true}>
						Secondary
					</Button>
					<Button type="primary" colorScheme="blue" isSmall={true}>
						Primary
					</Button>
				</div>
			</DrawerFooter>
		</Drawer>
	)
}

const _internalDrawerLogo = ({
	toggleRef,
	title = "Drawer header",
	desc = "",
	...props
}: {
	toggleRef: RefObject<DrawerActions | null>
	title: string
	desc: string
	[key: string]: any
}) => {
	return (
		<Drawer ref={toggleRef} {...props}>
			<DrawerBody>
				<div style={{ padding: "16px" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					rutrum sem eros, sed tempor sapien porta ac. Nullam purus metus.
				</div>
			</DrawerBody>
			<DrawerFooter>
				<div>
					<Button type="secondary" colorScheme="blue" isSmall={true}>
						Secondary
					</Button>
					<Button type="primary" colorScheme="blue" isSmall={true}>
						Primary
					</Button>
				</div>
			</DrawerFooter>
		</Drawer>
	)
}

// Build story
export const Navigation = (props: {
	isPro: boolean
	action: boolean
	status: NavigationUserProps["status"]
	isMenuDisabled: NavigationUserProps["isMenuDisabled"]
	plugin: PluginsSlug
	title: string
	description: string
}) => {
	const ref = createRef<DrawerActions | null>()
	const refLogoDrawer = createRef<DrawerActions | null>()

	const { action, isPro, status, isMenuDisabled, plugin, title, description } =
		props

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<_internalDrawer
					toggleRef={ref}
					{...props}
					placement="left"
					title="Drawer title"
					desc="Drawer for body container, it is fixed positioned"
					hasContainer={true}
					disableShadow={true}
				/>
				<SuiNavigation
					brand={{
						plugin,
						title,
						description,
					}}
					{...(isPro && {
						user: {
							user: {
								image: "https://avatars.githubusercontent.com/u/14994452?v=4",
								name: "John doe",
								email: "john.doe@incsub.com",
							},
							status,
							isMenuDisabled,
							splitLastItem: true,
							menu: [
								{
									id: "the-hub",
									label: "The Hub",
									props: {
										icon: "PluginDefender",
									},
								},
								{
									id: "product-roadmap",
									label: "Product Roadmap",
									props: {
										icon: "PluginSmush",
									},
								},
								{
									id: "product-roadmap",
									label: "Unlock Pro features",
									props: {
										icon: "PluginSmush",
										variation: "smush",
									},
								},
								{
									id: "logout",
									label: "Logout",
									props: {
										icon: "Exit",
									},
								},
							],
						},
					})}
					{...(action &&
						isPro && {
							actions: [
								<MoreFromWPMUDEV key="More from WPMUDEV" filter={[plugin]} />,
							],
							mobileActions: [
								<Button
									key="logo"
									type="secondary"
									iconOnly={true}
									icon="Logo"
									colorScheme="black"
									onClick={() => {
										refLogoDrawer?.current?.toggle()
									}}
								>
									WPMUDEV Logo
								</Button>,
								<Button
									key="hamburger"
									type="tertiary"
									iconOnly={true}
									icon="Hamburger"
									colorScheme="black"
									onClick={() => {
										ref?.current?.toggle()
									}}
								>
									Hamburger
								</Button>,
							],
						})}
					{...(action &&
						!isPro && {
							actions: [
								<MoreFromWPMUDEV key="More from WPMUDEV" filter={[plugin]} />,
								<Button key="upgrade" type="primary" colorScheme="black">
									Upgrade to pro
								</Button>,
							],
							mobileActions: [
								<Dropdown
									key="dropdown-1"
									arrow={false}
									buttonIcon="Logo"
									label="More from WPMU DEV"
									placement="left"
									isResponsive={true}
									size="lg"
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
											type="primary"
											icon="Package"
											colorScheme="blue"
											isSmall={true}
											isFullWidth={true}
										>
											Unlock bonus features
										</Button>
									</div>
								</Dropdown>,
							],
						})}
				>
					<Button
						type="tertiary"
						icon="Question"
						iconOnly={true}
						colorScheme="black"
					>
						Help
					</Button>
					<Button
						icon="Bell"
						type="tertiary"
						colorScheme="black"
						iconOnly={true}
					>
						Documentation
					</Button>
				</SuiNavigation>
				<_internalDrawerLogo
					key="logo-drawer"
					toggleRef={refLogoDrawer}
					{...props}
					placement="left"
					title="Drawer title"
					desc="Drawer for body container, it is fixed positioned"
					hasContainer={true}
					disableShadow={true}
					_style={{
						top: "118px",
					}}
				/>
			</div>
		</div>
	)
}

Navigation.args = {
	isPro: true,
	action: true,
	isMenuDisabled: false,
	status: "confirmed",
	plugin: "smush",
	title: "Smush Pro",
	description: "Description",
}

Navigation.argTypes = {
	isPro: {
		name: "Pro",
		control: {
			type: "boolean",
		},
	},
	action: {
		name: "Action buttons",
		control: {
			type: "boolean",
		},
	},
	isMenuDisabled: {
		name: "Menu Disabled",
		control: {
			type: "boolean",
		},
	},
	status: {
		name: "User Status",
		options: ["none", "confirmed", "awaiting", "not-accepted", "not-connected"],
		control: {
			type: "select",
			labels: {
				none: "None",
				confirmed: "Confirmed",
				awaiting: "Awaiting",
				"not-accepted": "Not Accepted",
				"not-connected": "Not Connected",
			},
		},
	},
	plugin: {
		name: "Plugin",
		options: [
			"smush",
			"defender",
			"snapshot",
			"hummingbird",
			"forminator",
			"beehive",
			"hustle",
			"smartcrawl",
			"shipper",
			"branda",
			"blc",
			"thc",
			"dashboard",
		],
		control: {
			type: "select",
			labels: {
				smush: "smush",
				defendre: "defender",
				snapshot: "snapshot",
				hummigbird: "hummingbird",
				forminator: "forminator",
				beehive: "beehive",
				hustle: "hustle",
				smartcrawl: "smartcrawl",
				shipper: "shipper",
				branda: "branda",
				blc: "blc",
				thc: "thc",
			},
		},
	},
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	description: {
		name: "Description",
		control: {
			type: "text",
		},
	},
}
