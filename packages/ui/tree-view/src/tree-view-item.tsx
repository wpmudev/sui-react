import React, { useEffect } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { TreeViewItemProps } from "./tree-view.types"
import { TreeViewInfo } from "./tree-view-info"
import { useTreeViewContext } from "./tree-view-context"

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
	groupId = "",
	icon,
	isChecked = false,
	isGroup = false,
	isExpanded = false,
	isDisabled = false,
	className = "",
	children,
}) => {
	// Generate class names
	const classNames = generateCN("sui-tree-view__item", {}, className ?? "")

	// Get the tree view context to access configuration
	const context = useTreeViewContext()
	const itemId = id

	useEffect(() => {
		if (!isGroup && !isDisabled) {
			context?.onCheck({
				id: id ?? "",
				isChecked,
				type: isGroup ? "group" : "single",
				group: groupId,
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<li
			id={id}
			className={classNames}
			role="treeitem"
			aria-labelledby={id}
			aria-describedby={`${id} ${itemId}-info-title`}
			aria-expanded={isExpanded}
			aria-selected={false}
		>
			{/* Render the children directly if the item is a group */}
			{isGroup ? (
				children
			) : (
				/* Render the TreeViewInfo component for leaf nodes */
				<TreeViewInfo
					id={itemId ?? ""}
					icon={icon}
					isDisabled={isDisabled ?? false}
					_isGroup={false}
					_groupId={groupId}
				>
					{children}
				</TreeViewInfo>
			)}
		</li>
	)
}

export { TreeViewItem }
