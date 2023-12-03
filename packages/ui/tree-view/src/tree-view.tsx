import React, { useEffect, useState } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { TreeViewProps } from "./tree-view.types"
import { TreeViewProvider } from "./tree-view-context"

/**
 * TreeView Component
 *
 * A tree view component that renders a hierarchical tree structure.
 *
 * @param {TreeViewProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the TreeView component
 */
const TreeView: React.FC<TreeViewProps> = ({
	className = "",
	children,
	allowCheck,
	showIcons,
	onChange = () => {},
}) => {
	const [items, setItems] = useState([])
	allowCheck = true

	useEffect(() => {
		if (onChange) {
			onChange(
				items
					.filter((item) => "single" === item.type)
					.map(({ id, isChecked, group }) => ({ id, isChecked, group })),
			)
		}
	}, [items, onChange])

	return (
		<TreeViewProvider value={{ allowCheck, showIcons, items, setItems }}>
			{/* TreeView component renders a tree structure with a list */}
			<nav
				className={generateCN("sui-tree-view", {}, className ?? "")}
				data-testid="tree-view"
			>
				<ul role="tree">{children}</ul>
			</nav>
		</TreeViewProvider>
	)
}

export { TreeView }
