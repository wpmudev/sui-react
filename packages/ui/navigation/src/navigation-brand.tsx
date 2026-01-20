import React, { useId } from "react"

import {
	_renderHTMLPropsSafely,
	generateCN,
	PluginIconTypes,
	PluginsIcons,
} from "@wpmudev/sui-utils"
import { IconProps } from "@wpmudev/sui-icon"
import { NavigationBrandProps } from "./navigation.types"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { useStyles } from "@wpmudev/sui-hooks"

const NavigationBrand: React.FC<NavigationBrandProps> = ({
	id,
	plugin,
	title = "",
	description = "",
	showTitleInMobile,
	showDescriptionInMobile,
	className,
	_style,
	_htmlProps = {},
}) => {
	const generatedId = useId()
	const brandId = id || `sui-navigation-brand-${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)

	// Icon for the specified plugin or use a default "Plugin" icon.
	const PluginIcon: PluginIconTypes = plugin
		? PluginsIcons?.[plugin]
		: { icon: "Plugin" }

	// Dynamically determine the IconTag based on the provided icon prop.
	let IconTag: React.ComponentType<IconProps> | null = null
	if (!!PluginIcon) {
		IconTag = Icons?.[PluginIcon.icon as IconsNamesType]
	}

	return (
		<div
			id={brandId}
			className={generateCN("sui-navigation__brand", {}, suiInlineClassname)}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div
				id={`${brandId}-icon`}
				className="sui-navigation__icon"
				style={{ backgroundColor: PluginIcon?.bg }}
			>
				{!!IconTag && <IconTag fill={PluginIcon?.color} />}
			</div>
			<div
				id={`${brandId}-info`}
				className={generateCN("sui-navigation__info", {
					"show-title-in-mobile": showTitleInMobile,
					"show-description-in-mobile": showDescriptionInMobile,
				})}
			>
				<h3 id={`${brandId}-title`} className="sui-heading--h4">
					{title}
				</h3>
				<span
					id={`${brandId}-description`}
					className="sui-navigation__info--desc"
				>
					{description}
				</span>
			</div>
		</div>
	)
}

NavigationBrand.displayName = "NavigationBrand"

export { NavigationBrand }
