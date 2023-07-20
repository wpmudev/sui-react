import React from "react"

// Import required component(s)
import { ToggleButton } from "@wpmudev/react-button"
import { condContent, generateCN } from "@wpmudev/react-utils"

import { SegmentedButtonProps } from "./segmented-button.types"
// import { IconButton } from '@wpmudev/react-icon-button';

// Build segmented button
const SegmentedButton: React.FC<SegmentedButtonProps> = ({
	icon,
	children,
	isFirst = false,
	isLast = false,
	isLabelHidden = false,
	...props
}) => {
	const set = {}

	const classNames = generateCN("sui-segment", {
		first: isFirst,
		last: isLast,
		middle: !isFirst && !isLast,
	})

	const attrs = {
		icon: condContent(isLabelHidden, icon),
		iconLead: condContent(!isLabelHidden, icon),
		label: condContent(isLabelHidden, children),
	}

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
export { SegmentedButton }
