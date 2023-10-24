import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { ColProps } from "../grid.types"

const Col: React.FC<ColProps> = ({ size, children, className, ...props }) => {
	const classNames = generateCN(
		"sui-col",
		{
			// Define class based on the column size
			[size]: !!size,
		},
		className,
	)

	// remove if exists
	if ("colSize" in props) {
		delete props.colSize
	}

	// remove if exists
	if ("size" in props) {
		delete props.size
	}

	return (
		<div className={classNames} {...props}>
			{children}
		</div>
	)
}

export { Col }