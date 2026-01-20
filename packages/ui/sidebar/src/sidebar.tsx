import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { SidebarProps } from "./sidebar.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

// Build sidebar component
const Sidebar: React.FC<Omit<SidebarProps, "selectedItemName">> = ({
	id,
	className,
	children,
	_htmlProps = {},
	_style = {},
}) => {
	const generatedId = useId()
	const sidebarId = id || `sui-sidebar-${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-sidebar", {}, suiInlineClassname)

	// Default children content
	children = useDefaultChildren(children, "{sidebar children content}")

	return (
		<div
			id={sidebarId}
			className={classNames}
			data-testid="sidebar"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{children}
		</div>
	)
}

// Publish component(s)
export { Sidebar }
