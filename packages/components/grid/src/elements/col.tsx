import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

/**
 * Represents the properties for a column component.
 */
interface ColProps {
	/**
	 * The size of the column.
	 */
	size: number | string
	className: string
	/**
	 * The content of the column.
	 */
	children?: React.ReactNode
}

const Col: React.FC<ColProps> = ({ size, children, className }) => {
	const classNames = generateCN(
		"sui-col",
		{
			// Define class based on the column size
			[size]: !!size,
		},
		className,
	)

	return <div className={classNames}>{children}</div>
}

export { Col, ColProps }
