import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"

import { AdvancedBannerProps } from "./advanced-banner.types"

// Build "advanced-banner" component
const AdvancedBanner: React.FC<AdvancedBannerProps> = ({
	className,
	variation = "",
	imageUrl = "",
	title = "",
	description = "",
	children = null,
	helper = null,
	discountPercentage = "",
	allowClose = true,
	onClose = () => {},
	// black friday variation props
	ctaTitle = "",
	onCTAClick = () => {},
}) => {
	// Define class name
	const classNames = generateCN(
		"sui-advanced-banner",
		{
			[variation]: !isEmpty(variation),
		},
		className,
	)

	let closeBtnColor = "black"

	// Display white button for following variations
	if (["black-friday", "hub"].includes(variation)) {
		closeBtnColor = "white"
	}

	return (
		<div className={classNames}>
			{"black-friday" === variation && !!discountPercentage && (
				<div className="sui-advanced-banner__graphic">
					<div className="sui-advanced-banner__graphic-text">
						<span>{discountPercentage}%</span>
						<span>OFF</span>
					</div>
				</div>
			)}
			{"black-friday" !== variation && !isEmpty(imageUrl) && (
				<div className="sui-advanced-banner__graphic">
					<img src={imageUrl} alt="Banner logo" />
				</div>
			)}
			<div className="sui-advanced-banner__info">
				{!isEmpty(title ?? "") && (
					<div className="sui-advanced-banner__info-title">{title}</div>
				)}
				{!isEmpty(description ?? "") && (
					<div className="sui-advanced-banner__info-desc">{description}</div>
				)}
				{!!children && (
					<div className="sui-advanced-banner__info-actions">{children}</div>
				)}
				{!!helper && (
					<div className="sui-advanced-banner__info-helper">{helper}</div>
				)}
			</div>
			{"black-friday" === variation && !!ctaTitle && (
				<div className="sui-advanced-banner__cta">
					<Button
						className="sui-advanced-banner__cta-btn sui-advanced-banner__cta-btn--bf"
						isSmall={true}
						onClick={onCTAClick}
					>
						{ctaTitle}
					</Button>
				</div>
			)}
			{allowClose && (
				<div className="sui-advanced-banner__close">
					<Button
						icon="close"
						appearance="tertiary"
						isSmall={true}
						iconOnly={true}
						color={closeBtnColor}
						onClick={onClose}
					/>
				</div>
			)}
		</div>
	)
}

// Publish required component.
export { AdvancedBanner }
