import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { DropdownMenuGroupProps } from "./dropdown.types"

// Define the MenuGroup component
const DropdownMenuGroup: React.FC<DropdownMenuGroupProps> = ({
	title = "",
	className = "",
	children,
	...props
}) => {
	// Generate class names for the menu group
	const classNames = generateCN("sui-dropdown__menu-group", {}, className)

	// Prepare attributes for the menu group element
	const attrs = {
		className: classNames,
		...props,
	}

	return (
		<li {...attrs}>
			{/* Render the menu group title */}
			<span className="sui-dropdown__menu-group-title">{title}</span>
			{/* Render the list of menu items within the group */}
			<ul className="sui-dropdown__menu-group-items">{children}</ul>
		</li>
	)
}

export { DropdownMenuGroup }
