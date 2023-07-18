import React from "react"
import { AddIcon } from "@wpmudev/sui-icons"

interface ModalHeaderProps {
	title: string
	desc?: React.ReactNode
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title = "", desc = "" }) => {
	return (
		<div className="sui-modal__header">
			<div className="sui-modal__header-icon" slot="left">
				<AddIcon />
			</div>
			<div className="sui-modal__header-info">
				<h2>{title}</h2>
				<div className="sui-modal__header-info-content">{!!desc && desc}</div>
			</div>
			<div className="sui-modal__header-close" slot="right">
				X
			</div>
		</div>
	)
}

export { ModalHeader, ModalHeaderProps }
