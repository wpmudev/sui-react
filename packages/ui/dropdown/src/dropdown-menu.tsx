import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { DropdownMenuProps } from "./dropdown.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Define the Menu component
const DropdownMenu: React.FC<DropdownMenuProps> = ({
	className = "",
	children,
	...props
}) => {
	const { cssCN } = useStyles(props, className)

	const classNames = generateCN("sui-dropdown__menu", {}, cssCN)
	// Render the Menu component with the provided children
	return <ul className={classNames}>{children}</ul>
}

export { DropdownMenu }
