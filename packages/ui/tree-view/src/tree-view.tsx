import React, { useEffect, useState } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { TreeViewCheckType, TreeViewProps } from "./tree-view.types"
import { TreeViewProvider } from "./tree-view-context"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * TreeView Component
 *
 * A tree view component that renders a hierarchical tree structure.
 *
 * @return {JSX.Element} - JSX Element representing the TreeView component
 */
const TreeView: React.FC<TreeViewProps> = ({
	className = "",
	children,
	allowCheck = false,
	showIcons = false,
	onChange = () => {},
	...props
}) => {
	const [items, setItems] = useState<TreeViewCheckType[]>([])

	// Default children content
	children = useDefaultChildren(children, "{TreeView Content}")

	useEffect(() => {
		if (onChange) {
			onChange(
				items
					.filter((item) => "single" === item?.type)
					.map(({ id, isChecked, group }) => ({ id, isChecked, group })),
			)
		}
	}, [items, onChange])

	const { suiInlineClassname } = useStyles(props, className ?? "")

	return (
		<TreeViewProvider value={{ allowCheck, showIcons, items, setItems }}>
			{/* TreeView component renders a tree structure with a list */}
			<nav
				className={generateCN("sui-tree-view", {}, suiInlineClassname)}
				data-testid="tree-view"
			>
				<ul role="tree">{children}</ul>
			</nav>
		</TreeViewProvider>
	)
}

export { TreeView }
