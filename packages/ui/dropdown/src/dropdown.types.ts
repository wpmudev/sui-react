import React, {
	CSSProperties,
	HTMLProps,
	KeyboardEvent,
	ReactNode,
} from "react"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { ButtonProps } from "@wpmudev/sui-button"
import {
	OmitNestedKey,
	SuiHTMLAttributes,
	SuiStyleType,
} from "@wpmudev/sui-utils"
import { CheckboxProps } from "@wpmudev/sui-checkbox"

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
interface DropdownMenuItemProps extends SuiStyleType, SuiHTMLAttributes {
	_type?: DropdownProps["type"]
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
	 * Makes dropdown disabled
	 */
	isSelected?: boolean
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
		| "danger"
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
	/**
	 * Used in "select-checkbox" mode
	 */
	isChecked?: boolean

	variable?: ReactNode | string // Content to display as the variable for the dropdown menu item.
	description?: string // Content to display as the description for the dropdown menu item.

	_checkboxProps?: CheckboxProps
}

/**
 * Props for MenuGroup component.
 */
interface DropdownMenuGroupProps
	extends OmitNestedKey<
			SuiHTMLAttributes<HTMLProps<HTMLLIElement>>,
			"_htmlProps",
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
	variable?: string // Content to display as the variable for the dropdown menu item.
	description?: string // Content to display as the description for the dropdown menu item.
	isSelected?: boolean
}

// Props for an individual item within the dropdown menu.
interface MenuItemProps extends DropdownMenuBaseProps {
	props?: Omit<DropdownMenuItemProps, "children"> & {
		_checkboxProps?: CheckboxProps // Extend _checkboxProps here
	} // Additional props for the underlying MenuItem component.
}

// Props for a group of dropdown menu items.
interface MenuGroupProps extends DropdownMenuBaseProps {
	menus: Array<MenuItemProps> // An array of MenuItemProps representing the items in the group.
}

type getOptionOptTypes = {
	page?: number
}

/**
 * Represents the properties for a dropdown component.
 */
interface DropdownProps
	extends OmitNestedKey<
			SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
			"_htmlProps",
			"className"
		>,
		SuiStyleType {
	/**
	 * The type of dropdown.
	 */
	type?: "" | "default" | "select" | "select-checkbox" | "select-variable"
	/**
	 * The label for the dropdown.
	 */
	label?: string
	/**
	 * The custom class name for the dropdown.
	 */
	className?: string
	/**
	 * Indicates whether the dropdown should be displayed as small or not.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the dropdown should be displayed as small or not.
	 */
	selected?:
		| string
		| Array<MenuItemProps | MenuGroupProps>
		| Record<string, any>
	/**
	 * Indicates whether the dropdown should be displayed as small or not.
	 */
	selectAll?: (
		options: Array<MenuItemProps | MenuGroupProps>,
		selected: boolean,
	) => void
	/**
	 * Indicates whether the dropdown has a call-to-action button.
	 */
	hasCta?: boolean
	/**
	 * Indicates whether the dropdown should have multiselect option.
	 */
	isMultiSelect?: boolean
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
	buttonProps?: ButtonProps
	/**
	 * Filter button icon
	 */
	colorScheme?: ButtonProps["colorScheme"]
	/**
	 * On click on Menu Item
	 */
	onMenuClick?(
		option: Record<string, any> | string,
		e?: React.ChangeEvent<unknown>,
	): void
	/**
	 * Detect dropdown state (open or closed)
	 *
	 * @param isOpen
	 */
	onToggle?(isOpen: boolean): void
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
	/**
	 * Display in full width
	 */
	isFluid?: boolean
	/**
	 * Dropdown popover direction
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * Whether dropdown is disabled.
	 */
	isDisabled?: boolean
	/**
	 * Close dropdown on outer click
	 */
	closeOnOuterClick?: boolean
	/**
	 * Close dropdown on menu item click
	 */
	closeOnMenuItemClick?: boolean
	/**
	 * Allow search
	 */
	allowSearch?: boolean
	/**
	 * Callback function for search
	 *
	 * @param {string} query
	 */
	onSearch?: (query: string) => void
	/**
	 * When options are going to be loaded from API, pass true
	 */
	isAsync?: boolean
	/**
	 * Useful when isAsync option is enabled
	 */
	asyncOptions?: {
		perPage: number
		totalItems?: number
	}
	/**
	 * Callback for loading options from API
	 */
	getOptions?: (
		query: string,
		opt: getOptionOptTypes,
		options?: DropdownProps["menu"],
	) => Promise<any>
	/**
	 * Menu custom width
	 */
	menuCustomWidth?: number
	/**
	 * Custom search placeholder
	 */
	searchPlaceholder?: string
	/**
	 * Update options in parent.
	 */
	updateOptions?: (options: { [key: string]: any }[]) => void
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
