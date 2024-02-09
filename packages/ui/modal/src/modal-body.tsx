import React from "react"
import { ModalBodyProps } from "./modal.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

const ModalBody: React.FC<ModalBodyProps> = ({ children, ...props }) => {
	const { cssCN } = useStyles(props)

	// Default children content
	children = useDefaultChildren(children, "{modal body content}")

	return (
		<div className={generateCN("sui-modal__body", {}, cssCN)}>{children}</div>
	)
}

export { ModalBody }
