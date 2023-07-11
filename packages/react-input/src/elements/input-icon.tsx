import React from "react"
import { isUndefined, isEmpty, generateCN } from "@wpmudev/react-utils"

interface IconPropsTypes {
	name?: string
	size?: string
}

// Build "Icon" component.
const Icon = ({ name = "", size }: IconPropsTypes) => {
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
			[size ?? "md"]: ["sm", "md", "lg"].includes(size ?? "md"),
			icon: true,
		},
		"sui-input__icon",
	)

	return <span className={classNames} aria-hidden="true" />
}

// Publish required component(s).
export { Icon, IconPropsTypes }
