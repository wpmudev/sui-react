import React, { HTMLProps } from "react"

import { MenuItemProps } from "@wpmudev/sui-menu"

// Represents the base props for a DropdownMenu component.
interface DropdownMenuBaseProps {
	id: string | number // Unique identifier for the dropdown menu item.
	label: React.ReactNode | string // Content to display as the label for the dropdown menu item.
}

// Props for an individual item within the dropdown menu.
interface DropdownMenuItemProps extends DropdownMenuBaseProps {
	props: Omit<MenuItemProps, "children"> // Additional props for the underlying MenuItem component.
}

// Props for a group of dropdown menu items.
interface DropdownMenuGroupProps extends DropdownMenuBaseProps {
	menus: Array<DropdownMenuItemProps> // An array of DropdownMenuItemProps representing the items in the group.
}

/**
 * Represents the properties for a dropdown component.
 */
interface DropdownProps {
	/**
	 * The label for the dropdown.
	 */
	label?: string
	/**
	 * The custom class name for the dropdown.
	 */
	className?: string
	/**
	 * Indicates whether the dropdown has a call-to-action button.
	 */
	hasCta?: boolean
	/**
	 * Indicates whether the dropdown should be displayed as small or not.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	iconOnly?: boolean
	/**
	 * Display all content without scroll
	 */
	isFixedHeight?: boolean
	/**
	 * The current selected value of the dropdown.
	 */
	current?: number
	/**
	 * Expected type for menu object in array
	 */
	menu?: Array<DropdownMenuItemProps | DropdownMenuGroupProps>
	/**
	 * Filter button icon
	 */
	buttonIcon?: string
	/**
	 * On click on Menu Item
	 */
	onMenuClick?(id: string | number, e?): void
	/**
	 * Dropdown popover direction
	 */
	direction?: "" | "left" | "right"
	/**
	 * Render custom content on top of the menu items
	 */
	renderContentOnTop?: boolean
	/**
	 * The content of the dropdown.
	 */
	children?: React.ReactNode
}

// Type definition for the modal handling functions
type DropdownRefProps = {
	open: () => void
	close: () => void
	toggle: () => void
}

export type { DropdownProps, DropdownRefProps }
