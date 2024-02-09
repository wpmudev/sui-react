import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { EmptyStateProps } from "./empty-state.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * Component for displaying an empty state message with an optional logo.
 *
 * @param {EmptyStateProps} props - Component props
 * @return {JSX.Element} The rendered component.
 */
const EmptyState: React.FC<EmptyStateProps> = ({
	logo,
	className,
	children,
	...props
}) => {
	const { cssCN } = useStyles(props, className)
	const classNames = generateCN("sui-empty-state", {}, cssCN)

	// Determine whether the logo is an image (string representing URL) or an HTML/SVG element.
	const isImg = "string" === typeof logo

	// Default children content
	children = useDefaultChildren(children)

	return (
		<div className={classNames} {...props}>
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
