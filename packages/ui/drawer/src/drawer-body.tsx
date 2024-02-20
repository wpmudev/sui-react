import React from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { DrawerFooterTypes } from "./drawer.types"
import { useStyles } from "@wpmudev/sui-hooks"

const DrawerBody = ({
	className = "",
	children,
	...styleProps
}: DrawerFooterTypes) => {
	const { suiInlineClassname } = useStyles(styleProps, className)
	const classNames = generateCN("sui-drawer__body", {}, suiInlineClassname)

	return <div className={classNames}>{children}</div>
}

export { DrawerBody }
