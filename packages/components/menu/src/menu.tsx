import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { MenuProps } from "./menu.types"

// Define the Menu component
const Menu: React.FC<MenuProps> = ({ className = "", children }) => {
	const classNames = generateCN("sui-menu", {}, className)
	// Render the Menu component with the provided children
	return <nav className={classNames}>{children}</nav>
}

export { Menu }
