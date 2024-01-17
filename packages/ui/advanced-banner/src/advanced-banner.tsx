import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button, ButtonProps } from "@wpmudev/sui-button"
import { AdvancedBannerProps } from "./advanced-banner.types"

// Build "advanced-banner" component
const AdvancedBanner: React.FC<AdvancedBannerProps> = ({
	variation = "plugin",
	imageUrl = "https://placehold.co/100",
	title = "Banner Title",
	description = "Banner Description",
	children,
	helper,
	discountPercentage = 50,
	allowClose = true,
	onClose = () => {},
	className,
	// Black friday variation props
	ctaTitle = "cta title",
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

	let closeBtnColor: ButtonProps["color"] = "black"

	// Display white button for following variations
	if (["black-friday", "hub"].includes(variation)) {
		closeBtnColor = "white"
	}

	return (
		<div className={classNames} data-testid="advanced-banner">
			{"black-friday" === variation && !!discountPercentage && (
				<div className="sui-advanced-banner__graphic">
					<div className="sui-heading--h3 sui-advanced-banner__graphic-text">
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
				{!!title && (
					<div
						className="sui-heading--h3 sui-advanced-banner__info-title"
						data-testid="advanced-banner-title"
					>
						{title}
					</div>
				)}
				{!!description && (
					<div
						className="sui-advanced-banner__info-desc"
						data-testid="advanced-banner-desc"
					>
						{description}
					</div>
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
						onClick={onCTAClick}
					>
						{ctaTitle}
					</Button>
				</div>
			)}
			{allowClose && (
				<div
					className="sui-advanced-banner__close"
					data-testid="advanced-banner-close"
				>
					<Button
						icon="Close"
						appearance="tertiary"
						isSmall={true}
						iconOnly={true}
						color={closeBtnColor}
						onClick={onClose}
						aria-label="close"
					/>
				</div>
			)}
		</div>
	)
}

// Publish required component.
export { AdvancedBanner }
