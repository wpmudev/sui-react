import React, {
	useState,
	useId,
	useRef,
	useImperativeHandle,
	forwardRef,
} from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useOuterClick, useStyles } from "@wpmudev/sui-hooks"
import { Button } from "@wpmudev/sui-button"

// Import required element(s)
import { SidebarProps } from "./sidebar.types"

// Build sidebar component
const SidebarDropdown: React.FC<SidebarProps> = forwardRef(
	(
		{
			id,
			className,
			selectedItemName = "",
			children,
			_htmlProps,
			_style = {},
			buttonProps = {},
		}: SidebarProps,
		ref,
	) => {
		// Create a ref to access the dropdown's outer container element.
		const dropdownRef = useRef<HTMLDivElement | null>(null)

		// Generate a unique identifier for the dropdown component.
		const generatedId = useId()
		const sidebarDropdownId = id || `sui_sidebar_dropdown_${generatedId}`

		// State to manage the dropdown's open/closed status.
		const [isOpen, setIsOpen] = useState<boolean>(false)

		// Handle the closing of the dropdown when clicking outside the component.
		useOuterClick(dropdownRef, () => {
			setIsOpen(false)
		})

		useImperativeHandle(ref, () => ({
			open: () => setIsOpen(true),
			close: () => setIsOpen(false),
			toggle: () => setIsOpen(!isOpen),
		}))

		const { suiInlineClassname } = useStyles(_style, className)
		const classNames = generateCN(
			"sui-sidebar__dropdown",
			{},
			suiInlineClassname,
		)

		const childrenWithProps = React.Children.map(children, (child) => {
			if (React.isValidElement(child)) {
				const existingOnClick = child?.props?.onClick as
					| undefined
					| ((e: React.MouseEvent) => void) // Define the type of onClick function

				const newOnClick = (e: React.MouseEvent) => {
					if (existingOnClick) {
						existingOnClick(e)
					}
					setIsOpen(false)
				}

				return React.cloneElement(child as React.ReactElement, {
					onClick: newOnClick,
				})
			}
			return child
		})

		return (
			<div
				id={sidebarDropdownId}
				ref={dropdownRef}
				className={classNames}
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				<div>
					<Button
						id={`${sidebarDropdownId}-label`}
						className="sui-sidebar__dropdown--button"
						// aria-activedescendant={isOpen ? `${sidebarDropdownId}-${current}` : ""}
						onClick={() => setIsOpen(!isOpen)}
						endIcon="Hamburger"
						isFullWidth={true}
						{...buttonProps}
					>
						{selectedItemName}
					</Button>
				</div>
				{isOpen && (
					<div
						id={`${sidebarDropdownId}-list`}
						tabIndex={-1}
						role="listbox"
						className="sui-sidebar__dropdown--list"
						aria-labelledby={`${sidebarDropdownId}-label`}
					>
						{childrenWithProps}
					</div>
				)}
			</div>
		)
	},
)

SidebarDropdown.displayName = "Sidebar Dropdown"

// Publish component(s)
export { SidebarDropdown }
