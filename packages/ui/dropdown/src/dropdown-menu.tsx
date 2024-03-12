import React from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { DropdownMenuProps } from "./dropdown.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Define the Menu component
const DropdownMenu: React.FC<DropdownMenuProps> = ({
	className = "",
	children,
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	const classNames = generateCN("sui-dropdown__menu", {}, suiInlineClassname)
	// Render the Menu component with the provided children
	return <div className={classNames}>{children}</div>
}

export { DropdownMenu }
