import React, { createRef } from "react"
import { Dropdown } from "@wpmudev/sui-dropdown"
import { Button } from "@wpmudev/sui-button"
import {
	_renderHTMLPropsSafely,
	generateCN,
	PluginIconTypes,
	PluginsIcons,
} from "@wpmudev/sui-utils"
import { IconProps } from "@wpmudev/sui-icon"
import Icons, { IconsNamesType, ExternalLink } from "@wpmudev/sui-icons"
import { WPMUDEVProps } from "./types"
import { UpsellIcon } from "./upsell-icon"
import {
	Drawer,
	DrawerActions,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
} from "@wpmudev/sui-drawer"

const MoreFromWPMUDEV: React.FC<WPMUDEVProps> = ({
	label = "More from WPMU DEV",
	title = "More free plugins from WPMU DEV",
	className = "",
	plugins = [
		{
			plugin: "smush",
			title: "Smush",
			description: "Best image optimization",
			link: "https://www.wpmudev.com",
			props: {},
		},
		{
			plugin: "forminator",
			title: "Forminator",
			description: "Best form builder plugin",
			link: "https://www.wpmudev.com",
			props: {},
		},
		{
			plugin: "defender",
			title: "Defender",
			description: "Best security plugin",
			link: "https://www.wpmudev.com",
			props: {},
		},
		{
			plugin: "hustle",
			title: "Hustle",
			description: "Best newsletter plugin",
			link: "https://www.wpmudev.com",
			props: {},
		},
		{
			plugin: "hummingbird",
			title: "Hummingbird",
			description: "Best security plugin",
			link: "https://www.wpmudev.com",
			props: {},
		},
		{
			plugin: "branda",
			title: "Branda",
			description: "No-code white label plugin",
			link: "https://www.wpmudev.com",
			props: {},
		},
		{
			plugin: "beehive",
			title: "Beehive",
			description: "Google Analytic dashboards",
			link: "https://www.wpmudev.com",
			props: {},
		},
		{
			plugin: "snapshot",
			title: "Snapshot",
			description: "WordPress backup plugin",
			link: "https://www.wpmudev.com",
			props: {},
		},
		{
			plugin: "blc",
			title: "Broken Link Checker",
			description: "Scan broken links",
			link: "https://www.wpmudev.com",
			props: {},
		},
	],
	upsell = {
		title: "Everything you need for WordPress",
		description:
			"Get all 12 WPMU DEV premium plugins and more starting from just $3/month.",
		link: "https://www.wpmudev.com",
		props: {},
	},
	filter = [],
	_htmlProps = {},
	_style = {},
	...props
}) => {
	const drawerRef = createRef<DrawerActions | null>()

	const classNames = generateCN("sui-wpmudev", {}, className)

	const filteredPlugins = plugins.filter(
		(pluginItem) => !filter.includes(pluginItem.plugin),
	)

	const dropdownContent = (
		<>
			{filteredPlugins && (
				<ul className="sui-wpmudev__list">
					{filteredPlugins.map((pluginItem) => {
						// Icon for the specified plugin or use a default "Plugin" icon.
						const PluginIcon: PluginIconTypes = pluginItem.plugin
							? PluginsIcons?.[pluginItem.plugin]
							: { icon: "Plugin" }

						// Dynamically determine the IconTag based on the provided icon prop.
						let IconTag: React.ComponentType<IconProps> | null = null
						if (!!PluginIcon) {
							IconTag = Icons?.[PluginIcon.icon as IconsNamesType]
						}
						return (
							<li key={pluginItem.plugin}>
								<a
									href={pluginItem.link}
									className="sui-wpmudev__list-item"
									target="_blank"
									rel="noreferrer"
									{..._renderHTMLPropsSafely(upsell.props)}
								>
									<div
										className="sui-wpmudev__list-icon"
										style={{ backgroundColor: PluginIcon?.bg }}
									>
										{!!IconTag && <IconTag fill={PluginIcon?.color} />}
									</div>
									<div className="sui-wpmudev__list-content">
										<h5 className="sui-wpmudev__list-title sui-heading--h5">
											{pluginItem.title}
										</h5>
										<p className="sui-wpmudev__list-desc">
											<small>{pluginItem.description}</small>
										</p>
									</div>
								</a>
							</li>
						)
					})}
				</ul>
			)}
			{upsell && (
				<a
					href={upsell.link}
					className="sui-wpmudev__upsell"
					target="_blank"
					rel="noreferrer"
					{..._renderHTMLPropsSafely(upsell.props)}
				>
					<UpsellIcon />
					<div className="sui-wpmudev__upsell-content">
						<h5 className="sui-wpmudev__upsell-title sui-heading--h5">
							{upsell.title}
							<ExternalLink size="sm" />
						</h5>
						<p className="sui-wpmudev__upsell-desc">{upsell.description}</p>
					</div>
				</a>
			)}
		</>
	)

	const mobileDrawer = (
		<Drawer
			ref={drawerRef}
			placement="left"
			hasContainer={false}
			disableShadow={true}
		>
			<DrawerHeader title={label} hasBack={true} />
			<DrawerBody>{dropdownContent}</DrawerBody>
		</Drawer>
	)

	return (
		<>
			<Dropdown
				label={label}
				placement="left"
				buttonIcon="Logo"
				isResponsive={true}
				arrow={false}
				menuCustomWidth={584}
				className={classNames}
				{..._renderHTMLPropsSafely(_htmlProps)}
				{...props}
			>
				{title && (
					<div className="sui-wpmudev__title">
						<h4 className="sui-heading--h4">{title}</h4>
					</div>
				)}
				{dropdownContent}
			</Dropdown>
			<Button
				key="logo"
				type="secondary"
				iconOnly={true}
				icon="Logo"
				colorScheme="black"
				onClick={() => {
					drawerRef?.current?.toggle()
				}}
			>
				{label}
			</Button>
			{mobileDrawer}
		</>
	)
}

// Export the MoreFromWPMUDEV component
export { MoreFromWPMUDEV }
