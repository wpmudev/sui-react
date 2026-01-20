import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { EmptyStateProps } from "./empty-state.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * Component for displaying an empty state message with an optional logo.
 *
 * @param {EmptyStateProps} props - Component props
 * @return {JSX.Element} The rendered component.
 */
const EmptyState: React.FC<EmptyStateProps> = ({
	id,
	logo,
	className,
	children,
	_htmlProps = {},
	_style = {},
}: EmptyStateProps): JSX.Element => {
	const generatedId = useId()
	const emptyStateId = id || `sui-empty-state-${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-empty-state", {}, suiInlineClassname)

	// Determine whether the logo is an image (string representing URL) or an HTML/SVG element.
	const isImg = "string" === typeof logo

	// Default children content
	children = useDefaultChildren(children)

	return (
		<div
			id={emptyStateId}
			className={classNames}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-empty-state__wrapper">
				{/* Render the logo if provided. If it's an image URL, display it as an <img> element; otherwise, render it as is. */}
				{!!logo && (
					<div className="sui-empty-state__logo">
						{isImg ? <img src={logo as string} alt="LOGO" /> : logo}
					</div>
				)}
				{children}
			</div>
		</div>
	)
}

// Publish required component.
export { EmptyState }
