import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Represents the alignment options for a row component.
 */
type RowAlignments = "xs" | "sm" | "md" | "lg" | "xl" | "default"

/**
 * Represents the properties for a column component.
 */
interface ColProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * The size of the column.
	 */
	size?: number | string | { [key in RowAlignments]?: number }
	/**
	 * Additional className
	 */
	className?: string
	/**
	 * The content of the column.
	 */
	children?: React.ReactNode
}

/**
 * Represents the properties for a row component.
 */
interface RowProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		Omit<SuiStyleType, "align" | "height"> {
	/**
	 * The alignment of the row
	 */
	align?: { [key in RowAlignments]?: string }
	/**
	 * Additional className
	 */
	className?: string
	/**
	 * The content of the row.
	 */
	children?: React.ReactNode
}

export type { ColProps, RowProps, RowAlignments }
