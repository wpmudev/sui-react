import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { BuilderProps } from "./builder.types"
import { BuilderButton } from "./builder-button"
import { BuilderEmpty } from "./builder-empty"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

// Build builder component
const Builder: React.FC<BuilderProps> = ({
	id,
	className = "",
	children,
	allowAddFields = true,
	isScrollable = false,
	hasNoFields = false,
	_htmlProps = {},
	_style = {},
}) => {
	const generatedId = useId()
	const builderId = id || `sui_builder_${generatedId}`
	// Default children content
	children = useDefaultChildren(children)
	const { suiInlineClassname } = useStyles(_style, `sui-layout ${className}`)
	const classNames = generateCN("sui-builder", {}, suiInlineClassname)

	return (
		<div
			id={builderId}
			className={classNames}
			data-testid="builder"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
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
				<div className="sui-builder__footer" data-testid="builder-add-more">
					<BuilderButton />
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { Builder }
