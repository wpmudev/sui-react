import React, { useContext } from "react"
import { Bell } from "@wpmudev/sui-icons"
import { isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { useValidateProps } from "@wpmudev/sui-hooks"

import { ModalContext } from "./modal"

interface ModalHeaderProps {
	title: string
	children?: React.ReactNode
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title = "", children }) => {
	const ctx = useContext(ModalContext)

	// validate props
	useValidateProps({ component: ModalHeader, propsToCheck: { title } })

	return (
		<header className="sui-modal__header">
			<div className="sui-modal__header-actions">
				<Bell slot="left" className="sui-modal__header-actions-icon" />
				{!isEmpty(title ?? "") && "app-connect" !== ctx?.variant && (
					<h4>{title}</h4>
				)}
				<Button
					className="sui-modal__header-actions-close"
					icon="close"
					appearance="tertiary"
					color="black"
					onClick={"closeModal" in ctx ? ctx.closeModal : () => {}}
					isSmall={true}
					iconOnly={true}
					slot="right"
				/>
			</div>
			{"app-connect" === ctx?.variant && (
				<div className="sui-modal__header-info">
					<h3>{title}</h3>
					{!!children && (
						<div className="sui-modal__header-info-content">{children}</div>
					)}
					<figure className="sui-modal__header-logo">
						<img src="https://placehold.co/200x200" alt="App logo" />
					</figure>
				</div>
			)}
		</header>
	)
}

export { ModalHeader, ModalHeaderProps }
