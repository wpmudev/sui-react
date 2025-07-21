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
	action = false,
	_style = {},
	_htmlProps = {},
}) => {
	const { type } = useListType()

	if (type !== "ul" && type !== "ol") {
		throw Error(
			"ListItem must be used within a List component. It requires a valid 'type' context (either 'ul' or 'ol').",
		)
	}

	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style, className)

	// Generate CSS class names for the List Item component.
	const classNames = generateCN(
		"sui-list__item",
		{
			action,
			[variant]: variant && variant !== "default",
			pro: isPro,
			hover: isHovered && !isFocused && !isDisabled,
			focus: isFocused && !isDisabled,
			disabled: isDisabled,
		},
		suiInlineClassname,
	)

	return (
		<li
			className={classNames}
			{...(methods ?? {})}
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
