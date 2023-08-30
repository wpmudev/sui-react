/*
 * Props for the Notification component.
 */
import { ReactNode } from "react"

import { MenuItemProps } from "@wpmudev/sui-menu"

// Represents the base props for a DropdownMenu component.
interface NavigationUserMenuBaseProps {
	id: string | number // Unique identifier for the NavigationUser menu item.
	label: ReactNode | string // Content to display as the label for the NavigationUser menu item.
}

// Props for an individual item within the NavigationUser menu.
interface NavigationUserMenuItemProps extends NavigationUserMenuBaseProps {
	props: Omit<MenuItemProps, "children"> // Additional props for the underlying MenuItem component.
}

// Props for a group of NavigationUser menu items.
interface NavigationUserMenuGroupProps extends NavigationUserMenuBaseProps {
	menus: Array<NavigationUserMenuItemProps> // An array of NavigationUserMenuItemProps representing the items in the group.
}

interface NavigationBrandProps {
	plugin?: string
	title?: string
	description?: string
}

type NavigationUserType = {
	image: string
	name: string
	email: string
}

interface NavigationUserProps {
	user?: NavigationUserType
	/**
	 * Expected type for menu object in array
	 */
	menu?: Array<NavigationUserMenuItemProps | NavigationUserMenuGroupProps>
}

// interface definition for the Navigation
interface NavigationProps {
	/**
	 * Navigation content
	 */
	children?: ReactNode
	/**
	 * Brand info
	 */
	brand: NavigationBrandProps
}

export { NavigationProps, NavigationBrandProps, NavigationUserProps }
