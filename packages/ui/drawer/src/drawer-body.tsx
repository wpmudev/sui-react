import React from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { DrawerFooterTypes } from "./drawer.types"
import { useStyles } from "@wpmudev/sui-hooks"

const DrawerBody = ({
	className = "",
	children,
	...styleProps
}: DrawerFooterTypes) => {
	const { cssCN } = useStyles(styleProps, className)
	const classNames = generateCN("sui-drawer__body", {}, cssCN)

	return <div className={classNames}>{children}</div>
}

export { DrawerBody }
