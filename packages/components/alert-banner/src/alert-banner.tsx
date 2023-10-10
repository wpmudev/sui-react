import React, { useState, useCallback  } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import * as Icons from "@wpmudev/sui-icons" 

import { AlertBannerProps  } from "./alert-banner.types"  

const  AlertBanner: React.FC< AlertBannerProps  > = 
	({
	children, 
	variation = "informative", 
	actions = null, 
	displayIcon = true,
	isCenter = false, 
	isDismissible = true,
	onDismiss = ( ) => { },
}) => {
	// State to control the visibility of the alert banner
	const [ isVisible, setIsVisible ] = useState<string>( true  )

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
	const classNames = generateCN("sui-alert-banner", {
		[variation as string]: !isEmpty(variation ?? ""),
	})

	// Define a mapping of icons based on variation
	const iconsList: Record<string, any > = {
		success: "CheckAlt",
		informative: "InfoAlt",
		warning: "InfoAlt",
		critical: "InfoAlt",
	}

	// Get the appropriate SVG Icon based on variation
	// eslint-disable-next-line import/namespace
	// @ts-ignore
	const Icon = Icons[iconsList?.[variation]]

	// Set the dismiss button color and center flag based on variation
	let dismissBtnColor = "black"
	if (["hub-upsell", "plugin-upsell"].includes(variation ?? "")) {
		dismissBtnColor = "white"
		isCenter = true
	}

	return (
		<div className={classNames} data-testid="alert-banner">
			{/* Render the Icon if available and displayIcon is true */}
			{Icon && !!displayIcon && (
				<div className="sui-alert-banner__icon" data-testid="alert-banner-icon">
					<Icon color={variation} />
				</div>
			)}
			<div
				className={generateCN("sui-alert-banner__body", { center: isCenter })}
			>
				<div className="sui-alert-banner__body-content">{children}</div>
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
						icon="close"
						appearance="tertiary"
						color={dismissBtnColor}
						isSmall={true}
						iconOnly={true}
						onClick={onClose}
					/>
				</div>
			)}
		</div>
	)
}

AlertBanner.displayName = "AlertBanner"

export { AlertBanner }
