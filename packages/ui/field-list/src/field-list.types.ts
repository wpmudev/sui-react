import React, { CSSProperties, HTMLProps } from "react"

import { ToggleProps } from "@wpmudev/sui-toggle"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Represents the properties for a field list.
 */
interface FieldListProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * The ID for the field list item.
	 */
	id?: string
	/**
	 * The label for the field list.
	 */
	label?: string
	/**
	 * The helper text for the field list.
	 */
	helper?: string
	/**
	 * The content of the field list.
	 */
	children?: React.ReactNode
	/**
	 * The helper text for the field list.
	 */
	spacing?: string
	/**
	 * No Border Radius
	 */
	noBorderRadius?: boolean
	/**
	 * A callback function to be invoked when when one of the fields state changes
	 */
	onToggle?: (id: string, checked: boolean) => void
}

/**
 * Represents the properties for a field list item.
 */
interface FieldListItemProps extends ToggleProps, SuiStyleType {
	/**
	 * The ID for the field list item.
	 */
	id?: string
	/**
	 * Callback function when toggled
	 */
	onToggle?(id: string, checked: boolean): void
	/**
	 * The content of the field list item.
	 */
	children?: React.ReactNode
	/**
	 * Whether the toggle is checked or not
	 */
	isChecked?: boolean
	/*
	 * A callback function to be invoked when when one of the fields state changes
	 */
	hasToggle?: boolean
	/*
	 * Custom actions for the item
	 */
	actions?: React.ReactNode
	/**
	 * Custom style
	 */
	style?: CSSProperties
}

export type { FieldListProps, FieldListItemProps }
