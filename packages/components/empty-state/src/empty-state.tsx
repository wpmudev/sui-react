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
	title,
	content,
	logo,
	className,
	children,
}) => {
	const classNames = generateCN("sui-empty-state", {}, className)

	// Determine whether the logo is an image (string representing URL) or an HTML/SVG element.
	const isImg = "string" === typeof logo

	return (
		<div className={classNames}>
			{/* Render the logo if provided. If it's an image URL, display it as an <img> element; otherwise, render it as is. */}
			{!!logo && (
				<div className="sui-empty-state__logo">
					{isImg ? <img src={logo as string} alt="LOGO" /> : logo}
				</div>
			)}
			<div className="sui-empty-state__info">
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
			<div className="sui-empty-state__actions">{children}</div>
		</div>
	)
}

// Publish required component.
export { EmptyState }
