import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { IconPropsTypes } from "./input-icon.type"
import Icons from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"
import { useStyles } from "@wpmudev/sui-hooks"

// Build "Icon" component.
const Icon: React.FC<IconPropsTypes> = ({
	name,
	size = "md",
	placement = "start",
	onClick,
	...props
}) => {
	const { suiInlineClassname } = useStyles(props)

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

	const className = generateCN(
		`suicons sui-input__icon sui-input__icon--${iconClass}`,
		{},
		suiInlineClassname,
	)

	return (
		<span
			className={className}
			aria-hidden="true"
			data-testid={`input-icon-${placement}`}
			onClick={onClick}
		>
			{IconName && <IconName size={size} />}
		</span>
	)
}

// Publish required component(s).
export { Icon }
