// @ts-nocheck
import React from "react"
import { isNumber } from "@wpmudev/sui-utils"
import { ProgressBarProps } from "../progress-bar.types"

// Build "indicator" element
const Indicator: React.FC<Pick<ProgressBarProps, "value">> = ({
	value,
	...args
}) => {
	const has = {}
	const set = {}

	if (!has.value) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Progress Bar\n\nThe parameter "children" used in the value element can only be a number.\n\n`,
		)
	}

	// Define main class
	set.class = "sui-progress-bar__value"

	return (
		<progress
			className="sui-progress-bar__indicator"
			{...(isNumber(value) && { value })}
			max="100"
			{...args}
		>
			{has.value && `${value}% Complete`}
		</progress>
	)
}

// Publish component(s)
export { Indicator }
