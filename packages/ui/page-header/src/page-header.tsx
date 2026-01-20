import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"
import { PageHeaderProps } from "./page-header.types"

// Link component represents a clickable link element with optional features
// like inline display, external link indication, and more.
const PageHeader: React.FC<PageHeaderProps> = ({
	id,
	title = "Page Title",
	actions = [],
	className,
	_style = {},
}) => {
	const generatedId = useId()
	const pageHeaderId = id || `sui-page-header-${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)

	// Generate CSS class names for the link
	const classNames = generateCN("sui-page-header", {}, suiInlineClassname)

	return (
		<div id={pageHeaderId} className={classNames}>
			<h1 id={`${pageHeaderId}-title`} className="sui-page-header__title">
				{title}
			</h1>
			{actions.length > 0 && (
				<div
					id={`${pageHeaderId}-actions`}
					className="sui-page-header__actions"
				>
					{actions}
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { PageHeader }
