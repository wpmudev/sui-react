import React, { KeyboardEvent, useCallback } from "react"

import { generateCN, isEmpty, handleOnKeyDown } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import * as Icons from "@wpmudev/sui-icons"

// Import required element(s)
import { SidebarItemProps } from "./sidebar.types"

// SidebarItem component using the SidebarItemProps interface.
// This component represents an item within a sidebar navigation.
const SidebarItem: React.FC<SidebarItemProps> = ({
	url = "#",
	icon = "",
	title = "",
	className,
	action,
	isActive,
	isDisabled,
	onClick = () => {},
	...props
}) => {
	// `useInteraction` returns interaction state and methods.
	const [isHovered, isFocused, methods] = useInteraction({})

	// Class names based on interaction and disabled state.
	const classNames = generateCN(
		"sui-sidebar__item",
		{
			hover: isHovered && !isFocused && !isDisabled,
			focus: isFocused && !isDisabled,
			disabled: isDisabled,
			active: isActive,
		},
		className,
	)

	// Determine the IconTag based on the provided icon value.
	let IconTag = null
	if (!isEmpty(icon)) {
		/*eslint import/namespace: ['error', { allowComputed: true }]*/
		// @ts-ignore
		IconTag = Icons?.[icon ?? ""]
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
			{...methods}
			{...props}
			tabIndex={isDisabled ? -1 : 0}
			onClick={onClickCallback}
			onKeyDown={(e) => handleOnKeyDown(e, onClickCallback)}
			data-testid="sidebar-item"
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
