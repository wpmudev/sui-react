import React from "react"

// Import required component(s)
import { ToggleButton } from "@wpmudev/react-button"
// import { IconButton } from '@wpmudev/react-icon-button';

// Build segmented button
const Button = ({
	icon,
	children,
	isFirst = false,
	isLast = false,
	isLabelHidden = false,
	...props
}) => {
	const set = {}

	set.props = {
		...(isLabelHidden && { icon: icon }),
		...(!isLabelHidden && { iconLead: icon }),
		className: "sui-segment",
		...(isLabelHidden && { label: children }),
		...props,
	}

	if (isFirst) {
		set.props.className += " sui-segment--first"
	} else if (isLast) {
		set.props.className += " sui-segment--last"
	} else {
		set.props.className += " sui-segment--middle"
	}

	if (isLabelHidden) {
		// return <IconButton {...set.props} />
	}

	return <ToggleButton {...set.props}>{children}</ToggleButton>
}

// Publish component(s)
export { Button }
