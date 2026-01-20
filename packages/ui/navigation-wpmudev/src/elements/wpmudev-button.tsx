import React, { createRef, useId } from "react"
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
import { WPMUDEVButtonProps } from "../navigation-wpmudev.types"
import { UpsellIcon } from "../icons/upsell-icon"
import {
	Drawer,
	DrawerActions,
	DrawerBody,
	DrawerHeader,
} from "@wpmudev/sui-drawer"

const MoreFromWPMUDEV: React.FC<WPMUDEVButtonProps> = ({
	id,
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
	const generatedId = useId()
	const wpmudevButtonId = id || `sui_wpmudev_button_${generatedId}`
	const drawerRef = createRef<DrawerActions | null>()

	const classNames = generateCN(
		"sui-wpmudev",
		{},
		`sui-wpmudev__dropdown sui-wpmudev__navigation--hide-mobile ${className}`,
	)

	const filteredPlugins = plugins.filter(
		(pluginItem) => !filter.includes(pluginItem.plugin),
	)

	const dropdownContent = (
		<div
			id={`${wpmudevButtonId}_content`}
			className="sui-wpmudev__dropdown-content"
		>
			{filteredPlugins && (
				<ul id={`${wpmudevButtonId}_list`} className="sui-wpmudev__list">
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
							<li
								key={pluginItem.plugin}
								id={`${wpmudevButtonId}_item_${pluginItem.plugin}`}
							>
								<a
									id={`${wpmudevButtonId}_item_${pluginItem.plugin}_link`}
									href={pluginItem.link}
									className="sui-wpmudev__list-item"
									target="_blank"
									rel="noreferrer"
									{..._renderHTMLPropsSafely(upsell.props)}
								>
									<div
										id={`${wpmudevButtonId}_item_${pluginItem.plugin}_icon`}
										className="sui-wpmudev__list-icon"
										style={{ backgroundColor: PluginIcon?.bg }}
									>
										{!!IconTag && (
											<IconTag
												id={`${wpmudevButtonId}_item_${pluginItem.plugin}_icon_svg`}
												fill={PluginIcon?.color}
											/>
										)}
									</div>
									<div
										id={`${wpmudevButtonId}_item_${pluginItem.plugin}_content`}
										className="sui-wpmudev__list-content"
									>
										<h5
											id={`${wpmudevButtonId}_item_${pluginItem.plugin}_title`}
											className="sui-wpmudev__list-title sui-heading--h5"
										>
											{pluginItem.title}
										</h5>
										<p
											id={`${wpmudevButtonId}_item_${pluginItem.plugin}_description`}
											className="sui-wpmudev__list-desc"
										>
											<small
												id={`${wpmudevButtonId}_item_${pluginItem.plugin}_description_small`}
											>
												{pluginItem.description}
											</small>
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
					id={`${wpmudevButtonId}_upsell`}
					href={upsell.link}
					className="sui-wpmudev__upsell"
					target="_blank"
					rel="noreferrer"
					{..._renderHTMLPropsSafely(upsell.props)}
				>
					<UpsellIcon />
					<div
						id={`${wpmudevButtonId}_upsell_content`}
						className="sui-wpmudev__upsell-content"
					>
						<h5
							id={`${wpmudevButtonId}_upsell_title`}
							className="sui-wpmudev__upsell-title sui-heading--h5"
						>
							{upsell.title}
							<ExternalLink
								id={`${wpmudevButtonId}_upsell_external_link`}
								size="sm"
							/>
						</h5>
						<p
							id={`${wpmudevButtonId}_upsell_description`}
							className="sui-wpmudev__upsell-desc"
						>
							{upsell.description}
						</p>
					</div>
				</a>
			)}
		</div>
	)

	const mobileDrawer = (
		<Drawer
			id={`${wpmudevButtonId}_mobile_drawer`}
			ref={drawerRef}
			placement="left"
			hasContainer={false}
			hasOverlay={false}
			disableShadow={true}
			isFullWidth={true}
		>
			<DrawerHeader
				id={`${wpmudevButtonId}_mobile_drawer_header`}
				title={label}
				back={{ show: true }}
			/>
			<DrawerBody id={`${wpmudevButtonId}_mobile_drawer_body`}>
				{dropdownContent}
			</DrawerBody>
		</Drawer>
	)

	return (
		<>
			<div id={`${wpmudevButtonId}_wrapper`} className={classNames}>
				<Dropdown
					id={wpmudevButtonId}
					label={label}
					placement="left"
					buttonIcon="Logo"
					arrow={false}
					menuCustomWidth={584}
					{..._renderHTMLPropsSafely(_htmlProps)}
					{...props}
				>
					{title && (
						<div id={`${wpmudevButtonId}_title`} className="sui-wpmudev__title">
							<h4 className="sui-heading--h4">{title}</h4>
						</div>
					)}
					{dropdownContent}
				</Dropdown>
			</div>
			<div
				id={`${wpmudevButtonId}_mobile`}
				className="sui-wpmudev__drawer sui-wpmudev__navigation--hide-desktop"
			>
				<Button
					id={`${wpmudevButtonId}_mobile_button`}
					key="logo"
					type="secondary"
					iconOnly={false}
					isResponsive={true}
					icon="Logo"
					colorScheme="black"
					onClick={() => {
						drawerRef?.current?.toggle()
					}}
				>
					{label}
				</Button>
				{mobileDrawer}
			</div>
		</>
	)
}

// Export the MoreFromWPMUDEV component
export { MoreFromWPMUDEV }
