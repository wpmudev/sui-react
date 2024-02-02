import React from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { DrawerFooterTypes } from "./drawer.types"

const DrawerFooter = ({ className = "", children }: DrawerFooterTypes) => {
	const classNames = generateCN("sui-drawer__footer", {}, className)

	return <div className={classNames}>{children}</div>
}

export { DrawerFooter }
