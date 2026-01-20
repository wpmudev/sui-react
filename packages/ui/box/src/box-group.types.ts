import React, { CSSProperties, HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Represents the properties for a box group component.
 */
interface BoxGroupProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * The unique identifier for the box group (optional).
	 */
	id?: string
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
	 * Indicates whether the boxes should be displayed as box header.
	 */
	className?: string
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
