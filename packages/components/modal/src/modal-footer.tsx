import React from "react"
import { ModalFooterProps } from "./modal.types"

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
	return <footer className="sui-modal__footer">{children}</footer>
}

export { ModalFooter }
