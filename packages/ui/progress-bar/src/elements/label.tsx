// @ts-nocheck
import React from "react"
import { isUndefined, isEmpty } from "@wpmudev/sui-utils"
import { ProgressBarProps } from "../progress-bar.types"

// Build "label" element
const Label: React.FC<Pick<ProgressBarProps, "className" | "children">> = ({
	className,
	children,
}) => {
	const has = {}
	const set = {}

	// Props validation
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false

	// Define main class
	set.class = "sui-progress-bar__text"

	// Define additional class name(s)
	if (has.class) {
		set.class += ` ${className}`
	}

	return (
		<span className={set.class} aria-hidden={true}>
			{children}
		</span>
	)
}

// Publish component(s)
export { Label }
