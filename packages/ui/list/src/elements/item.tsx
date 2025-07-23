import React from "react"
import { useStyles, useInteraction } from "@wpmudev/sui-hooks"
import { Tag } from "@wpmudev/sui-tag"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useListType } from "../list-context"
import { ListItemProps } from "../list.types"

const ListItem: React.FC<ListItemProps> = ({
	className = "",
	children,
	variant = "default",
	isPro = false,
	isDisabled = false,
	onItemClick,
	_style = {},
	_htmlProps = {},
}) => {
	const { type, onClick } = useListType()
	let action = false

	if (type !== "ul" && type !== "ol") {
		throw Error(
			"ListItem must be used within a List component. It requires a valid 'type' context (either 'ul' or 'ol').",
		)
	}

	// if we have onCLick then set action to true
	if (onItemClick || onClick) {
		action = true
	}

	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style, className)

	// Handle click event for the list item
	const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
		if (onItemClick) {
			onItemClick(event)
		}
		if (onClick) {
			onClick()
		}
	}

	// Generate CSS class names for the List Item component.
	const classNames = generateCN(
		"sui-list__item",
		{
			action,
			[variant]: variant && variant !== "default",
			pro: isPro,
			hover: isHovered && action && !isFocused && !isDisabled,
			focus: isFocused && action && !isDisabled,
			disabled: isDisabled,
		},
		suiInlineClassname,
	)

	return (
		<li
			className={classNames}
			{...(action ? methods : {})}
			{...(action && !isDisabled
				? {
						onClick: handleClick,
						tabIndex: 0,
						role: "button",
						onKeyDown: (e: React.KeyboardEvent<HTMLLIElement>) => {
							if (e.key === "Enter" || e.key === " ") {
								handleClick(e as any)
							}
						},
				  }
				: {})}
			data-testid="list-item"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{children}
			{isPro && (
				<div className="sui-list__item--pro-tag">
					<Tag
						colorScheme="black"
						design="outlined"
						isSmall={true}
						isUppercase={true}
					>
						Pro
					</Tag>
				</div>
			)}
		</li>
	)
}

export { ListItem }
