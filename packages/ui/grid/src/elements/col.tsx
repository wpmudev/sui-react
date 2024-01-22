import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { ColProps } from "../grid.types"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

const Col: React.FC<ColProps> = ({
	size = 6,
	children,
	className,
	...props
}) => {
	const classNames = generateCN(
		"sui-col",
		{
			// Define class based on the column size
			[size as string]: !!size,
		},
		className,
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
		<div className={classNames} {...props}>
			{children}
		</div>
	)
}

export { Col }
