import React, { HTMLProps } from "react"

interface MenuProps {
	children?: React.ReactNode
}

/**
 * Interface representing the properties of a menu item.
 */
interface MenuItemProps extends HTMLProps<HTMLSpanElement | HTMLAnchorElement> {
	/**
	 * Href attribute for the menu item (if applicable).
	 */
	href?: string

	/**
	 * Additional CSS class name for the menu item.
	 */
	className?: string

	/**
	 * Children nodes of the menu item.
	 */
	children?: React.ReactNode
}

export type { MenuProps, MenuItemProps }
