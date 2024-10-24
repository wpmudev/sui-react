import React from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"
import { PageHeaderProps } from "./page-header.types"

// Link component represents a clickable link element with optional features
// like inline display, external link indication, and more.
const PageHeader: React.FC<PageHeaderProps> = ({
	title = "Page Title",
	actions = [],
	className,
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	// Generate CSS class names for the link
	const classNames = generateCN("sui-page-header", {}, suiInlineClassname)

	return (
		<div className={classNames}>
			<h1 className="sui-page-header__title">{title}</h1>
			{actions.length > 0 && (
				<div className="sui-page-header__actions">{actions}</div>
			)}
		</div>
	)
}

// Publish component(s)
export { PageHeader }
