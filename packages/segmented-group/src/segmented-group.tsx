import React from "react"
import { generateCN } from "@wpmudev/react-utils"

import { SegmentedGroupProps } from "./segmented-group.types"

// Build segmented button
const SegmentedGroup: React.FC<SegmentedGroupProps> = ({
	className,
	isFullWidth,
	children,
	...props
}) => {
	// classnames
	const classNames = generateCN(
		"sui-segmented-group",
		{
			"full-width": isFullWidth,
		},
		className,
	)

	return (
		<div className={classNames} {...props}>
			{children}
		</div>
	)
}

// Publish component(s)
export { SegmentedGroup }
