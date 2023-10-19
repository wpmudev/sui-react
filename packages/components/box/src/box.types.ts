import React, { CSSProperties, HTMLProps } from "react"

/**
 * Represents the properties for a box component.
 */
interface BoxProps
	extends Omit<HTMLProps<HTMLDivElement>, "style" | "className"> {
	/**
	 * The title of the box.
	 */
	title?: string
	/**
	 * The icon for the box.
	 */
	icon?: string
	/**
	 * Hide icon on the mobile view.
	 */
	hideMobileIcon?: Boolean
	/**
	 * The content for the left header section of the box.
	 */
	headerLeft?: string | React.ReactNode
	/**
	 * The content for the right header section of the box.
	 */
	headerRight?: string | React.ReactNode
	/**
	 * Box styles
	 */
	style?: CSSProperties
	/**
	 * Make box small.
	 */
	isSmall?: Boolean
	/**
	 * Add custom class name to the component.
	 */
	className?: string
	/**
	 * The content of the box.
	 */
	children?: React.ReactNode
}

export type { BoxProps }
