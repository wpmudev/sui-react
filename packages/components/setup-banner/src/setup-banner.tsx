import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import * as Icons from "@wpmudev/sui-icons"

import { SetupBannerProps } from "./setup-banner.types"

/**
 * SetupBanner renders a banner with optional icon and description.
 *
 * @param {SetupBannerProps} props - The props for the SetupBanner component.
 * @return {JSX.Element} - The rendered SetupBanner component.
 */
const SetupBanner: React.FC<SetupBannerProps> = ({
	type = "smush",
	title,
	className,
	description,
}) => {
	const classNames = generateCN(
		"sui-setup-banner",
		{
			[type]: true,
		},
		className,
	)
	let icon = "PluginSmush"

	// set data value based on plugin name
	switch (type) {
		case "defender":
			icon = "PluginDefender"
			break

		case "snapshot":
			icon = "PluginSnapshot"
			break

		case "hummingbird":
			icon = "PluginHummingbird"
			break

		case "forminator":
			icon = "PluginForminator"
			break

		case "beehive":
			icon = "PluginBeehive"
			break

		case "hustle":
			icon = "PluginHustle"
			break

		case "smartcrawl":
			icon = "PluginSmartCrawl"
			break

		case "shipper":
			icon = "PluginShipper"
			break

		case "branda":
			icon = "PluginBranda"
			break

		default:
			icon = "PluginSmush"
	}

	// Dynamically determine the IconTag based on the provided icon prop.
	let IconTag = null
	if (!!icon) {
		IconTag = Icons?.[icon]
	}

	return (
		<div className={classNames}>
			{IconTag && (
				<div className="sui-setup-banner__bg">
					<IconTag className="sui-setup-banner__bg-icon" />
				</div>
			)}
			<div className="sui-setup-banner__subtitle">Quick Setup</div>
			<div className="sui-setup-banner__info">
				{!!IconTag && (
					<div className="sui-setup-banner__info-logo">
						<IconTag fill="#FFFFFF" />
					</div>
				)}
				{!!title && <h2 className="sui-setup-banner__info-title">{title}</h2>}
			</div>
			{!!description && (
				<div className="sui-setup-banner__description">{description}</div>
			)}
		</div>
	)
}

// Publish required component.
export { SetupBanner }
