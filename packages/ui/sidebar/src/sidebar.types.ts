import { IconsNamesType } from "@wpmudev/sui-icons"
import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * Interface defining the props that can be passed to a Sidebar component.
 */
interface SidebarProps extends useStylesTypes {
	/**
	 * An optional class name to be applied to the Sidebar component.
	 */
	className?: string

	/**
	 * The currently selected item title
	 */
	selectedItemName?: string

	/**
	 * Children components to be rendered within the Sidebar.
	 */
	children?: React.ReactNode
}

/**
 * Interface defining the props that can be passed to a SidebarItem component.
 * Extends HTMLProps<HTMLAnchorElement> to include standard HTML anchor element props.
 */
interface SidebarItemProps
	extends Omit<
			HTMLProps<HTMLAnchorElement>,
			| "action"
			| "onClick"
			| "className"
			| "title"
			| "height"
			| "content"
			| "translate"
			| "width"
			| "color"
		>,
		useStylesTypes {
	/**
	 * The URL associated with the SidebarItem.
	 */
	url?: string

	/**
	 * An optional icon to be displayed within the SidebarItem.
	 */
	icon?: IconsNamesType

	/**
	 * The title or text to be displayed for the SidebarItem.
	 */
	title?: string

	/**
	 * Make sidebar item active
	 */
	isActive?: boolean

	/**
	 * An optional class name to be applied to the SidebarItem.
	 */
	className?: string

	/**
	 * An optional action component to be displayed alongside the title in the SidebarItem.
	 */
	action?: React.ReactNode

	/**
	 * Specifies whether the SidebarItem is disabled or not.
	 */
	isDisabled?: boolean

	/**
	 * Callback function to be invoked when the item is clicked
	 */
	onClick?: Function
}

export type { SidebarProps, SidebarItemProps }
