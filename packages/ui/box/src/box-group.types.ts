import React, { CSSProperties } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * Represents the properties for a box group component.
 */
interface BoxGroupProps extends useStylesTypes {
	/**
	 * Indicates whether the boxes should be displayed inline or not.
	 */
	isInline?: boolean
	/**
	 * The content of the box group.
	 */
	children?: React.ReactNode
	/**
	 * Indicates whether the boxes should be displayed as box header.
	 */
	isHeader?: boolean
	/**
	 * Indicates whether the boxes should be displayed as footer.
	 */
	isFooter?: boolean
	/**
	 * Box styles
	 */
	style?: CSSProperties
	/**
	 * Wether the element has padding or not
	 */
	hasPadding?: boolean
}

export type { BoxGroupProps }
