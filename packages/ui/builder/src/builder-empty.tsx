import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { BuilderEmptyProps } from "./builder.types"
import { useStyles } from "@wpmudev/sui-hooks"

const BuilderEmpty: React.FC<BuilderEmptyProps> = ({
	id,
	title = "No fields added. Insert new field.",
	className,
	_htmlProps = {},
	_style = {},
}) => {
	const generatedId = useId()
	const builderEmptyId = id || `sui_builder_empty_${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	// Class names based on interaction and disabled state.
	const classNames = generateCN("sui-builder__empty", {}, suiInlineClassname)

	return (
		<div
			id={builderEmptyId}
			className={classNames}
			data-testid="builder-empty"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-builder__empty--icon">
				<svg
					width="64"
					height="64"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="Icon">
						<rect width="64" height="64" rx="32" fill="#E6E6E6" />
						<rect
							id="Rectangle 941"
							x="21"
							y="20"
							width="22"
							height="24"
							rx="2"
							stroke="#505050"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
						<rect
							id="Rectangle 942"
							x="25"
							y="32"
							width="14"
							height="4"
							stroke="#505050"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
						<path
							id="Line 17"
							d="M25 40H30"
							stroke="#505050"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
						<path
							id="Line 18"
							d="M25 28L39 28"
							stroke="#505050"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
						<path
							id="Line 19"
							d="M25 24L39 24"
							stroke="#505050"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
					</g>
				</svg>
			</div>
			<div className="sui-builder__empty--title">{title}</div>
		</div>
	)
}

// Publish component(s)
export { BuilderEmpty }
