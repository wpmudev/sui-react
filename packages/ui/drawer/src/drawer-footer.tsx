import React, { useId } from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { DrawerFooterTypes } from "./drawer.types"
import { useStyles } from "@wpmudev/sui-hooks"

const DrawerFooter = ({
	id,
	className = "",
	children,
	_style,
}: DrawerFooterTypes) => {
	const generatedId = useId()
	const drawerFooterId = id || `sui_drawer_footer_${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-drawer__footer", {}, suiInlineClassname)

	return (
		<div id={drawerFooterId} className={classNames}>
			{children}
		</div>
	)
}

export { DrawerFooter }
