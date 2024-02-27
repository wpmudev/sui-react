import React from "react"
import { ModalFooterProps } from "./modal.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

const ModalFooter: React.FC<ModalFooterProps> = ({
	children,
	_style,
	...props
}) => {
	const { suiInlineClassname } = useStyles(_style)

	// Default children content
	children = useDefaultChildren(children, "{modal footer content}")

	return (
		<footer className={generateCN("sui-modal__footer", {}, suiInlineClassname)}>
			{children}
		</footer>
	)
}

export { ModalFooter }
