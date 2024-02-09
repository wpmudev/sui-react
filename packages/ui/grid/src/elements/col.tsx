import React from "react"

import { _renderRestPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { ColProps } from "../grid.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const Col: React.FC<ColProps> = ({ size, children, className, ...props }) => {
	const { suiInlineClassname } = useStyles(props, className)

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

	// remove if exists
	if ("colSize" in props) {
		delete props?.colSize
	}

	// remove if exists
	if ("size" in props) {
		delete props?.size
	}

	return (
		<div className={classNames} {..._renderRestPropsSafely(props)}>
			{children}
		</div>
	)
}

export { Col }
