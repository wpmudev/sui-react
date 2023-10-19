import React from "react"
import { ModalBodyProps } from "./modal.types"

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
	return <div className="sui-modal__body">{children}</div>
}

export { ModalBody }
