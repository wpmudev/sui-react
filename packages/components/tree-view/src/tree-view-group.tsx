import React, { useState } from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { TreeViewGroupProps } from "./tree-view.types"
import { TreeViewItem } from "./tree-view-item"
import { TreeViewInfo } from "./tree-view-info"

/**
 * TreeViewGroup Component
 *
 * A component that represents a group in the tree view.
 *
 * @param {TreeViewGroupProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the TreeViewGroup component
 */
const TreeViewGroup: React.FC<TreeViewGroupProps> = ({
	icon,
	title = "",
	className = "",
	children,
	isDisabled = false,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	// Generate class names
	const classNames = generateCN("sui-tree-view__group", {}, className ?? "")

	return (
		<TreeViewItem isExpanded={isOpen} isGroup={true}>
			{/* TreeViewInfo represents the group header with expand/collapse functionality */}
			<TreeViewInfo
				isExpanded={isOpen}
				onClick={() => setIsOpen(!isOpen)}
				isGroup={true}
				icon={icon ?? ""}
				isDisabled={isDisabled ?? false}
			>
				{title}
			</TreeViewInfo>
			<ul role="group" aria-label={title} className={classNames}>
				{/* Render child items within the group */}
				{children}
			</ul>
		</TreeViewItem>
	)
}

export { TreeViewGroup }
