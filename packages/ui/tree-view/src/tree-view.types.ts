import { IconsNamesType } from "@wpmudev/sui-icons"
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
	onChange?(items: Record<string, any>[]): void // onChange callback
}

/**
 * Represents the properties for a tree view item component.
 */
interface TreeViewItemProps extends TreeViewProps {
	id?: string // Unique ID for the tree view item
	groupId?: string
	icon?: IconsNamesType // Icon to display with the tree view item
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
	parentGroupId?: string
}

/**
 * Represents the properties for a tree view item with additional information component.
 */
interface TreeViewInfoProps
	extends Pick<TreeViewItemProps, "isExpanded" | "isDisabled" | "id"> {
	icon: TreeViewItemProps["icon"]
	isChecked?: boolean
	children?: React.ReactNode // Additional information to display with the item
	onClick?: () => void // Callback function for when the item is clicked
	_groupId?: TreeViewItemProps["groupId"]
	_isGroup?: TreeViewItemProps["isGroup"]
	_onGroupCheckClick?: (checked: boolean) => void // Callback function for when group item clicked
}

/**
 * Represents the context properties for the tree view component.
 */
interface TreeViewContextProps {
	id?: string // Unique ID for the tree view context
	checkList?: Record<string, boolean>[] // List of checked items in the tree view
	items: Record<string, any>
	setItems(items: TreeViewContextProps["items"]): void
	allowCheck?: boolean
	showIcons?: boolean
	onCheck(
		id: string,
		isChecked: boolean,
		type: string,
		groupId?: string,
		isGroup?: boolean,
	): void
}

/**
 * Represents the properties for the tree view provider component.
 */
interface TreeViewProviderProps extends Pick<TreeViewProps, "children"> {
	value: TreeViewProps | TreeViewContextProps
}

interface TreeViewCheckType {
	id: string
	group?: string
	isChecked?: boolean
	type: "single" | "group"
}

// Exporting the interfaces
export type {
	TreeViewProps,
	TreeViewItemProps,
	TreeViewGroupProps,
	TreeViewContextProps,
	TreeViewProviderProps,
	TreeViewInfoProps,
	TreeViewCheckType,
}
