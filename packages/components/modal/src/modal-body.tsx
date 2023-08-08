import React from "react"
import { Add } from "@wpmudev/sui-icons"

interface ModalBodyProps {
	children?: React.ReactNode
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
	return <div className="sui-modal__body">{children}</div>
}

export { ModalBody, ModalBodyProps }
