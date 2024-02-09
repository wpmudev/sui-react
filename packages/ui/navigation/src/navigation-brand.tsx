import React from "react"

import { generateCN, PluginIconTypes, PluginsIcons } from "@wpmudev/sui-utils"
import { IconProps } from "@wpmudev/sui-icon"
import { NavigationBrandProps } from "./navigation.types"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { useStyles } from "@wpmudev/sui-hooks"

const NavigationBrand: React.FC<NavigationBrandProps> = ({
	plugin,
	title = "",
	description = "",
	...props
}) => {
	const { cssCN } = useStyles(props)
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
		<div className={generateCN("sui-navigation__brand", {}, cssCN)}>
			<div
				className="sui-navigation__icon"
				style={{ backgroundColor: PluginIcon?.bg }}
			>
				{!!IconTag && <IconTag fill={PluginIcon?.color} />}
			</div>
			<div className="sui-navigation__info">
				<h3 className="sui-heading--h4">{title}</h3>
				<span className="sui-navigation__info--desc">{description}</span>
			</div>
		</div>
	)
}

NavigationBrand.displayName = "NavigationBrand"

export { NavigationBrand }
