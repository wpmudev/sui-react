import React, { useId } from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { DrawerFooterTypes } from "./drawer.types"
import { useStyles } from "@wpmudev/sui-hooks"

const DrawerBody = ({
	id,
	className = "",
	children,
	_style,
}: DrawerFooterTypes) => {
	const generatedId = useId()
	const drawerBodyId = id || `sui-drawer-body-${generatedId}`
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-drawer__body", {}, suiInlineClassname)

	return (
		<div id={drawerBodyId} className={classNames}>
			{children}
		</div>
	)
}

export { DrawerBody }
