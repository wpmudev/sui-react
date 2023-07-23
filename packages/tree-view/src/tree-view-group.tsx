import React, { useState } from "react"

import { generateCN } from "@wpmudev/react-utils"

import { TreeViewGroupProps } from "./tree-view.types"
import { TreeViewItem } from "./tree-view-item"
import { TreeViewInfo } from "./tree-view-info"

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
				{children}
			</ul>
		</TreeViewItem>
	)
}

export { TreeViewGroup }
