import React from "react"

import { isEmpty, generateCN } from "@wpmudev/sui-utils"

/**
 * Represents the properties for an icon component.
 */
interface IconPropsTypes {
	/**
	 * The name of the icon.
	 */
	name?: string
	/**
	 * The size of the icon.
	 */
	size?: "sm" | "md" | "lg"
}

// Build "Icon" component.
const Icon: React.FC<IconPropsTypes> = ({ name = "", size = "lg" }) => {
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
			[size]: ["sm", "md", "lg"].includes(size ?? "md"),
			icon: true,
		},
		"sui-input__icon",
	)

	return <span className={classNames} aria-hidden="true" />
}

// Publish required component(s).
export { Icon, IconPropsTypes }
