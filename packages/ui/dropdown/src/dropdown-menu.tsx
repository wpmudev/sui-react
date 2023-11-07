import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { DropdownMenuProps } from "./dropdown.types"

// Define the Menu component
const DropdownMenu: React.FC<DropdownMenuProps> = ({
	className = "",
	children,
}) => {
	const classNames = generateCN("sui-dropdown__menu", {}, className)
	// Render the Menu component with the provided children
	return <ul className={classNames}>{children}</ul>
}

export { DropdownMenu }
