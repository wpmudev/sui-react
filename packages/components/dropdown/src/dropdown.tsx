import React, { useRef, useState, useCallback, useId } from "react"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { useOuterClick } from "@wpmudev/sui-hooks"
import { Menu, MenuItem, MenuGroup } from "@wpmudev/sui-menu"

import { DropdownProps, DropdownOptionProps } from "./dropdown.types"

const Dropdown: React.FC<DropdownProps> = ({
	id,
	label,
	isSmall,
	isLabelHidden,
	current,
	children,
	menu,
}) => {
	const ref = useRef<HTMLDivElement | null>(null)
	let uuid = `sui-dropdown-${useId()}`

	// use id from prop list if exists
	if (id) {
		uuid = id
	}

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [active, setActive] = useState<number>(current ?? 0)

	useOuterClick(ref, () => {
		setIsOpen(false)
	})

	const wrapperClasses = generateCN("sui-dropdown", {
		sm: isSmall,
		open: isOpen,
	})

	const onOptionSelect = useCallback(
		(option: DropdownOptionProps, index: number) => {
			setIsOpen(false)
			setActive(index)
		},
		[],
	)

	const renderMenus = (menus) => {
		return (menus || [])?.map((menuItem, index) => {
			// its a group item
			if (!!menuItem.menus) {
				return (
					<MenuGroup key={index} title={menuItem.label}>
						{renderMenus(menuItem.menus)}
					</MenuGroup>
				)
			}
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
			onClick={(e) => e.stopPropagation()}
			onKeyDown={() => {}}
		>
			<Button
				icon="menu"
				iconPosition="start"
				color="black"
				iconTrail="chevron-down"
				appearance="secondary"
				isSmall={!!isSmall}
				aria-activedescendant={isOpen ? `${uuid}-${current}` : ""}
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isLabelHidden ? label : undefined}
			</Button>
			<div
				tabIndex="-1"
				role="listbox"
				id={uuid}
				className="sui-dropdown__menu"
				{...(label && { "aria-labelledby": `${uuid}__label` })}
				onClick={() => setIsOpen(false)}
				onKeyDown={(e) =>
					handleOnKeyDown(e, () => {
						setIsOpen(false)
					})
				}
			>
				{!!menu && <Menu>{renderMenus(menu)}</Menu>}
				{children}
			</div>
		</div>
	)
}

export { Dropdown }
