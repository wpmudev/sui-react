import React from "react"

import { _renderRestPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"

import { RowProps } from "../grid.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const Row: React.FC<RowProps> = ({
	align = { md: "inline" },
	className,
	children,
	...props
}) => {
	const { cssCN } = useStyles(props, className)

	const expectedAligns: Record<string, any> = {
		xs: "",
		sm: "",
		md: "",
		lg: "",
		xl: "",
		...align,
	}

	// Define main class
	let classNames = generateCN("sui-row", {}, cssCN)

	// Default row children
	children = useDefaultChildren(children, "{Row children}")

	// Define class name based on alignment
	for (const key in expectedAligns) {
		// Check if value is not empty
		if (expectedAligns[key] !== "") {
			// Check if extra-small key exists & if value is not "stacked"
			if (key === "xs" && expectedAligns[key] !== "stacked") {
				classNames += ` sui-row--${expectedAligns[key]}`
			} else {
				classNames += ` sui-row-${key}--${expectedAligns[key]}`
			}
		}
	}

	if (!isEmpty(className ?? "")) {
		classNames += ` ${className}`
	}

	return (
		<div
			className={classNames}
			data-testid="grid"
			{..._renderRestPropsSafely(props)}
		>
			{children}
		</div>
	)
}

export { Row }
