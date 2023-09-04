import React from "react"

import { isEmpty } from "@wpmudev/sui-utils"

import { RowProps } from "../grid.types"

const Row: React.FC<RowProps> = ({ align, className, children, ...props }) => {
	const expectedAligns = {
		xs: "",
		sm: "",
		md: "",
		lg: "",
		xl: "",
		...align,
	}

	// Define main class
	let classNames = "sui-row"

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
		<div className={classNames} {...props}>
			{children}
		</div>
	)
}

export { Row, RowProps }