import React, { Fragment } from "react"
import { User, UserAlt } from "@wpmudev/sui-icons"
// Build "icon avatar" element
const Icon = () => (
	<span className="sui-avatar__icon" aria-hidden="true">
		<UserAlt data-testid="avatar-icon" />
	</span>
)

export { Icon }
