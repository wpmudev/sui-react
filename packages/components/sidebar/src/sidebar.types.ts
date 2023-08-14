import React, { HTMLProps } from "react"

/**
 * Interface defining the props that can be passed to a Sidebar component.
 */
interface SidebarProps {
	/**
	 * An optional class name to be applied to the Sidebar component.
	 */
	className?: string

	/**
	 * Children components to be rendered within the Sidebar.
	 */
	children?: React.ReactNode
}

/**
 * Interface defining the props that can be passed to a SidebarItem component.
 * Extends HTMLProps<HTMLAnchorElement> to include standard HTML anchor element props.
 */
interface SidebarItemProps extends HTMLProps<HTMLAnchorElement> {
	/**
	 * The URL associated with the SidebarItem.
	 */
	url: string

	/**
	 * An optional icon to be displayed within the SidebarItem.
	 */
	icon?: string

	/**
	 * The title or text to be displayed for the SidebarItem.
	 */
	title: string

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
}

export { SidebarProps, SidebarItemProps }
