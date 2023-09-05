import React from "react"

/**
 * Represents the properties for a tree view component.
 */
interface TreeViewProps {
	title?: string // Title for the tree view
	className?: string // CSS class name for the tree view
	children?: React.ReactNode // Content of the tree view
	allowCheck?: boolean // Flag to allow checking items in the tree view
	showIcons?: boolean // Flag to show icons in the tree view
}

/**
 * Represents the properties for a tree view item component.
 */
interface TreeViewItemProps extends TreeViewProps {
	id?: string // Unique ID for the tree view item
	icon?: string // Icon to display with the tree view item
	isGroup?: boolean // Flag to indicate if the item is a group in the tree view
	isExpanded?: boolean // Flag to indicate if the group item is expanded
	isDisabled?: boolean // Flag to disable the tree view item
}

/**
 * Represents the properties for a tree view group component.
 */
interface TreeViewGroupProps
	extends Pick<
		TreeViewItemProps,
		| "isGroup"
		| "isExpanded"
		| "id"
		| "icon"
		| "isDisabled"
		| "className"
		| "title"
	> {
	children?: React.ReactNode
}

/**
 * Represents the properties for a tree view item with additional information component.
 */
interface TreeViewInfoProps
	extends Pick<
		TreeViewItemProps,
		"isGroup" | "isExpanded" | "icon" | "isDisabled" | "id"
	> {
	children?: React.ReactNode // Additional information to display with the item
	onClick?: () => void // Callback function for when the item is clicked
}

/**
 * Represents the context properties for the tree view component.
 */
interface TreeViewContextProps
	extends Pick<TreeViewProps, "allowCheck" | "showIcons"> {
	id?: string // Unique ID for the tree view context
	checkList?: Record<string, boolean>[] // List of checked items in the tree view
	onCheck?: () => void // Callback function for when an item is checked/unchecked
}

/**
 * Represents the properties for the tree view provider component.
 */
interface TreeViewProviderProps extends Pick<TreeViewProps, "children"> {}

// Exporting the interfaces
export type {
	TreeViewProps,
	TreeViewItemProps,
	TreeViewGroupProps,
	TreeViewContextProps,
	TreeViewProviderProps,
	TreeViewInfoProps,
}
