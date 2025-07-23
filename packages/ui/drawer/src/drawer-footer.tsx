import React from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { DrawerFooterTypes } from "./drawer.types"
import { useStyles } from "@wpmudev/sui-hooks"

const DrawerFooter = ({
	className = "",
	children,
	_style,
}: DrawerFooterTypes) => {
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN("sui-drawer__footer", {}, suiInlineClassname)

	return <div className={classNames}>{children}</div>
}

export { DrawerFooter }
