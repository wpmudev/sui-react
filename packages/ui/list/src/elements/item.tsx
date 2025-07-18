import React from "react"
import { useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useListType } from "../list-context"
import { ListItemProps } from "../list.types"

const ListItem: React.FC<ListItemProps> = ({
	className = "",
	children,
	variant = "default",
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

	const { suiInlineClassname } = useStyles(_style, className)

	// Generate CSS class names for the List Item component.
	const classNames = generateCN(
		"sui-list__item",
		{
			action,
			[variant]: variant && variant !== "default",
		},
		suiInlineClassname,
	)

	return (
		<li className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
			{children}
		</li>
	)
}

export { ListItem }
