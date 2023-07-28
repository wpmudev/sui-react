import React, { useContext } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { TreeViewContextProps, TreeViewItemProps } from "./tree-view.types"
import { TreeViewInfo } from "./tree-view-info"
import { TreeViewContext } from "./tree-view-context"

/**
 * TreeViewItem Component
 *
 * A component that represents an item in the tree view. It can be either a leaf node
 * (not a group) or a group node with nested items.
 *
 * @param {TreeViewItemProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the TreeViewItem component
 */
const TreeViewItem: React.FC<TreeViewItemProps> = ({
	id = "",
	icon,
	isGroup = false,
	isExpanded = false,
	isDisabled = false,
	className = "",
	children,
}) => {
	// Generate class names
	const classNames = generateCN("sui-tree-view__item", {}, className ?? "")

	// Get the tree view context to access configuration
	const ctx = useContext<TreeViewContextProps | null>(TreeViewContext)
	const itemId = `${ctx?.id}-item-${id}`

	return (
		<li
			id={itemId}
			className={classNames}
			role="treeitem"
			aria-labelledby={`${itemId}-info`}
			aria-describedby={`${itemId}-info ${itemId}-info-title`}
			aria-expanded={isExpanded}
			aria-selected={false}
		>
			{/* Render the children directly if the item is a group */}
			{isGroup ? (
				children
			) : (
				/* Render the TreeViewInfo component for leaf nodes */
				<TreeViewInfo
					id={`${itemId}-info`}
					isGroup={false}
					icon={icon ?? ""}
					isDisabled={isDisabled ?? false}
				>
					{children}
				</TreeViewInfo>
			)}
		</li>
	)
}

export { TreeViewItem }
