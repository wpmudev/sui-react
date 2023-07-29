import React, { useRef, useState, useId } from "react"

import {
	generateCN,
	handleEventDefault,
	handleOnKeyDown,
} from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { useOuterClick } from "@wpmudev/sui-hooks"
import { Menu, MenuItem, MenuGroup } from "@wpmudev/sui-menu"

import { DropdownProps } from "./dropdown.types"

/**
 * Dropdown Component - A reusable dropdown UI component.
 *
 * @param {DropdownProps} props - The properties and event handlers for the Dropdown component.
 * @return {JSX.Element} JSX Element representing the Dropdown component.
 */
const Dropdown: React.FC<DropdownProps> = ({
	label,
	isSmall,
	isLabelHidden,
	current,
	children,
	menu,
	onMenuClick,
}) => {
	// Create a ref to access the dropdown's outer container element.
	const ref = useRef<HTMLDivElement | null>(null)

	// Generate a unique identifier for the dropdown component.
	const id = `sui-dropdown-${useId()}`

	// State to manage the dropdown's open/closed status.
	const [isOpen, setIsOpen] = useState<boolean>(false)

	// Handle the closing of the dropdown when clicking outside the component.
	useOuterClick(ref, () => {
		setIsOpen(false)
	})

	// Generate classes for the dropdown's wrapper based on the component's props.
	const wrapperClasses = generateCN("sui-dropdown", {
		sm: isSmall,
		open: isOpen,
	})

	// Function to recursively render menu items and groups.
	const renderMenus = (menus) => {
		return (menus || [])?.map((menuItem, index) => {
			// If it's a group item, render the MenuGroup component.
			if (!!menuItem.menus) {
				return (
					<MenuGroup key={index} title={menuItem.label}>
						{renderMenus(menuItem.menus)}
					</MenuGroup>
				)
			}

			// Bind onClick with onMenuClick prop
			if (onMenuClick) {
				menuItem.props.onClick = (e) => onMenuClick(menuItem.id, e)
			}

			// Otherwise, render the MenuItem component.
			return (
				<MenuItem key={index} {...menuItem.props}>
					{menuItem.label}
				</MenuItem>
			)
		})
	}

	return (
		<div
			role="button"
			tabIndex={0}
			ref={ref}
			className={wrapperClasses}
			onClick={(e) => handleEventDefault(e, true)}
			onKeyDown={(e) => handleEventDefault(e, true)}
		>
			<Button
				icon="menu"
				iconPosition="start"
				color="black"
				iconTrail="chevron-down"
				appearance="secondary"
				isSmall={!!isSmall}
				aria-activedescendant={isOpen ? `${id}-${current}` : ""}
				onClick={() => setIsOpen(!isOpen)}
			>
				{/* Show label if 'isLabelHidden' prop is not true */}
				{!isLabelHidden ? label : undefined}
			</Button>
			<div
				id={id}
				tabIndex={-1}
				role="listbox"
				className="sui-dropdown__menu"
				{...(label && { "aria-labelledby": `${id}__label` })}
				onClick={() => setIsOpen(false)}
				onKeyDown={(e) =>
					handleOnKeyDown(e, () => {
						setIsOpen(false)
					})
				}
			>
				{/* Render the dropdown menu items */}
				{!!menu && (
					<Menu className="sui-dropdown__menu-nav">{renderMenus(menu)}</Menu>
				)}
				{/* Render additional children passed to the Dropdown component */}
				{!!children && (
					<div className="sui-dropdown__menu-content">{children}</div>
				)}
			</div>
		</div>
	)
}

export { Dropdown }
