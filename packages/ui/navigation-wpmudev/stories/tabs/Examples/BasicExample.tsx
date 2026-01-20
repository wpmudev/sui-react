import React, { useRef } from "react"
import { Navigation } from "@wpmudev/sui-navigation"
import { _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
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
} from "../../../src"
import { DrawerActions } from "@wpmudev/sui-drawer"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Link } from "@wpmudev/sui-link"
import ChatAvatar from "../../images/chat-avatar.png"
import dedent from "dedent"

export const generalCode = dedent`
export const BasicExample = ({
	isPro = false,
	connected = false,
}: {
	isPro: boolean
	connected: boolean
}) => {
	const ref = useRef<DrawerActions | null>(null)
	const drawerRef = useRef<DrawerActions | null>(null)
	const notificationRef = useRef<DrawerActions | null>(null)

	return (
		<NavigationWrapper>
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
						? [
								<Button
									key="upgrade"
									colorScheme="black"
									type="primary"
									isFullWidth={true}
								>
									Upgrade to pro
								</Button>,
						  ]
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
				<HelpWPMUDEVContent
					title="Tutorials"
					titleLink={{
						href: "https://google.com",
						isExternal: true,
						hasExternalIcon: true,
						children: "View all",
					}}
					content={[
						{
							label:
								"Instantly Turn Keywords Into SEO Links: This SmartCrawl Tool Automates It For You",
							link: "https://wpmudev.com",
						},
						{
							label:
								"New schema markup for SmartCrawl: Recipe, job posting & more!",
							link: "https://wpmudev.com",
						},
						{
							label:
								"Target website visitors more effectively with SmartCrawl’s location-based redirects",
							link: "https://wpmudev.com",
						},
					]}
					isPro={isPro}
					support={{
						icon: "contact",
						title: "Contact support",
						description: "Get expert and in-depth help from WPMU DEV staff.",
						image: ChatAvatar,
						message: "Reply usual time 2 mins",
					}}
				/>
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
				<NotificationWPMUDEVContent
					notifications={[
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
					]}
				/>
			</WPMUDEVDrawer>
			<Navigation
				brand={{
					plugin: "smush",
					title: "Smush Plugin",
					description: "This is a description.",
				}}
				{...(connected && {
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
				})}
				actions={[
					<MoreFromWPMUDEV key="More from WPMUDEV" />,
					!isPro && (
						<Button key="upgrade" colorScheme="black" type="primary">
							Upgrade to pro
						</Button>
					),
					!connected && (
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
						/>
					),
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
					<NotificationWPMUDEV
						notifications={[
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
						]}
					/>
				</NavActionsWPMUDEV>
			</Navigation>
		</NavigationWrapper>
	)
}
`

export const BasicExample = ({
	isPro = false,
	connected = false,
}: {
	isPro: boolean
	connected: boolean
}) => {
	const ref = useRef<DrawerActions | null>(null)
	const drawerRef = useRef<DrawerActions | null>(null)
	const notificationRef = useRef<DrawerActions | null>(null)

	return (
		<NavigationWrapper>
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
						? [
								<Button
									key="upgrade"
									colorScheme="black"
									type="primary"
									isFullWidth={true}
								>
									Upgrade to pro
								</Button>,
						  ]
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
				<HelpWPMUDEVContent
					title="Tutorials"
					titleLink={{
						href: "https://google.com",
						isExternal: true,
						hasExternalIcon: true,
						children: "View all",
					}}
					content={[
						{
							label:
								"Instantly Turn Keywords Into SEO Links: This SmartCrawl Tool Automates It For You",
							link: "https://wpmudev.com",
						},
						{
							label:
								"New schema markup for SmartCrawl: Recipe, job posting & more!",
							link: "https://wpmudev.com",
						},
						{
							label:
								"Target website visitors more effectively with SmartCrawl’s location-based redirects",
							link: "https://wpmudev.com",
						},
					]}
					isPro={isPro}
					support={{
						icon: "contact",
						title: "Contact support",
						description: "Get expert and in-depth help from WPMU DEV staff.",
						image: ChatAvatar,
						message: "Reply usual time 2 mins",
					}}
				/>
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
				<NotificationWPMUDEVContent
					notifications={[
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
					]}
				/>
			</WPMUDEVDrawer>
			<Navigation
				brand={{
					plugin: "smush",
					title: "Smush Plugin",
					description: "This is a description.",
				}}
				{...(connected && {
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
				})}
				actions={[
					<MoreFromWPMUDEV key="More from WPMUDEV" />,
					!isPro && (
						<Button key="upgrade" colorScheme="black" type="primary">
							Upgrade to pro
						</Button>
					),
					!connected && (
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
						/>
					),
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
					<NotificationWPMUDEV
						notifications={[
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
						]}
					/>
				</NavActionsWPMUDEV>
			</Navigation>
		</NavigationWrapper>
	)
}
