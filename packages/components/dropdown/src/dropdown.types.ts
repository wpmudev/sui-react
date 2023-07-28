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
	 * The unique identifier of the dropdown.
	 */
	id: string
	/**
	 * The label for the dropdown.
	 */
	label?: string
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
	isLabelHidden?: boolean
	/**
	 * The current selected value of the dropdown.
	 */
	current: number
	/**
	 * Expected type for menu object in array
	 */
	menu?: Array<DropdownMenuItemProps | DropdownMenuGroupProps>
	/**
	 * The content of the dropdown.
	 */
	children?: React.ReactNode
}

/**
 * Represents the properties for a dropdown option.
 */
type DropdownOptionProps = {
	/**
	 * The icon for the dropdown option.
	 */
	icon?: string
	/**
	 * The URL for the dropdown option.
	 */
	href?: string
	/**
	 * The callback function to be called when the dropdown option is clicked.
	 */
	onClick?: () => void
	/**
	 * The content of the dropdown option.
	 */
	children?: React.ReactNode
} & Omit<
	HTMLProps<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
	"onClick" | "onSelect"
>

/**
 * Represents the properties for a dropdown option item.
 */
interface DropdownOptionItemProps extends DropdownOptionProps {
	/**
	 * The unique identifier of the dropdown option item.
	 */
	id: string
	/**
	 * Indicates whether the dropdown option item is active or not.
	 */
	isActive: boolean
	/**
	 * The index of the dropdown option item.
	 */
	index: number
	/**
	 * The callback function to be called when the dropdown option item is selected.
	 *
	 * @param option - The selected dropdown option.
	 * @param index  - The index of the selected dropdown option.
	 */
	onSelect: (option: DropdownOptionProps, index: number) => void
}

export { DropdownProps, DropdownOptionProps, DropdownOptionItemProps }
