/*
 * Props for the Notification component.
 */
import { ReactNode, HTMLProps } from "react"

import { DropdownMenuItemProps } from "@wpmudev/sui-dropdown"

import {
	PluginsSlug,
	SuiHTMLAttributes,
	SuiStyleType,
} from "@wpmudev/sui-utils"

import { AvatarProps } from "@wpmudev/sui-avatar"
import { useStylesTypes } from "@wpmudev/sui-hooks"

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
	props: Omit<DropdownMenuItemProps, "children">
}

// Props for a group of NavigationUser menu items.
interface NavigationUserMenuGroupProps extends NavigationUserMenuBaseProps {
	/*
	 * An array of NavigationUserMenuItemProps representing the items in the group.
	 */
	menus: Array<NavigationUserMenuItemProps>
}

interface NavigationBrandProps extends SuiStyleType, SuiHTMLAttributes {
	/*
	 * Optional: Plugin information for the brand.
	 */
	plugin?: PluginsSlug
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
	name?: string
	/*
	 * Email address of the user.
	 */
	email?: string
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
	/*
	 * When set to true the menu will be disabled
	 */
	isMenuDisabled?: boolean
	/*
	 * The user status
	 */
	status?: AvatarProps["status"]
	/*
	 * Seperate last item from menu.
	 */
	splitLastItem?: boolean
}

// interface definition for the Navigation
interface NavigationProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/*
	 * Brand information.
	 */
	brand?: NavigationBrandProps
	/*
	 * Optional: Navigation content.
	 */
	children?: ReactNode

	/*
	 * Optional: User
	 */
	user?: NavigationUserProps
	/**
	 * Navigation actions list
	 */
	actions?: ReactNode[]
	/**
	 * Navigation actions list
	 */
	mobileActions?: ReactNode[]
	/**
	 * Navigation actions list
	 */
	mobileDrawer?: ReactNode[]
}

export type { NavigationProps, NavigationBrandProps, NavigationUserProps }
