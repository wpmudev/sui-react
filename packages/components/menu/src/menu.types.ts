import React, { HTMLProps } from "react"
/**
 * Props for Menu component.
 */
interface MenuProps {
	/** Additional class name(s) to be applied to the Menu. */
	className?: string
	/** Children elements to be rendered inside the Menu. */
	children?: React.ReactNode
}

/**
 * Props for MenuItem component.
 */
interface MenuItemProps
	extends HTMLProps<HTMLSpanElement | HTMLAnchorElement | HTMLUListElement> {
	/** URL to navigate to when the item is clicked (if the item is an anchor). */
	href?: string
	/** Name of the icon to be displayed with the MenuItem. */
	icon?: string
	/** Additional class name(s) to be applied to the MenuItem. */
	className?: string
	/**
	 * Function to be called when the MenuItem is clicked.
	 *
	 * @param e The click event object.
	 */
	onClick?(e?): void
	/** Children elements to be rendered inside the MenuItem. */
	children?: React.ReactNode
}

/**
 * Props for MenuGroup component.
 */
interface MenuGroupProps extends HTMLProps<HTMLUListElement> {
	/** Title of the MenuGroup. */
	title: string
	/** URL to navigate to when the MenuGroup is clicked. */
	href?: string
	/** Additional class name(s) to be applied to the MenuGroup. */
	className?: string
	/** Children elements to be rendered inside the MenuGroup. */
	children?: React.ReactNode
}

export type { MenuProps, MenuItemProps, MenuGroupProps }
