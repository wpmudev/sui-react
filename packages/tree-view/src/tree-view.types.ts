import React from "react"

/**
 * Represents the properties for a tree view component.
 */
interface TreeViewProps {
	title?: string
	/**
	 * Optional CSS class name for the tree view.
	 */
	className?: string
	/**
	 * The content of the tree view.
	 */
	children?: React.ReactNode
	allowCheck?: boolean
	showIcons?: boolean
}

interface TreeViewItemProps extends TreeViewProps {
	id: string
	icon?: string
	isGroup?: boolean
	isExpanded?: boolean
	isDisabled?: boolean
}

interface TreeViewGroupProps
	extends Pick<TreeViewItemProps, "isGroup" | "isExpanded" | "id"> {}

interface TreeViewInfoProps
	extends Pick<
		TreeViewItemProps,
		"isGroup" | "isExpanded" | "icon" | "isDisabled" | "id"
	> {
	children?: React.ReactNode
	onClick?: () => void
}

interface TreeViewContextProps
	extends Pick<TreeViewProps, "allowCheck" | "showIcons"> {
	id?: string
	checkList?: Record<string, boolean>[]
	onCheck?: () => void
}

interface TreeViewProviderProps extends Pick<TreeViewProps, "children"> {}

export {
	TreeViewProps,
	TreeViewItemProps,
	TreeViewGroupProps,
	TreeViewContextProps,
	TreeViewProviderProps,
	TreeViewInfoProps,
}
