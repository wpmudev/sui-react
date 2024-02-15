import React, { KeyboardEvent, useCallback } from "react"

import {
	_renderRestPropsSafely,
	generateCN,
	handleOnKeyDown,
} from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import Icons from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"

// Import required element(s)
import { SidebarItemProps } from "./sidebar.types"

// SidebarItem component using the SidebarItemProps interface.
// This component represents an item within a sidebar navigation.
const SidebarItem: React.FC<SidebarItemProps> = ({
	url = "#",
	icon,
	title = "Sidebar Item",
	className,
	action,
	isActive = false,
	isDisabled = false,
	onClick = () => {},
	htmlProps = {},
	...props
}) => {
	// `useInteraction` returns interaction state and methods.
	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(props, className)

	// Class names based on interaction and disabled state.
	const classNames = generateCN(
		"sui-sidebar__item",
		{
			hover: isHovered && !isFocused && !isDisabled,
			focus: isFocused && !isDisabled,
			disabled: isDisabled,
			active: isActive,
		},
		suiInlineClassname,
	)

	// Determine the IconTag based on the provided icon value.
	let IconTag: React.ComponentType<IconProps> | null = null

	if (icon) {
		IconTag = Icons[icon]
	}

	const onClickCallback = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement> | undefined | KeyboardEvent) => {
			e?.preventDefault()
			if (onClick) {
				onClick(e)
			}
		},
		[onClick],
	)

	// Return JSX structure representing the SidebarItem.
	return (
		<a
			className={classNames}
			href={url}
			tabIndex={isDisabled ? -1 : 0}
			onClick={onClickCallback}
			onKeyDown={(e) => handleOnKeyDown(e, onClickCallback)}
			data-testid="sidebar-item"
			{...methods}
			{..._renderRestPropsSafely(htmlProps)}
		>
			{/* Display item info, including optional icon and title */}
			<div className="sui-sidebar__item-info">
				{IconTag && (
					<IconTag
						size="sm"
						color={(isHovered && !isFocused) || isActive ? "informative" : ""}
					/>
				)}
				<span>{title}</span>
			</div>

			{/* Display optional action component */}
			{!!action && <div className="sui-sidebar__item-action">{action}</div>}
		</a>
	)
}

// Publish component(s)
export { SidebarItem }
