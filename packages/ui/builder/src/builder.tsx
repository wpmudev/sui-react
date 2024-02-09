import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { BuilderProps } from "./builder.types"
import { BuilderButton } from "./builder-button"
import { BuilderEmpty } from "./builder-empty"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

// Build builder component
const Builder: React.FC<BuilderProps> = ({
	className = "",
	children,
	allowAddFields = true,
	isScrollable = false,
	hasNoFields = false,
	...styleProps
}) => {
	// Default children content
	children = useDefaultChildren(children)
	const { suiInlineClassname } = useStyles(
		styleProps,
		`sui-layout ${className}`,
	)
	const classNames = generateCN("sui-builder", {}, suiInlineClassname)

	return (
		<div className={classNames} data-testid="builder">
			<div
				className={generateCN("sui-builder__fields", {
					scrollable: isScrollable && !hasNoFields,
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
