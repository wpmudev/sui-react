import React from "react"
import { ModalFooterProps } from "./modal.types"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
	// Default children content
	children = useDefaultChildren(children, "{modal footer content}")

	return <footer className="sui-modal__footer">{children}</footer>
}

export { ModalFooter }
