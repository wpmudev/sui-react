import React, { useCallback, useEffect, useState, ReactElement } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { TreeViewGroupProps } from "./tree-view.types"
import { TreeViewItem } from "./tree-view-item"
import { TreeViewInfo } from "./tree-view-info"
import { useTreeViewContext } from "./tree-view-context"
import { getGroupState } from "./helpers"

/**
 * TreeViewGroup Component
 *
 * A component that represents a group in the tree view.
 *
 * @param {TreeViewGroupProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the TreeViewGroup component
 */
const TreeViewGroup: React.FC<TreeViewGroupProps> = ({
	id,
	parentGroupId,
	icon,
	title = "",
	className = "",
	children,
	isDisabled = false,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const context = useTreeViewContext()

	// Generate class names
	const classNames = generateCN("sui-tree-view__group", {}, className ?? "")

	useEffect(() => {
		if (undefined !== parentGroupId) {
			context?.onCheck({
				id: id ?? "",
				isChecked: undefined,
				type: "group",
				group: parentGroupId,
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onGroupCheckboxClick = useCallback(
		(isChecked = false) => {
			context?.onCheck({
				id: "",
				isChecked,
				type: "group",
				group: id,
			})
		},
		[context, id],
	)

	// get checkbox state
	const checkboxState = getGroupState(id, context?.items)

	return (
		<TreeViewItem id={id} isExpanded={isOpen} isGroup={true}>
			{/* TreeViewInfo represents the group header with expand/collapse functionality */}
			<TreeViewInfo
				id={id}
				isExpanded={isOpen}
				onClick={() => setIsOpen(!isOpen)}
				isIndeterminate={"indeterminate" === checkboxState}
				isChecked={"all" === checkboxState}
				icon={icon}
				isDisabled={isDisabled ?? false}
				_isGroup={true}
				_onGroupCheckClick={onGroupCheckboxClick}
			>
				{title}
			</TreeViewInfo>
			<ul
				role="group"
				aria-label={title}
				className={classNames}
				data-test="tree-view-group"
			>
				{/* Render child items within the group */}
				{React.Children.map(children, (child, index) => {
					const type = ((child as React.ReactElement).type as React.FC).name

					return React.cloneElement(child as ReactElement, {
						...(child as React.ReactElement).props,
						groupId: id,
						...("TreeViewGroup" === type ? { parentGroupId: id } : {}),
					})
				})}
			</ul>
		</TreeViewItem>
	)
}

export { TreeViewGroup }
