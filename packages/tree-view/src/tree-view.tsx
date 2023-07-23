import React, { useContext, useId } from "react"

import { generateCN } from "@wpmudev/react-utils"

import { TreeViewProps } from "./tree-view.types"
import { TreeViewContext, TreeViewProvider } from "./tree-view-context"

const TreeView: React.FC<TreeViewProps> = ({
	className = "",
	children,
	allowCheck,
	showIcons,
}) => {
	// Generate class names
	const classNames = generateCN("sui-tree-view", {}, className ?? "")
	const id = useId()
	const treeViewId = `sui-tree-view-${id}`

	return (
		<TreeViewProvider value={{ allowCheck, showIcons, id: treeViewId }}>
			<nav className={classNames}>
				<ul role="tree">{children}</ul>
			</nav>
		</TreeViewProvider>
	)
}

export { TreeView }
