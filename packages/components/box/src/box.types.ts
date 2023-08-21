import React from "react"

/**
 * Represents the properties for a box component.
 */
interface BoxProps {
	/**
	 * The title of the box.
	 */
	title?: string
	/**
	 * The icon for the box.
	 */
	icon?: string
	/**
	 * The content for the left header section of the box.
	 */
	headerLeft?: string | Record<string, any>[] | React.ReactNode
	/**
	 * The content for the right header section of the box.
	 */
	headerRight?: string | Record<string, any>[]
	/**
	 * The content of the box.
	 */
	children?: React.ReactNode
}

export { BoxProps }
