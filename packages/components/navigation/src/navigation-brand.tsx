import React from "react"

import { PluginIconTypes, PluginsIcons } from "@wpmudev/sui-utils"
import * as Icons from "@wpmudev/sui-icons"

import { NavigationBrandProps } from "./navigation.types"

const NavigationBrand: React.FC<NavigationBrandProps> = ({
	plugin = "smush",
	title = "",
	description = "",
}) => {
	const PluginIcon: PluginIconTypes = PluginsIcons?.[plugin] ?? "Plugin"

	// Dynamically determine the IconTag based on the provided icon prop.
	let IconTag = null
	if (!!PluginIcon) {
		IconTag = Icons?.[PluginIcon?.icon ?? ""]
	}

	return (
		<div className="sui-navigation__brand">
			<div
				className="sui-navigation__brand-icon"
				style={{ backgroundColor: PluginIcon.bg }}
			>
				<IconTag fill={PluginIcon.color} />
			</div>
			<div className="sui-navigation__brand-info">
				<h3 className="sui-heading--h4">{title}</h3>
				<span className="">{description}</span>
			</div>
		</div>
	)
}

NavigationBrand.displayName = "NavigationBrand"

export { NavigationBrand }
