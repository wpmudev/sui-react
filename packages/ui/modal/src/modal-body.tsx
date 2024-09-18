import React from "react"
import { ModalBodyProps } from "./modal.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

const ModalBody: React.FC<ModalBodyProps> = ({
	children,
	_style,
	_htmlProps,
}) => {
	const { suiInlineClassname } = useStyles(_style)

	// Default children content
	children = useDefaultChildren(children, "{modal body content}")

	return (
		<div
			className={generateCN("sui-modal__body", {}, suiInlineClassname)}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{children}
		</div>
	)
}

export { ModalBody }
