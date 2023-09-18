import React, {
	useRef,
	useState,
	useId,
	forwardRef,
	useImperativeHandle,
} from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { useOuterClick } from "@wpmudev/sui-hooks"

import { DropdownMenu } from "./dropdown-menu"
import { DropdownMenuItem } from "./dropdown-menu-item"
import { DropdownMenuGroup } from "./dropdown-menu-group"

import { DropdownProps, DropdownRefProps } from "./dropdown.types"

/**
 * Dropdown Component - A reusable dropdown UI component.
 *
 * @param {DropdownProps} props - The properties and event handlers for the Dropdown component.
 * @return {JSX.Element} JSX Element representing the Dropdown component.
 */
const Dropdown: React.FC<DropdownProps> = forwardRef<
	DropdownRefProps,
	DropdownProps
>(
	(
		{
			label,
			className,
			isSmall,
			iconOnly,
			isFixedHeight = true,
			current,
			children,
			menu,
			direction,
			buttonIcon,
			onMenuClick,
			trigger = null,
			renderContentOnTop,
			...props
		}: DropdownProps,
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

		// Generate classes for the dropdown's wrapper based on the component's props.
		const wrapperClasses = generateCN(
			"sui-dropdown",
			{
				sm: isSmall,
				open: isOpen,
			},
			className,
		)

		// Function to recursively render menu items and groups.
		const renderMenus = (menus) => {
			return (menus || [])?.map((menuItem, index) => {
				// If it's a group item, render the MenuGroup component.
				if (!!menuItem.menus) {
					return (
						<DropdownMenuGroup key={index} title={menuItem.label}>
							{renderMenus(menuItem.menus)}
						</DropdownMenuGroup>
					)
				}

				// Bind onClick with onMenuClick prop
				if (onMenuClick) {
					menuItem.props.onClick = (e) => onMenuClick(menuItem.id, e)
				}

				// Otherwise, render the MenuItem component.
				return (
					<DropdownMenuItem key={index} {...menuItem.props}>
						{menuItem.label}
					</DropdownMenuItem>
				)
			})
		}

		return (
			<div ref={dropdownRef} className={wrapperClasses}>
				{!!trigger ? (
					trigger
				) : (
					<div>
						<Button
							startIcon={buttonIcon ?? "menu"}
							iconOnly={iconOnly ?? false}
							color="black"
							appearance="secondary"
							isSmall={isSmall ?? false}
							aria-activedescendant={isOpen ? `${id}-${current}` : ""}
							onClick={() => setIsOpen(!isOpen)}
							{...(!iconOnly && { endIcon: "chevron-down" })}
							{...props}
						>
							{label}
						</Button>
					</div>
				)}
				<div
					id={id}
					tabIndex={-1}
					role="listbox"
					className={generateCN("sui-dropdown__popover", {
						[`direction-${direction}`]: !isEmpty(direction ?? ""),
						"fixed-height": isFixedHeight,
					})}
					{...(label && { "aria-labelledby": `${id}__label` })}
				>
					{renderContentOnTop && !!children && (
						<div className="sui-dropdown__menu-content">{children}</div>
					)}
					{/* Render the dropdown menu items */}
					{!!menu && (
						<DropdownMenu className="sui-dropdown__menu-nav">
							{renderMenus(menu)}
						</DropdownMenu>
					)}
					{/* Render additional children passed to the Dropdown component */}
					{!!children && !renderContentOnTop && (
						<div className="sui-dropdown__menu-content">{children}</div>
					)}
				</div>
			</div>
		)
	},
)

Dropdown.displayName = "Dropdown"

export { Dropdown }
