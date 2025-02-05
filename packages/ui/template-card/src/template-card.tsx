import React, { useId } from "react"

import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
import { TemplateCardContent } from "./elements/card-content"
import { CardProps } from "./template-card.types"

// Popover component
const TemplateCard: React.FC<CardProps> = ({
	id = "",
	className = "",
	_htmlProps = {},
	_style = {},
	...props
}) => {
	const [isHovered, isFocused, methods] = useInteraction({})

	const uniqueId = useId()

	let uuid = `sui-card-template-${uniqueId}`

	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// class names
	const classNames = generateCN(
		"sui-template-card",
		{
			hover: isHovered,
			focus: isFocused,
		},
		suiInlineClassname,
	)

	// use ID from props list if exists.
	if (!!id) {
		uuid = id
	}

	return (
		<div
			id={uuid}
			className={classNames}
			{...methods}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<TemplateCardContent id={uuid} {...props} />
		</div>
	)
}

// Publish required component.
export { TemplateCard }
