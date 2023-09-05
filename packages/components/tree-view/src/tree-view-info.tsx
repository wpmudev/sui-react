import React, { useCallback, useContext, useState } from "react"
import { useInteraction } from "@wpmudev/sui-hooks"

import { generateCN, isEmpty, handleOnKeyDown } from "@wpmudev/sui-utils"
import { Checkbox } from "@wpmudev/sui-checkbox"
import * as Icons from "@wpmudev/sui-icons"

import { TreeViewContextProps, TreeViewInfoProps } from "./tree-view.types"
import { TreeViewContext } from "./tree-view-context"

/**
 * TreeViewInfo Component
 *
 * A component that represents the information displayed for each item
 * in the tree view, such as the item's title, icon, and expand/collapse button.
 *
 * @param {TreeViewInfoProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the TreeViewInfo component
 */
const TreeViewInfo: React.FC<TreeViewInfoProps> = ({
	id,
	icon,
	isExpanded = false,
	isDisabled = false,
	children = null,
	isGroup = false,
	onClick = () => {},
}) => {
	// Manage interaction methods
	const [isHovered, isFocused, interactionMethods] = useInteraction({})
	const [isChecked, setIsChecked] = useState<boolean>(false)

	// Generate class names
	const classNames = generateCN("sui-tree-view__info", {
		active: isExpanded,
		disabled: isDisabled,
		hover: isHovered,
		focus: isFocused,
	})

	// Get the tree view context to access configuration
	const ctx = useContext<TreeViewContextProps | null>(TreeViewContext)

	// Determine the icon to use based on the item's type and state
	const TickIcon = isExpanded ? Icons?.ChevronDown : Icons?.ChevronRight
	let ItemIcon = Icons?.FileCode

	// Use Folder icons if the item is a group
	if (isGroup) {
		ItemIcon = isExpanded ? Icons?.FolderOpen : Icons?.FolderClose
	}

	// Use the passed icon, if available
	if (!!icon && !isEmpty(icon ?? "")) {
		ItemIcon = Icons?.[icon ?? ""]
	}

	// Replace with lock icon when the item is disabled
	if (isDisabled) {
		ItemIcon = Icons?.LockAlt
	}

	// Handle check click for checkboxes
	const onCheckClick = useCallback((e) => {
		// ctx?.onCheck()
		setIsChecked(e.target.checked)
	}, [])

	return (
		<div
			tabIndex={isDisabled ? -1 : 0}
			role="button"
			className={classNames}
			onClick={onClick}
			onKeyDown={(e) => handleOnKeyDown(e, onClick)}
			id={id}
			{...(interactionMethods ?? {})}
		>
			{isGroup && <TickIcon size="sm" className="sui-tree-view__info-icon" />}
			{ctx?.allowCheck && (
				<div className="sui-tree-view__info-check">
					{/* Render the Checkbox component for item selection */}
					<Checkbox value={id} onChange={onCheckClick} isChecked={isChecked} />
				</div>
			)}
			<div className="sui-tree-view__info-title">
				{!!ItemIcon && (!!ctx?.showIcons || isDisabled) && (
					// Render the item's icon, if available and allowed
					<ItemIcon size="sm" className="sui-tree-view__info-icon" />
				)}
				{/* Render the item's title */}
				<span id={`${id}-title`}>{children}</span>
			</div>
		</div>
	)
}

export { TreeViewInfo }
