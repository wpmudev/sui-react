import React, { Children, createRef, RefObject } from "react"
import { Navigation } from "@wpmudev/sui-navigation"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"
import { Button } from "@wpmudev/sui-button"
import { MoreFromWPMUDEV } from "./elements/wpmudev-button"
import { HelpWPMUDEVContent } from "./elements/wpmudev-help"
import {
	NotificationWPMUDEV,
	NotificationWPMUDEVContent,
} from "./elements/wpmudev-notifications"
import {
	Drawer,
	DrawerActions,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
} from "@wpmudev/sui-drawer"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { WPMUDEVDrawer } from "./elements/wpmudev-drawer"
import { Link } from "@wpmudev/sui-link"

// Navigation component
const NavigationWPMUDEV: React.FC<NavigationProps> = ({
	_htmlProps,
	_style,
}) => {
	const ref = createRef<DrawerActions | null>()
	const drawerRef = createRef<DrawerActions | null>()
	const notificationRef = createRef<DrawerActions | null>()

	const { suiInlineClassname } = useStyles(_style)
	// Generate CSS class names for the navigation component
	const classNames = generateCN(
		"sui-wpmudev__navigation",
		{},
		suiInlineClassname,
	)

	const navActions = (
		<div className="sui-wpmudev__navigation--actions sui-wpmudev__navigation--hide-mobile">
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
								key="detail"
								isSmall={true}
								type="secondary"
								colorScheme="black"
							>
								View detail
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
								key="detail"
								isSmall={true}
								type="secondary"
								colorScheme="black"
							>
								View detail
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
								key="detail"
								isSmall={true}
								type="secondary"
								colorScheme="black"
							>
								View detail
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
								key="detail"
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
		</div>
	)

	const hamburgerMenu = (
		<ul className="sui-wpmudev__hamburger-menu">
			<li>
				<Button
					startIcon="Question"
					isFullWidth={true}
					onClick={() => {
						drawerRef?.current?.toggle()
					}}
				>
					Help and resources
				</Button>
			</li>
			<li>
				<Button
					startIcon="Bell"
					isFullWidth={true}
					onClick={() => {
						notificationRef?.current?.toggle()
					}}
				>
					What&apos;s new
				</Button>
			</li>
		</ul>
	)

	const drawer = (
		<>
			<WPMUDEVDrawer
				toggleRef={ref}
				placement="left"
				hasContainer={false}
				disableShadow={true}
				isFullWidth={true}
				title=""
				className="sui-wpmudev__hamburger-drawer sui-wpmudev__navigation--hide-desktop"
				footer={[
					<Button
						key="upgrade"
						colorScheme="black"
						type="primary"
						isFullWidth={true}
					>
						Upgrade to pro
					</Button>,
				]}
			>
				{hamburgerMenu}
			</WPMUDEVDrawer>
			<WPMUDEVDrawer
				title="Help and resources"
				toggleRef={drawerRef}
				placement="right"
				hasContainer={false}
				hasOverlay={false}
				className={generateCN("sui-wpmudev__help", {}, "")}
				back={{
					show: true,
					mobileOnly: true,
					action: () => {
						drawerRef?.current?.hide()
						ref?.current?.open()
					},
				}}
			>
				<HelpWPMUDEVContent
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
				back={{
					show: true,
					mobileOnly: true,
					action: () => {
						notificationRef?.current?.hide()
						ref?.current?.open()
					},
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
									key="detail"
									isSmall={true}
									type="secondary"
									colorScheme="black"
								>
									View detail
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
									key="detail"
									isSmall={true}
									type="secondary"
									colorScheme="black"
								>
									View detail
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
									key="detail"
									isSmall={true}
									type="secondary"
									colorScheme="black"
								>
									View detail
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
									key="detail"
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
		</>
	)

	return (
		<div className={classNames}>
			{drawer}
			<Navigation
				brand={{
					plugin: "smush",
					title: "Smush Plugin",
					description: "This is a description.",
				}}
				user={{
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
				}}
				actions={[
					<MoreFromWPMUDEV key="More from WPMUDEV" />,
					<Button
						key="hamburger"
						type="tertiary"
						iconOnly={true}
						icon="Hamburger"
						colorScheme="black"
						onClick={() => {
							ref?.current?.toggle()
						}}
						className="sui-wpmudev__navigation--hide-desktop"
					>
						Hamburger
					</Button>,
				]}
			>
				{navActions}
			</Navigation>
		</div>
	)
}

// Export the NavigationWPMUDEV component
export { NavigationWPMUDEV }
