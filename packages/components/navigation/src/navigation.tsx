import React, { useState, useCallback } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import * as Icons from "@wpmudev/sui-icons"

import { NavigationProps } from "./navigation.types"

const Navigation: React.FC<NavigationProps> = ({
	children,
	variation,
	actions = null,
	displayIcon = true,
	isCenter = false,
	isDismissible = true,
	onDismiss = () => {},
}) => {
	// State to control the visibility of the alert banner
	const [isVisible, setIsVisible] = useState(true)

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
	const classNames = generateCN("sui-navigation", {})

	// Define a mapping of icons based on variation
	const iconsList = {
		success: "CheckAlt",
		informative: "InfoAlt",
		warning: "InfoAlt",
		critical: "InfoAlt",
	}

	// Get the appropriate SVG Icon based on variation
	const Icon = Icons?.[iconsList[variation]]

	// Set the dismiss button color and center flag based on variation
	let dismissBtnColor = "black"
	if (["hub-upsell", "plugin-upsell"].includes(variation ?? "")) {
		dismissBtnColor = "white"
		isCenter = true
	}

	return (
		<nav className={classNames}>
			<div className="sui-navigation__brand">
				<div className="sui-navigation__brand-icon">ICON</div>
				<div className="sui-navigation__brand-info">
					<h3 className="sui-heading--h4">Smush Pro</h3>
					<span className="">Description</span>
				</div>
			</div>
			<ul className="sui-navigation__nav">
				<li className="sui-navigation__nav-item">TEST 1</li>
				<li className="sui-navigation__nav-item">TEST 2</li>
				<li className="sui-navigation__nav-item">TEST 3</li>
			</ul>
			<div className="sui-navigation__user">USER</div>
		</nav>
	)
}

Navigation.displayName = "Navigation"

export { Navigation }
