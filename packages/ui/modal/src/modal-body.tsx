import React from "react"
import { ModalBodyProps } from "./modal.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

const ModalBody: React.FC<ModalBodyProps> = ({ children, _style }) => {
	const { suiInlineClassname } = useStyles(_style)

	// Default children content
	children = useDefaultChildren(children, "{modal body content}")

	return (
		<div className={generateCN("sui-modal__body", {}, suiInlineClassname)}>
			{children}
		</div>
	)
}

export { ModalBody }
