import React from "react"

import { generateCN, PluginIconTypes, PluginsIcons } from "@wpmudev/sui-utils"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"

import { SetupBannerProps } from "./setup-banner.types"
import { useStyles } from "@wpmudev/sui-hooks"

/**
 * SetupBanner renders a banner with optional icon and description.
 *
 * @param  root0
 * @param  root0.type
 * @param  root0.title
 * @param  root0.className
 * @param  root0.description
 * @return {JSX.Element} - The rendered SetupBanner component.
 */
const SetupBanner: React.FC<SetupBannerProps> = ({
	type = "smush",
	title = "title",
	className,
	description,
	...props
}: SetupBannerProps): JSX.Element => {
	const { suiInlineClassname } = useStyles(props, className)

	const classNames = generateCN(
		"sui-setup-banner",
		{
			[type]: true,
		},
		suiInlineClassname,
	)

	const Plugin: PluginIconTypes = PluginsIcons?.[type] ?? "Plugin"

	// Dynamically determine the IconTag based on the provided icon prop.
	let IconTag = null
	if (!!Plugin?.icon) {
		IconTag = Icons[Plugin?.icon as IconsNamesType]
	}

	return (
		<div className={classNames} data-testid="setup-banner">
			{IconTag && (
				<div className="sui-setup-banner__bg" data-testid="setup-banner-bg">
					<IconTag className="sui-setup-banner__bg-icon" />
				</div>
			)}
			<div className="sui-setup-banner__subtitle">Quick Setup</div>
			<div className="sui-setup-banner__info">
				{!!IconTag && (
					<div
						className="sui-setup-banner__info-logo"
						data-testid="setup-banner-icon"
					>
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
