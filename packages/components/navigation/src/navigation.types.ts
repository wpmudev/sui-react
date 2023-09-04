/*
 * Props for the Notification component.
 */
import { ReactNode } from "react"

import { MenuItemProps } from "@wpmudev/sui-menu"

// Represents the base props for a DropdownMenu component.
interface NavigationUserMenuBaseProps {
	/*
	 * Unique identifier for the NavigationUser menu item.
	 */
	id: string | number
	/*
	 * Content to display as the label for the NavigationUser menu item.
	 */
	label: ReactNode | string
}

// Props for an individual item within the NavigationUser menu.
interface NavigationUserMenuItemProps extends NavigationUserMenuBaseProps {
	/*
	 * Additional props for the underlying MenuItem component.
	 */
	props: Omit<MenuItemProps, "children">
}

// Props for a group of NavigationUser menu items.
interface NavigationUserMenuGroupProps extends NavigationUserMenuBaseProps {
	/*
	 * An array of NavigationUserMenuItemProps representing the items in the group.
	 */
	menus: Array<NavigationUserMenuItemProps>
}

interface NavigationBrandProps {
	/*
	 * Optional: Plugin information for the brand.
	 */
	plugin?: string
	/*
	 * Optional: Title for the brand.
	 */
	title?: string
	/*
	 * Optional: Description for the brand.
	 */
	description?: string
}

type NavigationUserType = {
	/*
	 * Image URL for the user's profile picture.
	 */
	image?: string
	/*
	 * Name of the user.
	 */
	name: string
	/*
	 * Email address of the user.
	 */
	email: string
}

interface NavigationUserProps {
	/*
	 * User information.
	 */
	user?: NavigationUserType
	/*
	 * Array of menu items or groups in the user's navigation menu.
	 */
	menu?: Array<NavigationUserMenuItemProps | NavigationUserMenuGroupProps>
}

// interface definition for the Navigation
interface NavigationProps {
	/*
	 * Brand information.
	 */
	brand: NavigationBrandProps
	/*
	 * Optional: Navigation content.
	 */
	children?: ReactNode
}

export { NavigationProps, NavigationBrandProps, NavigationUserProps }
