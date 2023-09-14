import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { BuilderProps } from "./builder.types"
import { BuilderButton } from "./builder-button"
import { BuilderEmpty } from "./builder-empty"

// Build builder component
const Builder: React.FC<BuilderProps> = ({
	className = "",
	children,
	allowAddFields = true,
	hasNoFields = false,
}) => {
	const classNames = generateCN("sui-builder", {}, `sui-layout ${className}`)
	return (
		<div className={classNames}>
			<div className="sui-builder__content">
				{hasNoFields ? <BuilderEmpty /> : children}
			</div>
			{allowAddFields && (
				<div className="sui-builder__footer">
					<BuilderButton />
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { Builder }
