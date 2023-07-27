import React from "react"

/**
 * Represents the properties for a field list.
 */
interface FieldListProps {
	/**
	 * The label for the field list.
	 */
	label: string
	/**
	 * The helper text for the field list.
	 */
	helper: string
	/**
	 * The content of the field list.
	 */
	children?: React.ReactNode
}

export type { FieldListProps }
