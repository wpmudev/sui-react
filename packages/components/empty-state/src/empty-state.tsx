import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { EmptyStateProps } from "./empty-state.types"

/**
 * EmptyState Component
 *
 * It represents an empty state with a logo, title, content, and optional additional actions.
 *
 * @return {React.ReactNode} The EmptyState component.
 */
const EmptyState: React.FC<EmptyStateProps> = ({
	logo,
	className,
	children,
	...props
}) => {
	const classNames = generateCN("sui-empty-state", {}, className)

	// Determine whether the logo is an image (string representing URL) or an HTML/SVG element.
	const isImg = "string" === typeof logo

	return (
		<div className={classNames} {...props}>
			{/* Render the logo if provided. If it's an image URL, display it as an <img> element; otherwise, render it as is. */}
			{!!logo && (
				<div className="sui-empty-state__logo">
					{isImg ? <img src={logo as string} alt="LOGO" /> : logo}
				</div>
			)}
			{children}
		</div>
	)
}

// Publish required component.
export { EmptyState }
