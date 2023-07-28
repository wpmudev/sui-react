import React from "react"

import { MenuProps } from "./menu.types"

// Define the Menu component
const Menu: React.FC<MenuProps> = ({ children }) => {
	// Render the Menu component with the provided children
	return <nav className="sui-menu">{children}</nav>
}

export { Menu }
