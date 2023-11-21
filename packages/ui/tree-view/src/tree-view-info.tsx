import React, {
	useCallback,
	useContext,
	useState,
	useRef,
	useEffect,
} from "react"
import { useInteraction } from "@wpmudev/sui-hooks"
import { createPortal } from "react-dom"
import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { Checkbox } from "@wpmudev/sui-checkbox"
import Icons from "@wpmudev/sui-icons"
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

	// The DOM  element where we render the Treeview Checkbox
	const [checkboxDomContainer, setCheckBoxDomContainer] =
		useState<Element | null>(null)

	// The element ref where we render the checkbox
	const checkboxPortalRef = useRef(null)

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
	if (icon) {
		ItemIcon = Icons[icon]
	}

	// Replace with lock icon when the item is disabled
	if (isDisabled) {
		ItemIcon = Icons?.LockAlt
	}

	// Handle check click for checkboxes
	const onCheckClick = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		//ctx?.onCheck()
		e.stopPropagation()
		//e.preventDefault()
		setIsChecked(e.target.checked)
	}, [])

	// Updating the DOM element state when its "ref" becomes available
	useEffect(() => {
		if (checkboxPortalRef.current) {
			setCheckBoxDomContainer(checkboxPortalRef.current)
		}
	}, [checkboxPortalRef, ctx?.allowCheck])

	return (
		<>
			{/* 
				Rendering the Checkbox component outside the Tree View Info, to comply with
				the accessibility principle that "Interactive controls must not be nested." 
				This approach ensures that the Checkbox can be interacted with by all users, 
				including those relying on assistive technologies, without violating accessibility guidelines.
			 */}
			{ctx?.allowCheck &&
				checkboxDomContainer &&
				createPortal(
					<Checkbox onChange={onCheckClick} isChecked={isChecked} />,
					checkboxDomContainer,
				)}
			<div
				tabIndex={isDisabled ? -1 : 0}
				role="button"
				className={classNames}
				onClick={onClick}
				onKeyDown={(e) => handleOnKeyDown(e, onClick)}
				id={id}
				data-testid={isGroup ? "" : "tree-view-item-info"}
				{...(interactionMethods ?? {})}
			>
				{isGroup && <TickIcon size="sm" className="sui-tree-view__info-icon" />}
				{ctx?.allowCheck && (
					<div className="sui-tree-view__info-check">
						{/* Render the Checkbox component for item selection */}
						{/* The container where the checkbox element will be displayed if the Treeview has a Checkbox */}
						<div ref={checkboxPortalRef} />
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
		</>
	)
}

export { TreeViewInfo }
