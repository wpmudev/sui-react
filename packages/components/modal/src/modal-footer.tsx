import React from "react"

// Props expected by the ModalFooter component.
interface ModalFooterProps {
	// ModalFooter content
	children?: React.ReactNode
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
	return <footer className="sui-modal__footer">{children}</footer>
}

export { ModalFooter, ModalFooterProps }
