import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { BuilderProps } from "./builder.types"
import { BuilderButton } from "./builder-button"

// Build builder component
const Builder: React.FC<BuilderProps> = ({
	className,
	children,
	hasInsertButton = false,
}) => {
	const classNames = generateCN("sui-builder", {}, className)
	return (
		<div className={classNames}>
			<div className="sui-builder__content">{children}</div>
			{hasInsertButton && (
				<div className="sui-builder__footer">
					<BuilderButton />
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { Builder }
