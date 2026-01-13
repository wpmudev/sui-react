import React, { useId } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import { DropdownMenuProps } from "./dropdown.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Define the Menu component
const DropdownMenu: React.FC<DropdownMenuProps> = ({
	id,
	className = "",
	children,
	_style = {},
}) => {
	const generatedId = useId()
	const dropdownMenuId = id || `sui_dropdown_menu_${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)

	const classNames = generateCN("sui-dropdown__menu", {}, suiInlineClassname)
	// Render the Menu component with the provided children
	return (
		<div id={dropdownMenuId} className={classNames}>
			{children}
		</div>
	)
}

export { DropdownMenu }
