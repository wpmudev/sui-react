import React, { createRef } from "react"
import { Navigation, NavigationUser } from "@wpmudev/sui-navigation"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import {
	MoreFromWPMUDEV,
	HelpWPMUDEVContent,
	NotificationWPMUDEV,
	NotificationWPMUDEVContent,
	WPMUDEVDrawer,
	HamburgerWPMUDEV,
	NavActionsWPMUDEV,
	NavigationWrapper,
	UserWPMUDEV,
	HamburgerButtonWPMUDEV,
} from "../src"
import { DrawerActions } from "@wpmudev/sui-drawer"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Link } from "@wpmudev/sui-link"
import {
	NavigationBrandProps,
	NavigationUserProps,
} from "@wpmudev/sui-navigation/src/navigation.types"
import { Notifications, Resources } from "../src/navigation-wpmudev.types"

// Configure default options
export default {
	title: "SUI/Components/Modules/Navigation WPMUDEV",
	component: NavigationWrapper,
	parameters: {
		layout: "fullscreen",
		docs: {
			// page: docs,
		},
	},
}
export const NavigationStory = ({
	isPro = false,
	brand = { title: "title", description: "" },
	user,
	notifications,
	resources,
}: {
	isPro: boolean
	brand: NavigationBrandProps
	user: NavigationUserProps
	notifications: Notifications
	resources: Array<{
		link: string
		label: string
	}>
}) => {
	const ref = createRef<DrawerActions | null>()
	const drawerRef = createRef<DrawerActions | null>()
	const notificationRef = createRef<DrawerActions | null>()

	const upgradeButton = (
		<Button key="upgrade" colorScheme="black" type="primary" isFullWidth={true}>
			Upgrade to pro
		</Button>
	)

	const navActions = (
		<NavActionsWPMUDEV>
			<Tooltip
				customWidth={136}
				buttonProps={{
					type: "tertiary",
					colorScheme: "black",
					icon: "Question",
					iconOnly: true,
				}}
				onClick={() => {
					drawerRef?.current?.toggle()
				}}
			>
				Help and resources
			</Tooltip>
			<NotificationWPMUDEV notifications={notifications} />
		</NavActionsWPMUDEV>
	)

	const hamburgerMenu = (
		<HamburgerWPMUDEV>
			<Button
				startIcon="Question"
				isFullWidth={true}
				onClick={() => {
					drawerRef?.current?.toggle()
				}}
			>
				Help and resources
			</Button>

			<Button
				startIcon="Bell"
				isFullWidth={true}
				onClick={() => {
					notificationRef?.current?.toggle()
				}}
			>
				What&apos;s new
			</Button>
		</HamburgerWPMUDEV>
	)

	const drawer = (
		<>
			<WPMUDEVDrawer
				toggleRef={ref}
				placement="left"
				hasContainer={false}
				disableShadow={true}
				isFullWidth={true}
				outerClickClose={false}
				type="hamburger"
				footer={
					!isPro
						? [upgradeButton]
						: [
								<UserWPMUDEV
									key="user"
									title="Connect your site with WPMU DEV"
									description="BLC isn't connected to a WPMU DEV account. Connect to unlock Cloud engine."
									avatarProps={{
										status: "not-connected",
										icon: "Logo",
									}}
									logout={{
										show: true,
										props: {
											onClick: () => {},
										},
									}}
									action={
										<Button
											type="primary"
											colorScheme="blue"
											icon="Logo"
											isFullWidth={true}
										>
											Connect site
										</Button>
									}
								/>,
						  ]
				}
			>
				{hamburgerMenu}
			</WPMUDEVDrawer>
			<WPMUDEVDrawer
				title="Help and resources"
				toggleRef={drawerRef}
				placement="right"
				hasContainer={false}
				hasOverlay={false}
				type="helper"
				back={{
					show: true,
					mobileOnly: true,
				}}
				outerClickClose={false}
			>
				<HelpWPMUDEVContent content={resources} />
			</WPMUDEVDrawer>
			<WPMUDEVDrawer
				title="What’s new on Smush?"
				toggleRef={notificationRef}
				placement="left"
				hasContainer={false}
				hasOverlay={false}
				disableShadow={true}
				isFullWidth={true}
				outerClickClose={false}
				back={{
					show: true,
					mobileOnly: true,
				}}
				footer={[
					<Link key="read" href="#">
						Mark all as read
					</Link>,
				]}
			>
				<NotificationWPMUDEVContent notifications={notifications} />
			</WPMUDEVDrawer>
		</>
	)

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<NavigationWrapper>
					{drawer}
					<Navigation
						brand={brand}
						{...(isPro && {
							user,
						})}
						actions={[
							<MoreFromWPMUDEV key="More from WPMUDEV" />,
							!isPro && (
								<Button key="upgrade" colorScheme="black" type="primary">
									Upgrade to pro
								</Button>
							),
							<UserWPMUDEV
								key="user"
								userProps={{
									user: { icon: "Logo" },
									status: "not-connected",
									dropdownProps: {
										menuCustomWidth: 360,
									},
								}}
								title="Connect your site with WPMU DEV"
								description="BLC isn't connected to a WPMU DEV account. Connect to unlock Cloud engine."
								action={
									<Button
										type="primary"
										colorScheme="blue"
										icon="Logo"
										isFullWidth={true}
									>
										Connect site
									</Button>
								}
							/>,
							<HamburgerButtonWPMUDEV
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
							</HamburgerButtonWPMUDEV>,
						]}
					>
						{navActions}
					</Navigation>
				</NavigationWrapper>
			</div>
		</div>
	)
}

NavigationStory.args = {
	isPro: false,
	connected: true,
	brand: {
		plugin: "smush",
		title: "Smush Plugin",
		description: "This is a description.",
	},
	user: {
		user: {
			image: "https://avatars.githubusercontent.com/u/14994452?v=4",
			name: "John doe",
			email: "john.doe@incsub.com",
		},
		status: "confirmed",
		isMenuDisabled: false,
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
	notifications: [
		{
			version: "1.4",
			time: "2 hours ago",
			title:
				"This is the main title of this version release. Make it short make it stand out",
			actions: [
				<Button
					key="detail"
					isSmall={true}
					type="secondary"
					colorScheme="black"
				>
					View detail
				</Button>,
				<Button
					key="feedback"
					isSmall={true}
					type="secondary"
					colorScheme="black"
				>
					Leave feedback
				</Button>,
			],
		},
		{
			version: "1.4",
			time: "2 hours ago",
			title:
				"This is the main title of this version release. Make it short make it stand out",
			actions: [
				<Button
					key="detail-1"
					isSmall={true}
					type="secondary"
					colorScheme="black"
				>
					View detail
				</Button>,
			],
		},
	],
	resources: [
		{
			label:
				"Instantly Turn Keywords Into SEO Links: This SmartCrawl Tool Automates It For You",
			link: "https://wpmudev.com",
		},
		{
			label: "New schema markup for SmartCrawl: Recipe, job posting & more!",
			link: "https://wpmudev.com",
		},
		{
			label:
				"Target website visitors more effectively with SmartCrawl’s location-based redirects",
			link: "https://wpmudev.com",
		},
	],
}
