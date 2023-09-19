import React, { Fragment } from "react"

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
	isScrollable = false,
	hasNoFields = true,
}) => {
	const classNames = generateCN("sui-builder", {}, `sui-layout ${className}`)
	return (
		<div className={classNames}>
			<div
				className={generateCN("sui-builder__fields", {
					scrollable: false,
				})}
			>
				<div className="sui-builder__content">
					{hasNoFields ? <BuilderEmpty /> : children}
				</div>
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
