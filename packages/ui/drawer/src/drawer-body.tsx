import React from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { DrawerFooterTypes } from "./drawer.types"
import { useStyles } from "@wpmudev/sui-hooks"

const DrawerBody = ({
	className = "",
	children,
	_style,
}: DrawerFooterTypes) => {
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-drawer__body", {}, suiInlineClassname)

	return <div className={classNames}>{children}</div>
}

export { DrawerBody }
