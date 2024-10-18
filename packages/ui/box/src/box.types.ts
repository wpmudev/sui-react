import React, { CSSProperties, HTMLProps } from "react"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Represents the properties for a box component.
 */
interface BoxProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * The title of the box.
	 */
	title?: string
	/**
	 * The title of the box.
	 */
	description?: string
	/**
	 * The icon for the box.
	 */
	icon?: IconsNamesType
	/**
	 * Hide icon on the mobile view.
	 */
	hideMobileIcon?: boolean
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
	isSmall?: boolean
	/**
	 * Add custom class name to the component.
	 */
	className?: string
	/**
	 * The content of the box.
	 */
	children?: React.ReactNode
	/**
	 * Has large radius
	 */
	hasLargeRadius?: boolean
}

export type { BoxProps }
