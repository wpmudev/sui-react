import React, { useId } from "react"
import { ModalFooterProps } from "./modal.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

const ModalFooter: React.FC<ModalFooterProps> = ({
	id,
	children,
	isSpaced = false,
	_style,
	_htmlProps,
}) => {
	const generatedId = useId()
	const modalFooterId = id || `sui-modal-footer-${generatedId}`
	const { suiInlineClassname } = useStyles(_style)

	// Default children content
	children = useDefaultChildren(children, "{modal footer content}")

	return (
		<footer
			id={modalFooterId}
			className={generateCN(
				"sui-modal__footer",
				{
					spaced: isSpaced,
				},
				suiInlineClassname,
			)}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{children}
		</footer>
	)
}

export { ModalFooter }
