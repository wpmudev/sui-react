// @ts-nocheck
import React from "react"
import { isUndefined, isEmpty, isNumber } from "@wpmudev/sui-utils"

// Build "value" element
const Value = ({ value, className }) => {
	const has = {}
	const set = {}

	// Props validation
	has.value = isNumber(value) ? true : false
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false

	if (!has.value) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Progress Bar\n\nThe parameter "value" used in the value element can only be a number.\n\n`,
		)
	}

	// Define main class
	set.class = "sui-progress-bar__text"

	// Define additional class name(s)
	if (has.class) {
		set.class += ` ${className}`
	}

	return (
		<span className={set.class} aria-hidden={true}>
			{value}%
		</span>
	)
}

// Publish component(s)
export { Value }
