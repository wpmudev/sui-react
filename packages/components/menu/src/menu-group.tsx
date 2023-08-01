import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { MenuGroupProps } from "./menu.types"

// Define the MenuGroup component
const MenuGroup: React.FC<MenuGroupProps> = ({
	title = "",
	className = "",
	children,
	...props
}) => {
	// Generate class names for the menu group
	const classNames = generateCN("sui-menu__group", {}, className)

	// Prepare attributes for the menu group element
	const attrs = {
		className: classNames,
		...props,
	}

	return (
		<li {...attrs}>
			{/* Render the menu group title */}
			<span className="sui-menu__group-title">{title}</span>
			{/* Render the list of menu items within the group */}
			<ul className="sui-menu__group-items">{children}</ul>
		</li>
	)
}

export { MenuGroup }
