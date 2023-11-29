import React, {
	useState,
	useId,
	useRef,
	useImperativeHandle,
	forwardRef,
} from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { useOuterClick } from "@wpmudev/sui-hooks"
import { Button } from "@wpmudev/sui-button"

// Import required element(s)
import { SidebarProps } from "./sidebar.types"

// Build sidebar component
const SidebarDropdown: React.FC<SidebarProps> = forwardRef(
	(
		{ className, selectedItemName = "", children, ...props }: SidebarProps,
		ref,
	) => {
		// Create a ref to access the dropdown's outer container element.
		const dropdownRef = useRef<HTMLDivElement | null>(null)

		// Generate a unique identifier for the dropdown component.
		const id = `sui-dropdown-${useId()}`

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

		const classNames = generateCN("sui-sidebar__dropdown", {}, className)

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
			<div ref={dropdownRef} className={classNames}>
				<div>
					<Button
						id={`${id}__label`}
						className="sui-sidebar__dropdown--button"
						// aria-activedescendant={isOpen ? `${id}-${current}` : ""}
						onClick={() => setIsOpen(!isOpen)}
						endIcon="ChevronDown"
						isFullWidth={true}
						{...props}
					>
						{selectedItemName}
					</Button>
				</div>
				{isOpen && (
					<div
						id={id}
						tabIndex={-1}
						role="listbox"
						className="sui-sidebar__dropdown--list"
						aria-labelledby={`${id}__label`}
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
