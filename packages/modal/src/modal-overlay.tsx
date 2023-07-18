import React, { Component, useContext } from "react"
import { ModalContext, ModalContextValue } from "./modal"

interface ModalOverlayProps {
	isOpen?: boolean
	children?: React.ReactNode
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
	const ctx = useContext<ModalContextValue | null>(ModalContext)

	return (
		<div className="sui-modal__overlay">
			<ModalContext.Provider value={{}}>
				<div className="sui-modal__inner">{children}</div>
			</ModalContext.Provider>
		</div>
	)
}

export default ModalOverlay
