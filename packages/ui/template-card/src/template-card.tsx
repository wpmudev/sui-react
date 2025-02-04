import React, { useId } from "react"

import { useStyles } from "@wpmudev/sui-hooks"
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
	const uniqueId = useId()

	let uuid = `sui-card-template-${uniqueId}`

	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// class names
	const classNames = generateCN("sui-template-card", {}, suiInlineClassname)

	// use ID from props list if exists.
	if (!!id) {
		uuid = id
	}

	return (
		<div
			id={uuid}
			className={classNames}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<TemplateCardContent {...props} />
		</div>
	)
}

// Publish required component.
export { TemplateCard }
