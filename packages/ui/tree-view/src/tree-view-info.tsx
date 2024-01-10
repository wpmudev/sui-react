import React, {
	useCallback,
	useState,
	useRef,
	useEffect,
	RefObject,
} from "react"

import { useInteraction } from "@wpmudev/sui-hooks"
import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { Checkbox } from "@wpmudev/sui-checkbox"
import Icons from "@wpmudev/sui-icons"

import { TreeViewInfoProps } from "./tree-view.types"
import { useTreeViewContext } from "./tree-view-context"
import { getCheckboxState } from "./helpers"

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
	isChecked = false,
	isIndeterminate = false,
	isDisabled = false,
	children = null,
	onClick = () => {},
	_onGroupCheckClick = () => {},
	_groupId,
	_isGroup = false,
}) => {
	// Manage interaction methods
	const [isHovered, isFocused, interactionMethods] = useInteraction({})

	// Generate class names
	const classNames = generateCN("sui-tree-view__info", {
		active: isExpanded,
		disabled: isDisabled,
		hover: isHovered,
		focus: isFocused,
	})

	// Get the tree view context to access configuration
	const ctx = useTreeViewContext()

	// Determine the icon to use based on the item's type and state
	const TickIcon = isExpanded ? Icons?.ChevronDown : Icons?.ChevronRight
	let ItemIcon = Icons?.FileCode

	// Use Folder icons if the item is a group
	if (_isGroup) {
		ItemIcon = isExpanded ? Icons?.FolderOpen : Icons?.FolderClose
	}

	// Use the passed icon, if available
	if (icon) {
		ItemIcon = Icons[icon]
	}

	// Replace with lock icon when the item is disabled
	if (isDisabled) {
		ItemIcon = Icons?.LockAlt
	}

	if (!_isGroup) {
		isChecked = getCheckboxState(id, _groupId, ctx?.items)
	}

	// Handle check click for checkboxes
	const onCheckClick = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			//ctx?.onCheck()
			e.stopPropagation()
			const { checked } = e.target

			if (_isGroup && _onGroupCheckClick) {
				_onGroupCheckClick(checked)
				return
			}

			// trigger ctx function
			ctx?.onCheck({
				id: id as string,
				isChecked: checked,
				type: _isGroup ? "group" : "single",
				group: _isGroup ? "" : _groupId,
			})
		},
		[_isGroup, ctx, id, _groupId, _onGroupCheckClick],
	)

	return (
		<div
			className={classNames}
			id={`info-${id}`}
			data-testid={_isGroup ? "" : "tree-view-item-info"}
			{...(!ctx?.allowCheck && {
				tabIndex: isDisabled ? -1 : 0,
				role: "button",
				onClick,
				onKeyDown: (e) => handleOnKeyDown(e, onClick),
				ariaLabel: id,
			})}
			{...(interactionMethods ?? {})}
		>
			{ctx?.allowCheck && (
				<div
					tabIndex={isDisabled ? -1 : 0}
					role="button"
					onClick={onClick}
					onKeyDown={(e) => handleOnKeyDown(e, onClick)}
					aria-label={id}
					style={{
						position: "absolute",
						inset: 0,
					}}
				></div>
			)}
			{_isGroup && <TickIcon size="sm" className="sui-tree-view__info-icon" />}
			{ctx?.allowCheck && (
				<div className="sui-tree-view__info-check">
					<Checkbox
						onChange={onCheckClick}
						isChecked={isChecked ?? false}
						isIndeterminate={isIndeterminate}
						isDisabled={isDisabled}
					/>
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
