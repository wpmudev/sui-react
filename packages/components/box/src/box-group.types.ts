import React from "react"

/**
 * Represents the properties for a box group component.
 */
interface BoxGroupProps {
	/**
	 * Indicates whether the boxes should be displayed inline or not.
	 */
	isInline?: boolean
	/**
	 * The content of the box group.
	 */
	children?: React.ReactNode
}

export type { BoxGroupProps }
