import React, { useCallback, useContext } from "react"

import { generateCN, isEmpty } from "@wpmudev/react-utils"
import { Checkbox } from "@wpmudev/react-checkbox"

import { TreeViewContextProps, TreeViewInfoProps } from "./tree-view.types"
import { TreeViewContext } from "./tree-view-context"
import * as Icons from "@wpmudev/sui-icons"

const TreeViewInfo: React.FC<TreeViewInfoProps> = ({
	id,
	icon,
	isExpanded = false,
	isDisabled = false,
	children = null,
	isGroup = false,
	onClick = () => {},
}) => {
	// Generate class names
	const classNames = generateCN("sui-tree-view__info", {
		active: isExpanded,
		disabled: isDisabled,
	})

	const ctx = useContext<TreeViewContextProps | null>(TreeViewContext)
	const TickIcon = isExpanded ? Icons?.ChevronDown : Icons?.ChevronRight

	let ItemIcon = Icons?.FileCode

	// Use Folder icons if group
	if (isGroup) {
		ItemIcon = isExpanded ? Icons?.FolderOpen : Icons?.FolderClose
	}

	// Use passed icon
	if (!!icon && !isEmpty(icon ?? "")) {
		ItemIcon = Icons?.[icon ?? ""]
	}

	// Replace with lock icon when disabled
	if (isDisabled) {
		ItemIcon = Icons?.LockAlt
	}

	const onCheckClick = useCallback(() => {
		ctx?.onCheck()
	}, [])

	return (
		<div role="button" className={classNames} onClick={onClick} id={id}>
			{isGroup && <TickIcon size="xsm" className="sui-tree-view__info-icon" />}
			{ctx?.allowCheck && (
				<div className="sui-tree-view__info-check">
					<Checkbox value={id} onClick={onCheckClick} />
				</div>
			)}
			<div className="sui-tree-view__info-title">
				{!!ItemIcon && (!!ctx?.showIcons || isDisabled) && (
					<ItemIcon size="sm" className="sui-tree-view__info-icon" />
				)}
				<span id={`${id}-title`}>{children}</span>
			</div>
		</div>
	)
}

export { TreeViewInfo }
