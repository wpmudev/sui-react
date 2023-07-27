import React from "react"

// Import required component(s)
import { ToggleButton } from "@wpmudev/sui-button"
import { condContent, generateCN } from "@wpmudev/sui-utils"

import { SegmentedControlProps } from "./segmented-control.types"
// import { IconButton } from '@wpmudev/react-icon-button';

// Build segmented button
const SegmentedControl: React.FC<SegmentedControlProps> = ({
	icon,
	children,
	isFirst = false,
	isLast = false,
	isLabelHidden = false,
	...props
}) => {
	const set = {}

	const classNames = generateCN("sui-segmented-control", {
		first: isFirst,
		last: isLast,
		middle: !isFirst && !isLast,
	})

	const attrs = {
		icon: condContent(isLabelHidden, icon),
		iconLead: condContent(!isLabelHidden, icon),
		label: condContent(isLabelHidden, children),
	}

	return <div className={classNames}>{children}</div>

	// if (isLabelHidden) {
	// return <IconButton {...set.props} />
	// }

	return (
		<ToggleButton className={classNames} {...attrs} {...props}>
			{children}
		</ToggleButton>
	)
}

// Publish component(s)
export { SegmentedControl }
