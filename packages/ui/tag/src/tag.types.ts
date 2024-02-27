/**
 * Interface representing the properties of a tag component.
 */
import React, { HTMLAttributes, HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import {
	OmitNestedKey,
	SuiHTMLAttributes,
	SuiStyleType,
} from "@wpmudev/sui-utils"

/**
 * Interface representing the properties of a tag component.
 */
interface TagProps
	extends OmitNestedKey<
			SuiHTMLAttributes<HTMLAttributes<HTMLSpanElement>>,
			"_htmlProps",
			"className" | "color"
		>,
		SuiStyleType {
	/**
	 * Design of the tag.
	 */
	design?: string
	/**
	 * Color of the tag.
	 */
	colorScheme?:
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
	contentWrap?: "default" | "multiline" | "truncated"
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
	 * Indicates whether the tag has dismiss.
	 */
	isDismissable?: boolean
	/**
	 * Indicates whether the tag text should be in uppercase.
	 */
	isUppercase?: boolean
	/**
	 * Children nodes of the tag.
	 */
	children?: React.ReactNode
	/**
	 * Indicates whether the tag has dismiss.
	 */
	onDismiss?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type { TagProps }
