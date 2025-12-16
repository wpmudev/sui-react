import { IconsNamesType } from "@wpmudev/sui-icons"
import React, { HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"
import { ButtonProps } from "@wpmudev/sui-button"

/**
 * Interface defining the props that can be passed to a Sidebar component.
 */
interface SidebarProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the Sidebar.
	 */
	id?: string
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

	/**
	 * Object that represents button props
	 */
	buttonProps?: ButtonProps
}

/**
 * Interface defining the props that can be passed to a SidebarItem component.
 * Extends HTMLProps<HTMLAnchorElement> to include standard HTML anchor element props.
 */
interface SidebarItemProps
	extends SuiHTMLAttributes<HTMLProps<HTMLAnchorElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the sidebar item.
	 */
	id?: string
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
