import React, { useId } from "react"

import {
	_renderHTMLPropsSafely,
	generateCN,
	PluginIconTypes,
	PluginsIcons,
} from "@wpmudev/sui-utils"
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
 * @param  root0._style
 * @param  root0._htmlProps
 * @return {JSX.Element} - The rendered SetupBanner component.
 */
const SetupBanner: React.FC<SetupBannerProps> = ({
	id,
	type = "smush",
	title = "title",
	className,
	description,
	_htmlProps = {},
	_style = {},
}: SetupBannerProps): JSX.Element => {
	const generatedId = useId()
	const setupBannerId = id || `sui_setup_banner_${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)

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
		<div
			id={setupBannerId}
			className={classNames}
			data-testid="setup-banner"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
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
