import React from "react"

import { isEmpty } from "@wpmudev/sui-utils"

import { RowProps } from "../grid.types"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

const Row: React.FC<RowProps> = ({
	align = { md: "inline" },
	className,
	children,
	...props
}) => {
	const expectedAligns: Record<string, any> = {
		xs: "",
		sm: "",
		md: "",
		lg: "",
		xl: "",
		...align,
	}

	// Define main class
	let classNames = "sui-row"

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
		<div className={classNames} data-testid="grid" {...props}>
			{children}
		</div>
	)
}

export { Row }
