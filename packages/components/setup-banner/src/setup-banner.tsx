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
	title,
	subTitle = "Quick Setup",
	bgColor,
	icon,
	iconBGColor,
	className,
	description,
}) => {
	const classNames = generateCN("sui-setup-banner", {}, className)

	// Dynamically determine the IconTag based on the provided icon prop.
	let IconTag = null
	if (!!icon) {
		IconTag = Icons?.[icon]
	}

	return (
		<div
			className={classNames}
			style={{
				background: `${bgColor ? bgColor : "#1a1a1a"}`,
			}}
		>
			{IconTag && (
				<div className="sui-setup-banner__bg">
					<IconTag className="sui-setup-banner__bg-icon" />
				</div>
			)}
			{!!subTitle && (
				<div className="sui-setup-banner__subtitle">{subTitle}</div>
			)}
			<div className="sui-setup-banner__info">
				{!!IconTag && (
					<div
						className="sui-setup-banner__info-logo"
						style={{
							backgroundColor: `${iconBGColor ? iconBGColor : "#f0f0f0"}`,
						}}
					>
						<IconTag fill="#FFFFFF" />
					</div>
				)}
				<h2 className="sui-setup-banner__info-title">{title}</h2>
			</div>
			{!!description && (
				<div className="sui-setup-banner__description">{description}</div>
			)}
		</div>
	)
}

// Publish required component.
export { SetupBanner }
