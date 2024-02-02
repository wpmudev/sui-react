import React from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { DrawerFooterTypes } from "./drawer.types"

const DrawerBody = ({ className = "", children }: DrawerFooterTypes) => {
	const classNames = generateCN("sui-drawer__body", {}, className)

	return <div className={classNames}>{children}</div>
}

export { DrawerBody }
