/**
 * Interface representing the properties of a tag component.
 */
import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * Interface representing the properties of a tag component.
 */
interface TagProps
	extends Omit<
			HTMLProps<HTMLSpanElement>,
			"style" | "height" | "content" | "translate" | "width" | "color"
		>,
		useStylesTypes {
	/**
	 * Design of the tag.
	 */
	design?: string
	/**
	 * Color of the tag.
	 */
	color?:
		| "default"
		| "blue"
		| "yellow"
		| "red"
		| "green"
		| "white"
		| "black"
		| "navy"
	/**
	 * Custom style for the tag.
	 */
	style?: "multiline" | "truncated"
	/**
	 * Additional CSS class name for the tag.
	 */
	className?: string
	/**
	 * Indicates whether the tag should be displayed in a small size.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the tag is disabled.
	 */
	isDisabled?: boolean
	/**
	 * Indicates whether the tag text should be in uppercase.
	 */
	isUppercase?: boolean
	/**
	 * Children nodes of the tag.
	 */
	children?: React.ReactNode
}

export type { TagProps }
