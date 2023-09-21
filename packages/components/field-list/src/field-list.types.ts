import React from "react"

import { ToggleProps } from "@wpmudev/sui-toggle"

/**
 * Represents the properties for a field list.
 */
interface FieldListProps {
	/**
	 * The label for the field list.
	 */
	label: string
	/**
	 * The helper text for the field list.
	 */
	helper: string
	/**
	 * The content of the field list.
	 */
	children?: React.ReactNode
	/**
	 * A callback function to be invoked when when one of the fields state changes
	 */
	onToggle?: (id: string, checked: boolean) => void
}

/**
 * Represents the properties for a field list item.
 */
interface FieldListItemProps extends ToggleProps {
	/**
	 * The ID for the field list item.
	 */
	id: string
	/**
	 * Callback function when toggled
	 */
	onToggle?(id: string, checked: boolean): void
	/**
	 * The content of the field list item.
	 */
	children?: React.ReactNode
}

export type { FieldListProps, FieldListItemProps }
