import React from "react"
import { Add } from "@wpmudev/sui-icons"
import { generateCN } from "@wpmudev/sui-utils"

interface ModalFooterProps {
	children?: React.ReactNode
	hasSep?: boolean
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, hasSep }) => {
	return (
		<footer
			className={generateCN("sui-modal__footer", {
				"has-sep": hasSep,
			})}
		>
			{children}
		</footer>
	)
}

export { ModalFooter, ModalFooterProps }
