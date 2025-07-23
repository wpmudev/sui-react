import React from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { ColProps } from "../grid.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const Col: React.FC<ColProps> = ({
	size,
	children,
	className,
	_htmlProps = {},
	_style,
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	const classNames = generateCN(
		"sui-col",
		{
			// Define class based on the column size
			[size as string]: !!size,
		},
		suiInlineClassname,
	)

	// Default children content
	children = useDefaultChildren(children, "{Column children content}")

	return (
		<div className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
			{children}
		</div>
	)
}

export { Col }
