import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { Box } from "@wpmudev/sui-box"
// import * as Icons from "@wpmudev/sui-icons"

import { SummaryBoxProps } from "./summary-box.types"

/**
 * SummaryBox Component
 *
 * Component that displays a summary box with a title, icon, primary and secondary actions,
 * and optional additional content.
 *
 * @param {Object}             props                       - The props for the SummaryBox component.
 * @param {string}             props.title                 - The title of the summary box.
 * @param {JSX.Element}        props.icon                  - The icon element to display.
 * @param {boolean}            [props.hideMobileIcon=true] - Whether to hide the icon on mobile devices.
 * @param {Array<JSX.Element>} [props.primaryActions=[]]   - An array of primary action elements.
 * @param {Array<JSX.Element>} [props.secondaryActions=[]] - An array of secondary action elements.
 * @param {string}             props.className             - Additional CSS classes to apply to the component.
 * @param {*}                  props.children              - Optional additional content within the summary box.
 *
 * @return {JSX.Element} The SummaryBox component.
 */
const SummaryBox: React.FC<SummaryBoxProps> = ({
	title,
	icon,
	hideMobileIcon = true,
	primaryActions = [],
	secondaryActions = [],
	className,
	children,
}) => {
	const classNames = generateCN("sui-summary-box", {}, className)

	// Define the attributes for the Box component that will be used to display the summary box.
	const attrs = {
		title,
		className: classNames,
		icon: "", // The icon will be set later based on the provided icon prop or a default value.
		isSmall: true, // Set the summary box size to small.
		hideMobileIcon,
	}

	// Determine the icon to be used.
	attrs.icon = icon ?? ""

	return (
		<Box
			{...attrs}
			data-testid="summary-box"
			className="sui-summary-box"
			headerLeft={
				<div className="sui-summary-box__quick-actions">
					{primaryActions ?? []}
				</div>
			} // Display primary actions in the header left.
			headerRight={secondaryActions ?? []} // Display secondary actions in the header right.
		>
			{children}
		</Box>
	)
}

// Publish required component.
export { SummaryBox }
