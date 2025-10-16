import React from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"
import { PageHeaderProps } from "./page-header.types"
import { Tooltip } from "@wpmudev/sui-tooltip"

// Link component represents a clickable link element with optional features
// like inline display, external link indication, and more.
const PageHeader: React.FC<PageHeaderProps> = ({
	title = "Page Title",
	tooltipProps = {},
	actions = [],
	className,
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	// Generate CSS class names for the link
	const classNames = generateCN("sui-page-header", {}, suiInlineClassname)

	return (
		<div className={classNames}>
			<div className="sui-page-header__wrapper">
				<h1 className="sui-page-header__title">{title}</h1>
				{tooltipProps && <Tooltip {...tooltipProps}></Tooltip>}
			</div>
			{actions.length > 0 && (
				<div className="sui-page-header__actions">{actions}</div>
			)}
		</div>
	)
}

// Publish component(s)
export { PageHeader }
