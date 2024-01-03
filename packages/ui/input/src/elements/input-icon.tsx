import React from "react"

import { isEmpty, generateCN } from "@wpmudev/sui-utils"
import { IconPropsTypes } from "./input-icon.type"

// Build "Icon" component.
const Icon: React.FC<IconPropsTypes> = ({
	name = "",
	size = "lg",
	position = "start",
	onClick,
}) => {
	// Required parameter(s) validation.
	if (isEmpty(name ?? "")) {
		throw new Error(
			`Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n`,
		)
	}

	// classNames
	const classNames = generateCN(
		"suicons",
		{
			[name]: true,
			[size || "md"]: ["sm", "md", "lg"].includes(size || "md"),
			icon: true,
		},
		"sui-input__icon",
	)

	return (
		<span
			onClick={onClick}
			className={classNames}
			aria-hidden="true"
			data-testid={`input-icon-${position}`}
		/>
	)
}

// Publish required component(s).
export { Icon }
