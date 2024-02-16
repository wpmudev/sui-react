import React, { useEffect, useId } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { TreeViewItemProps } from "./tree-view.types"
import { TreeViewInfo } from "./tree-view-info"
import { useTreeViewContext } from "./tree-view-context"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * TreeViewItem Component
 *
 * A component that represents an item in the tree view. It can be either a leaf node
 * (not a group) or a group node with nested items.
 *
 * @param  root0
 * @param  root0.id
 * @param  root0.groupId
 * @param  root0.icon
 * @param  root0.isChecked
 * @param  root0.isGroup
 * @param  root0.isExpanded
 * @param  root0.isDisabled
 * @param  root0.className
 * @param  root0.children
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
	...props
}: TreeViewItemProps): JSX.Element => {
	const { suiInlineClassname } = useStyles(props, className ?? "")
	// Generate class names
	const classNames = generateCN("sui-tree-view__item", {}, suiInlineClassname)

	// Get the tree view context to access configuration
	const context = useTreeViewContext()

	const uniqueId = useId()

	if (!id) {
		id = uniqueId
	}

	const itemId = id

	// Default children content
	children = useDefaultChildren(children, "{item content}")

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
