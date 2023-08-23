import React from "react"

interface ModalFooterProps {
	// ModalFooter content
	children?: React.ReactNode
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, hasSep }) => {
	return <footer className="sui-modal__footer">{children}</footer>
}

export { ModalFooter, ModalFooterProps }
