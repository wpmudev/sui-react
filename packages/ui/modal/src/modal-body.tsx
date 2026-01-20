import React, { useId } from "react"
import { ModalBodyProps } from "./modal.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

const ModalBody: React.FC<ModalBodyProps> = ({
	id,
	children,
	_style,
	_htmlProps,
}) => {
	const generatedId = useId()
	const modalBodyId = id || `sui_modal_body_${generatedId}`
	const { suiInlineClassname } = useStyles(_style)

	// Default children content
	children = useDefaultChildren(children, "{modal body content}")

	return (
		<div
			id={modalBodyId}
			className={generateCN("sui-modal__body", {}, suiInlineClassname)}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{children}
		</div>
	)
}

export { ModalBody }
