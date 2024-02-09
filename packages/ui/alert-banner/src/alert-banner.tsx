import React, { useState, useCallback } from "react"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button, ButtonProps } from "@wpmudev/sui-button"
import Icons from "@wpmudev/sui-icons"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

import { AlertBannerProps } from "./alert-banner.types"

const AlertBanner: React.FC<AlertBannerProps> = ({
	children,
	variation = "informative",
	actions,
	displayIcon = true,
	isCenter = false,
	isDismissible = true,
	onDismiss = () => {},
	...styleProps
}) => {
	// State to control the visibility of the alert banner
	const [isVisible, setIsVisible] = useState(true)

	// default children content
	children = useDefaultChildren(children)
	const { cssCN } = useStyles(styleProps)

	/**
	 * Callback function to hide the alert banner when clicking on the dismiss button.
	 */
	const onClose = useCallback(() => {
		setIsVisible(false)
		if (!!onDismiss) {
			onDismiss()
		}
	}, [onDismiss])

	// Do not render if isVisible is false
	if (!isVisible) return null

	// Generate classnames for the alert banner
	const classNames = generateCN(
		"sui-alert-banner",
		{
			[variation as string]: !isEmpty(variation ?? ""),
		},
		cssCN,
	)

	// Set Icon & iconColor based on "variation" value
	let Icon

	let iconColor: "" | "informative" | "success" | "warning" | "critical"

	switch (variation) {
		case "success":
			Icon = Icons.CheckAlt
			iconColor = "success"
			break
		case "informative":
			Icon = Icons.InfoAlt
			iconColor = "informative"
			break
		case "warning":
			Icon = Icons.InfoAlt
			iconColor = "warning"
			break
		case "critical":
			Icon = Icons.InfoAlt
			iconColor = "critical"
			break
		default:
			Icon = null
			iconColor = ""
			break
	}

	// Set the dismiss button color and center flag based on variation
	let dismissBtnColor: ButtonProps["color"] = "black"
	if (["hub-upsell", "plugin-upsell"].includes(variation ?? "")) {
		dismissBtnColor = "white"
		isCenter = true
	}

	return (
		<div className={classNames} data-testid="alert-banner">
			<div
				className={generateCN("sui-alert-banner__body", { center: isCenter })}
			>
				<div className="sui-alert-banner__body-content">
					{/* Render the Icon if available and displayIcon is true */}
					{Icon && !!displayIcon && (
						<div
							className="sui-alert-banner__icon"
							data-testid="alert-banner-icon"
						>
							<Icon color={iconColor} />
						</div>
					)}
					{children}
				</div>
				{/* Render actions if provided */}
				{actions && (
					<div className="sui-alert-banner__body-actions">{actions}</div>
				)}
			</div>
			{/* Render the dismiss button if isDismissible is true */}
			{isDismissible && (
				<div
					className="sui-alart-banner__close"
					data-testid="alert-banner-close"
				>
					<Button
						icon="Close"
						appearance="tertiary"
						color={dismissBtnColor}
						isSmall={true}
						iconOnly={true}
						onClick={onClose}
						aria-label="close"
					/>
				</div>
			)}
		</div>
	)
}

AlertBanner.displayName = "AlertBanner"

export { AlertBanner }
