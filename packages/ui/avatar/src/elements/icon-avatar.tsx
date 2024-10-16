import React, { Fragment } from "react"
import Icons, { IconsNamesType, User, UserAlt } from "@wpmudev/sui-icons"
// Build "icon avatar" element
const Icon = ({ iconName }: { iconName: IconsNamesType }) => {
	const IconTag = Icons?.[iconName as IconsNamesType]
	return (
		<span className="sui-avatar__icon" aria-hidden="true">
			<IconTag data-testid="avatar-icon" />
		</span>
	)
}

export { Icon }
