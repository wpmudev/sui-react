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
	({ className, children, ...props }, ref) => {
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

		return (
			<div ref={dropdownRef} className={classNames}>
				<div>
					<Button
						className="sui-sidebar__dropdown--button"
						// aria-activedescendant={isOpen ? `${id}-${current}` : ""}
						onClick={() => setIsOpen(!isOpen)}
						endIcon="chevron-down"
						isFullWidth={true}
						{...props}
					>
						General
					</Button>
				</div>
				{isOpen && (
					<div
						id={id}
						tabIndex={-1}
						role="listbox"
						className="sui-sidebar__dropdown--list"
						// {...(label && { "aria-labelledby": `${id}__label` })}
					>
						{children}
					</div>
				)}
			</div>
		)
	},
)

SidebarDropdown.displayName = "Sidebar Dropdown"

// Publish component(s)
export { SidebarDropdown }
