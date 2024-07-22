import React from "react"
import { Clock, CheckAlt, Warning } from "@wpmudev/sui-icons"

import { StatusProps } from "./status.types"

// Build "status" element
const Status: React.FC<StatusProps> = ({ status }) => {
	// Determine the IconTag based on the provided icon value
	let IconName,
		classes = "sui-avatar__status-icon"

	// Define status
	switch (status) {
		case "confirmed":
			IconName = CheckAlt
			classes += " sui-color-success--50"
			break

		case "not-accepted":
			IconName = Warning
			classes += " sui-color-warning--50"
			break

		case "not-connected":
			IconName = Warning
			classes += " sui-color-error--50"
			break

		case "awaiting":
			IconName = Clock
			classes += " sui-color-neutral--50"
			break

		default:
			break
	}

	// Return element
	return (
		<span
			className="sui-avatar__status"
			data-testid="avatar-status"
			aria-hidden="true"
		>
			{IconName && <IconName className={classes} size="sm" />}
		</span>
	)
}

export { Status }
