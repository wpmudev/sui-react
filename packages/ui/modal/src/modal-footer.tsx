import React from "react"
import { ModalFooterProps } from "./modal.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

const ModalFooter: React.FC<ModalFooterProps> = ({ children, ...props }) => {
	const { cssCN } = useStyles(props)

	// Default children content
	children = useDefaultChildren(children, "{modal footer content}")

	return (
		<footer className={generateCN("sui-modal__footer", {}, cssCN)}>
			{children}
		</footer>
	)
}

export { ModalFooter }
