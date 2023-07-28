/**
 * Interface representing the properties of a tag component.
 */
import React, { HTMLProps } from "react"

/**
 * Interface representing the properties of a tag component.
 */
interface TagProps extends Omit<HTMLProps<HTMLSpanElement>, "style"> {
	/**
	 * Design of the tag.
	 */
	design?: string
	/**
	 * Color of the tag.
	 */
	color?: string
	/**
	 * Custom style for the tag.
	 */
	style?: string
	/**
	 * Additional CSS class name for the tag.
	 */
	className?: string
	/**
	 * Indicates whether the tag should be displayed in a small size.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the tag text should be in uppercase.
	 */
	isUppercase?: boolean
	/**
	 * Children nodes of the tag.
	 */
	children?: React.ReactNode
}

export { TagProps }
