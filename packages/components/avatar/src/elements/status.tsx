import React from "react"

import { StatusProps } from "./status.types"

// Build "status" element
const Status: React.FC<StatusProps> = ({ status }) => {
	const set: any = {}

	set.wrapper = {}
	set.element = {}

	// Define main class
	set.wrapper.class = "sui-avatar__status"
	set.element.class = "sui-avatar__status-icon suicons"

	// Define status
	switch (status) {
		case "confirmed":
			set.element.class += " suicons--check-alt"
			set.element.class += " sui-color-success--50"
			break

		case "not-accepted":
			set.element.class += " suicons--warning"
			set.element.class += " sui-color-warning--50"
			break

		case "not-connected":
			set.element.class += " suicons--warning"
			set.element.class += " sui-color-error--50"
			break

		default:
			set.element.class += " suicons--clock"
			set.element.class += " sui-color-neutral--60"
			break
	}

	// Return element
	return (
		<span className={set.wrapper.class} data-testid="avatar-status">
			<span className={set.element.class} aria-hidden="true" />
		</span>
	)
}

export { Status }
