import React from "react"

import { RowProps, RowAlignments } from "./row.types"

const Row: React.FC<RowProps> = ({ align, children }) => {
	// Define main class
	let classNames = "sui-row"

	// Add classes based on alignment
	for (const key in align) {
		// Check if "key" has the correct type
		if (align[key as RowAlignments]) {
			// Check if extra-small key exists & if value is not "stacked"
			if (key === "xs" && align[key] !== "stacked") {
				classNames += ` sui-row--${align[key]}`
			} else {
				classNames += ` sui-row-${key}--${align[key as RowAlignments]}`
			}
		}
	}

	return <div className={classNames}>{children}</div>
}

export { Row }
