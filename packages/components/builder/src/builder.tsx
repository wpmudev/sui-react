import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { BuilderProps } from "./builder.types"

// Build builder component
const Builder: React.FC<BuilderProps> = ({ className, children }) => {
	const classNames = generateCN("sui-builder", {}, className)
	return <div className={classNames}>{children}</div>
}

// Publish component(s)
export { Builder }
