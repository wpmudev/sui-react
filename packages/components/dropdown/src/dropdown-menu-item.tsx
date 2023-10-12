import React, { FC, Fragment, useId } from "react"

import { generateCN, handleOnKeyDown, isEmpty } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"

import * as Icons from "@wpmudev/sui-icons"
import { DropdownMenuItemProps } from "./dropdown.types"

// import { MenuItemProps } from "./menu.types"

// Define the MenuItem component
const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
	icon,
	href,
	className = "",
	children,
	isDisabled,
	onClick,
	variation = "",
	...props
}) => {
	// Use the useInteraction hook to manage hover and focus states
	const [isHovered, isFocused, methods] = useInteraction({})

	// Generate a unique ID for the menu item and its related elements
	const id = useId()
	const menuId = `sui-dropdown-menu-item-${id}`
	const menuTitleId = `${menuId}-title`

	// Determine the element tag name (either "li" or "a" based on the presence of href)
	let TagName: string = "li"
	if (!!href) {
		TagName = "a"
	}

	// Generate class names for the menu item
	const classNames = generateCN(
		"sui-dropdown__menu-item",
		{
			hover: isHovered,
			focus: isFocused,
			disabled: isDisabled,
			[variation]: !isEmpty(variation),
		},
		className,
	)

	// Check if an icon is specified and assign it to IconTag
	let IconTag = null
	if (!isEmpty(icon ?? "")) {
		// @ts-ignore
		IconTag = Icons?.[icon] ?? null
	}

	// Prepare attributes for the menu item element
	const attrs = {
		className: classNames,
		href: !!href ? href : undefined,
		tabIndex: isDisabled ? -1 : 0,
		children: (
			<Fragment>
				{!!IconTag && (
					<IconTag size="sm" className="sui-dropdown__menu-item-icon" />
				)}
				<span id={menuTitleId}>{children}</span>
			</Fragment>
		),
		...props,
	}

	// Prepare attributes for a button element if onClick is provided
	const btnAttr: Record<string, any> = {}
	if (!!onClick) {
		btnAttr.role = "button"
		btnAttr.onClick = onClick
		btnAttr.onKeyDown = (
			e: React.KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
		) => handleOnKeyDown(e, onClick)
	}

	return (
		<TagName
			{...attrs}
			{...methods}
			aria-labelledby={menuTitleId}
			{...btnAttr}
		/>
	)
}

export { DropdownMenuItem }
