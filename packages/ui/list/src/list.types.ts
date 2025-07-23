import React, { HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * LinkProps is an interface that extends the HTMLAnchorElement interface
 * while allowing additional properties specific to the Link component.
 * It is used to define the set of properties that can be passed to the Link component.
 */
interface ListProps
	extends SuiHTMLAttributes<HTMLProps<HTMLAnchorElement>>,
		SuiStyleType {
	/**
	 * The type of list, either "ul" or "ol"
	 */
	type?: "ul" | "ol"
	/**
	 * Whether the list should have borders
	 */
	border?: boolean
	/**
	 * Whether the list should be flushed (no border on left and right and radius)
	 */
	flush?: boolean
	/**
	 * Whether the list should be unstyled
	 */
	unstyled?: boolean
	/**
	 * Whether the list should have overflow hidden
	 */
	overflow?: boolean
	/**
	 * The CSS class name to apply to the list
	 */
	className?: string
	/**
	 * The text of the link
	 */
	children?: React.ReactNode
	/**
	 * The onClick handler for the list
	 */
	onClick?: () => void
}

/**
 * ListContextProps defines the properties available in the List context.
 * It is used to provide context to child components about the type of list.
 */
interface ListContextProps {
	/**
	 * The type of list, either "ul" or "ol"
	 */
	type: "ul" | "ol"
	/**
	 * The onClick handler for the list
	 */
	onClick?: () => void
}

/**
 * ListItemProps defines the properties available for list items.
 * It is used to specify the className and other attributes for list items.
 */
interface ListItemProps extends SuiHTMLAttributes<HTMLLIElement>, SuiStyleType {
	/**
	 * The CSS class name to apply to the list item
	 */
	className?: string
	/**
	 * The variant of the list item, e.g., "neutral", "info", "success", "warning", "critical"
	 */
	variant?: "neutral" | "info" | "success" | "warning" | "critical"
	/**
	 * Whether the list item should have an action (e.g., a button or link)
	 */
	action?: boolean
	/**
	 * Whether the list item is a Pro feature
	 */
	isPro?: boolean
	/**
	 * Whether the list item is disabled
	 */
	isDisabled?: boolean
	/**
	 * The text of the list item
	 */
	children?: React.ReactNode
	/**
	 * The onClick handler for the list item
	 */
	onItemClick?: (event: React.MouseEvent<HTMLLIElement>) => void
}

export type { ListProps, ListContextProps, ListItemProps }
