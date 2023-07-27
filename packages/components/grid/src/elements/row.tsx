import React from "react"

import { RowProps } from "./row.type"

const Row: React.FC<RowProps> = ({ align, children }) => {
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

	return <div className={classNames}>{children}</div>
}

export { Row }
