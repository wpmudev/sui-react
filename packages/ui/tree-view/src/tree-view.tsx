import React, { useEffect, useState, useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

import { TreeViewCheckType, TreeViewProps } from "./tree-view.types"
import { TreeViewProvider } from "./tree-view-context"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * TreeView Component
 *
 * A tree view component that renders a hierarchical tree structure.
 *
 * @param  root0
 * @param  root0.className
 * @param  root0.children
 * @param  root0.allowCheck
 * @param  root0.showIcons
 * @param  root0.onChange
 * @param  root0._style
 * @param  root0._htmlProps
 *
 * @param  root0.id
 * @return {JSX.Element} - JSX Element representing the TreeView component
 */
const TreeView: React.FC<TreeViewProps> = ({
	id: uniqueId,
	className = "",
	children,
	allowCheck = false,
	showIcons = false,
	onChange = () => {},
	_htmlProps = {},
	_style = {},
}: TreeViewProps): JSX.Element => {
	const generatedId = useId()
	const treeViewId = uniqueId || `sui-tree-view-${generatedId}`
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

	const { suiInlineClassname } = useStyles(_style, className ?? "")

	return (
		<TreeViewProvider value={{ allowCheck, showIcons, items, setItems }}>
			{/* TreeView component renders a tree structure with a list */}
			<nav
				id={treeViewId}
				className={generateCN("sui-tree-view", {}, suiInlineClassname)}
				data-testid="tree-view"
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				<ul id={`${treeViewId}_list`} role="tree">
					{children}
				</ul>
			</nav>
		</TreeViewProvider>
	)
}

export { TreeView }
