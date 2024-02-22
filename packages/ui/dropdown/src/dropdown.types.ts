import React, { HTMLProps, KeyboardEvent } from "react"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { ButtonProps } from "@wpmudev/sui-button"
import {
	OmitNestedKey,
	SuiHTMLAttributes,
	SuiStyleType,
} from "@wpmudev/sui-utils"

/**
 * Props for Menu component.
 */
interface DropdownMenuProps extends SuiStyleType {
	/** Additional class name(s) to be applied to the Menu. */
	className?: string
	/** Children elements to be rendered inside the Menu. */
	children?: React.ReactNode
}

/**
 * Props for MenuItem component.
 */
interface DropdownMenuItemProps extends SuiStyleType {
	/**
	 * URL to navigate to when the item is clicked (if the item is an anchor).
	 */
	href?: string
	/**
	 * Name of the icon to be displayed with the MenuItem.
	 */
	icon?: IconsNamesType
	/**
	 * Additional class name(s) to be applied to the MenuItem.
	 */
	className?: string
	/**
	 * Makes dropdown disabled
	 */
	isDisabled?: boolean
	/**
	 * Dropdown menu item variation
	 */
	variation?:
		| "hummingbird"
		| "smush"
		| "snapshot"
		| "smartcrawl"
		| "shipper"
		| "ivt"
		| "hustle"
		| "forminator"
		| "defender"
		| "branda"
		| "beehive"
	/**
	 * Function to be called when the MenuItem is clicked.
	 *
	 * @param e The click event object.
	 */
	onClick?(e?: KeyboardEvent): void
	/**
	 * Children elements to be rendered inside the MenuItem.
	 */
	children?: React.ReactNode
	/**
	 * Specifies where the linked document should be opened when the user clicks on the hyperlink.
	 */
	target?: "_blank" | "_self" | "_parent" | "_top" | string
}

/**
 * Props for MenuGroup component.
 */
interface DropdownMenuGroupProps
	extends OmitNestedKey<
			SuiHTMLAttributes<HTMLProps<HTMLLIElement>>,
			"htmlProps",
			"className" | "title" | "href"
		>,
		SuiStyleType {
	/** Title of the MenuGroup. */
	title: string
	/** URL to navigate to when the MenuGroup is clicked. */
	href?: string
	/** Additional class name(s) to be applied to the MenuGroup. */
	className?: string
	/** Children elements to be rendered inside the MenuGroup. */
	children?: React.ReactNode
}

// Represents the base props for a DropdownMenu component.
interface DropdownMenuBaseProps extends SuiStyleType {
	id: string | number // Unique identifier for the dropdown menu item.
	label: React.ReactNode | string // Content to display as the label for the dropdown menu item.
}

// Props for an individual item within the dropdown menu.
interface MenuItemProps extends DropdownMenuBaseProps {
	props: Omit<DropdownMenuItemProps, "children"> // Additional props for the underlying MenuItem component.
}

// Props for a group of dropdown menu items.
interface MenuGroupProps extends DropdownMenuBaseProps {
	menus: Array<MenuItemProps> // An array of MenuItemProps representing the items in the group.
}

/**
 * Represents the properties for a dropdown component.
 */
interface DropdownProps
	extends OmitNestedKey<
			SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
			"htmlProps",
			"className"
		>,
		SuiStyleType {
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
	 * Expected type for menu object in array
	 */
	menu?: Array<MenuItemProps | MenuGroupProps>
	/**
	 * Filter button icon
	 */
	buttonIcon?: IconsNamesType
	/**
	 * Filter button icon
	 */
	colorScheme?: ButtonProps["colorScheme"]
	/**
	 * On click on Menu Item
	 */
	onMenuClick?(id: string | number, e?: React.ChangeEvent<unknown>): void
	/**
	 * Dropdown popover direction
	 */
	placement?: "" | "left" | "right"
	/**
	 * Render custom content on top of the menu items
	 */
	renderContentOnTop?: boolean
	/**
	 * The content of the dropdown.
	 */
	children?: React.ReactNode
	/**
	 * Dropdown Trigger
	 */
	trigger?: React.ReactNode
	/**
	 * whther to hide the label of the button or not
	 */
	isResponsive?: boolean
}

// Type definition for the modal handling functions
type DropdownRefProps = {
	open: () => void
	close: () => void
	toggle: () => void
}

export type {
	DropdownProps,
	DropdownRefProps,
	DropdownMenuGroupProps,
	DropdownMenuItemProps,
	DropdownMenuProps,
	MenuItemProps,
	MenuGroupProps,
}
