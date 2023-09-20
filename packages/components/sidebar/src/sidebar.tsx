import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { SidebarProps } from "./sidebar.types"

// Build sidebar component
const Sidebar: React.FC<Omit<SidebarProps, "selectedItemName">> = ({
	className,
	children,
}) => {
	const classNames = generateCN("sui-sidebar", {}, className)
	return <div className={classNames}>{children}</div>
}

// Publish component(s)
export { Sidebar }
