import React from "react"
import { ModalBodyProps } from "./modal.types"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
	// Default children content
	children = useDefaultChildren(children, "{modal body content}")

	return <div className="sui-modal__body">{children}</div>
}

export { ModalBody }
