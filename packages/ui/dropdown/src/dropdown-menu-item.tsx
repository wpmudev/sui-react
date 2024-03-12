import React, { FC, useId } from "react"
import {
	generateCN,
	handleOnKeyDown,
	isEmpty,
	_renderHTMLPropsSafely,
} from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import Icons, { Add } from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"
import { DropdownMenuItemProps } from "./dropdown.types"
import { Checkbox } from "@wpmudev/sui-checkbox"

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
	isChecked = false,
	variable = "",
	description = "",
	_type = "",
	_htmlProps = {},
	_style = {},
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

	const { suiInlineClassname } = useStyles(_style, className)

	// Generate class names for the menu item
	const classNames = generateCN(
		"sui-dropdown__menu-item",
		{
			hover: isHovered,
			focus: isFocused,
			disabled: isDisabled,
			[variation]: !isEmpty(variation),
		},
		suiInlineClassname,
	)

	// Check if an icon is specified and assign it to IconTag
	let IconTag: React.ComponentType<IconProps> | null = null

	if (icon) {
		IconTag = Icons[icon]
	}

	const getContent = () => {
		let content = <span id={menuTitleId}>{children}</span>

		switch (_type) {
			case "select":
				break
			case "select-checkbox":
				content = (
					<Checkbox
						label={content}
						isSmall={true}
						isChecked={isChecked}
						isDisabled={isDisabled}
					/>
				)
				break
			case "select-variable":
				IconTag = IconTag ? IconTag : Icons.Add
				content = (
					<>
						<div id={menuTitleId} className="sui-dropdown__menu-item--wrapper">
							<IconTag size="sm" className="sui-dropdown__menu-item-icon" />
							<div>
								<span className="sui-dropdown__menu-item--title">
									{children}
								</span>
								{variable && (
									<span className="sui-dropdown__menu-item--var">{` {${variable}}`}</span>
								)}
								{description && (
									<div className="sui-dropdown__menu-item--desc">
										{description}
									</div>
								)}
							</div>
						</div>
					</>
				)
				break
		}

		if ("select-variable" !== _type && !!IconTag) {
			content = (
				<>
					<IconTag size="sm" className="sui-dropdown__menu-item-icon" />
					{content}
				</>
			)
		}

		return content
	}

	// Prepare attributes for the menu item element
	const attrs = {
		className: classNames,
		href: !!href ? href : undefined,
		tabIndex: isDisabled ? -1 : 0,
		children: getContent(),
		..._renderHTMLPropsSafely(_htmlProps),
	}

	// Prepare attributes for a button element if onClick is provided
	const btnAttr: Record<string, any> = {}
	if (!!onClick) {
		// btnAttr.role = "button"
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
