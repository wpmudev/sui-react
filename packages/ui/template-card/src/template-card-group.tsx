import React, { useId, ReactNode, useState, useEffect } from "react"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"

import { Provider } from "./template-card-context"
import { CardGroupProps, CardValueType } from "./template-card.types"

const TemplateCardGroup: React.FC<CardGroupProps> = ({
	id = "",
	className = "",
	children,
	defaultValue = "",
	name = "",
	onChange = () => {},
	_htmlProps = {},
	_style = {},
}) => {
	const [current, setCurrent] = useState<CardValueType>(defaultValue)

	// update state when default value get changed
	useEffect(() => {
		setCurrent(defaultValue)
	}, [defaultValue])

	// Default children content
	children = useDefaultChildren(
		children,
		"{Template Card Group Children Content}",
	)

	const { suiInlineClassname } = useStyles(_style, className)

	// template group classname
	const templateClassNames = generateCN(
		"sui-template-card__group",
		{},
		suiInlineClassname,
	)

	// Generate unique id.
	const uniqueId = useId()
	let uuid = `sui-template-${uniqueId}`

	if (!!id) {
		uuid = id
	}

	return (
		<Provider
			value={{
				name,
				current,
				setCurrent,
				defaultValue,
				onChange,
			}}
		>
			<div
				id={uuid}
				role="radiogroup"
				data-testid="sui-template-card-group"
				className={templateClassNames}
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				{children}
			</div>
		</Provider>
	)
}

export { TemplateCardGroup }
