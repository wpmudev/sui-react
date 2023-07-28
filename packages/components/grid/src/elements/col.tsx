import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { ColProps } from "./col.types"

const Col: React.FC<ColProps> = ({ size, children }) => {
	const classNames = generateCN("sui-col", {
		// Define class based on the column size
		[size]: !!size,
	})

	return <div className={classNames}>{children}</div>
}

export { Col }
