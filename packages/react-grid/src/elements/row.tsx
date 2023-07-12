import React from "react"

/**
 * Represents the alignment options for a row component.
 */
type RowAlignments = "xs" | "sm" | "md" | "lg" | "xl"

/**
 * Represents the properties for a row component.
 */
interface RowProps {
	/**
	 * The alignment of the row.
	 */
	align?: Record<RowAlignments, string>[]
	/**
	 * The content of the row.
	 */
	children?: React.ReactNode
}

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

export { Row, RowProps }
