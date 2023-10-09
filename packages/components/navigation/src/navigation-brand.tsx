import React from "react"

import { isEmpty, PluginIconTypes, PluginsIcons } from "@wpmudev/sui-utils"
import * as Icons from "@wpmudev/sui-icons"

import { NavigationBrandProps } from "./navigation.types"

const NavigationBrand: React.FC<NavigationBrandProps> = ({
	plugin = "",
	title = "",
	description = "",
}) => {
	// Icon for the specified plugin or use a default "Plugin" icon.
	const PluginIcon: PluginIconTypes = !isEmpty(plugin)
		? // @ts-ignore
		  PluginsIcons?.[plugin]
		: { icon: "Plugin" }

	// Dynamically determine the IconTag based on the provided icon prop.
	let IconTag = null
	if (!!PluginIcon) {
		// @ts-ignore
		IconTag = Icons?.[PluginIcon?.icon ?? ""]
	}

	return (
		<div className="sui-navigation__brand">
			<div
				className="sui-navigation__icon"
				style={{ backgroundColor: PluginIcon?.bg }}
			>
				<IconTag fill={PluginIcon?.color} />
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
