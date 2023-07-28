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
	/**
	 * The content of the column.
	 */
	children?: React.ReactNode
}

const Col: React.FC<ColProps> = ({ size, children }) => {
	const classNames = generateCN("sui-col", {
		// Define class based on the column size
		[size]: !!size,
	})

	return <div className={classNames}>{children}</div>
}

export { Col, ColProps }
