import React, { useContext, useId } from "react"

import { generateCN } from "@wpmudev/react-utils"

import { TreeViewContextProps, TreeViewItemProps } from "./tree-view.types"
import { TreeViewInfo } from "./tree-view-info"
import { TreeViewContext } from "./tree-view-context"

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
			// aria-level=""
		>
			{isGroup ? (
				children
			) : (
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
