import React from "react"

import { isEmpty } from "@wpmudev/sui-utils"
import { IconPropsTypes } from "./input-icon.type"
import Icons from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"

// Build "Icon" component.
const Icon: React.FC<IconPropsTypes> = ({
	name,
	size = "md",
	position = "start",
}) => {
	if (isEmpty(name ?? "")) {
		throw new Error(
			`Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n`,
		)
	}

	// Determine the IconTag based on the provided icon value
	const IconName: React.ComponentType<IconProps> = Icons[name]

	// get icon classname from name.
	const iconClass = (name ?? "").replace(
		/[A-Z]/g,
		(match, index) => (index === 0 ? "" : "-") + match.toLowerCase(),
	)

	return (
		<span
			className={`suicons sui-input__icon sui-input__icon--${iconClass}`}
			aria-hidden="true"
			data-testid={`input-icon-${position}`}
		>
			{IconName && <IconName size={size} />}
		</span>
	)
}

// Publish required component(s).
export { Icon }
