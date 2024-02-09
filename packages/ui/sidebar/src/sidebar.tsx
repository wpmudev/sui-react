import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { SidebarProps } from "./sidebar.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

// Build sidebar component
const Sidebar: React.FC<Omit<SidebarProps, "selectedItemName">> = ({
	className,
	children,
	...props
}) => {
	const { cssCN } = useStyles(props, className)
	const classNames = generateCN("sui-sidebar", {}, cssCN)

	// Default children content
	children = useDefaultChildren(children, "{sidebar children content}")

	return (
		<div className={classNames} data-testid="sidebar">
			{children}
		</div>
	)
}

// Publish component(s)
export { Sidebar }
