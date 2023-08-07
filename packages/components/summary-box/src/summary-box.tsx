import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { Box } from "@wpmudev/sui-box"
import * as Icons from "@wpmudev/sui-icons"

import { SummaryBoxProps } from "./summary-box.types"

/**
 * SummaryBox Component
 *
 * Component that displays a summary box with a title, icon, primary and secondary actions,
 * and optional additional content.
 *
 * @return {JSX.Element} The SummaryBox component.
 */
const SummaryBox: React.FC<SummaryBoxProps> = ({
	title,
	icon,
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
		icon: undefined, // The icon will be set later based on the provided icon prop or a default value.
		isSmall: true, // Set the summary box size to small.
	}

	// Determine the icon to be used.
	attrs.icon = Icons?.[icon ?? ""] ?? "bell"

	return (
		<Box
			{...attrs}
			headerLeft={primaryActions ?? []} // Display primary actions in the header left.
			headerRight={secondaryActions ?? []} // Display secondary actions in the header right.
		>
			{children}
		</Box>
	)
}

// Publish required component.
export { SummaryBox }
