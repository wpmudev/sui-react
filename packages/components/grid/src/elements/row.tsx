import React, { HTMLProps } from "react"
import { isEmpty } from "@wpmudev/storybook/lib/utils"

/**
 * Represents the alignment options for a row component.
 */
type RowAlignments = "xs" | "sm" | "md" | "lg" | "xl"

/**
 * Represents the properties for a row component.
 */
interface RowProps extends HTMLProps<HTMLDivElement> {
	/**
	 * The alignment of the row.
	 */
	align?: Record<RowAlignments, string>[]
	className?: string
	/**
	 * The content of the row.
	 */
	children?: React.ReactNode
}

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
