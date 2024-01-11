import React, { useContext } from "react"

import { isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { useValidateProps } from "@wpmudev/sui-hooks"
import { IconProps } from "@wpmudev/sui-icon"
import Icons from "@wpmudev/sui-icons"
import { ModalContext } from "./modal"
import { ModalHeaderProps } from "./modal.types"

const ModalHeader: React.FC<ModalHeaderProps> = ({
	title = "",
	children,
	icon,
	iconSize,
	iconColor = "success",
}) => {
	const ctx = useContext(ModalContext)
	const { closeModal, variant } = ctx!

	// validate props
	useValidateProps({ component: ModalHeader, propsToCheck: { title } })

	// Get SVG Icon
	let Icon: React.ComponentType<IconProps> | null = null

	if (icon) {
		Icon = Icons?.[icon]
	}

	return (
		<header className="sui-modal__header">
			<div className="sui-modal__header-actions">
				{!!Icon && <Icon size={iconSize} color={iconColor} />}
				{!isEmpty(title ?? "") && "app-connect" !== variant && <h4>{title}</h4>}
				<Button
					className="sui-modal__header-actions-close"
					icon="Close"
					appearance="tertiary"
					color="black"
					onClick={!!closeModal ? closeModal : () => {}}
					isSmall={true}
					iconOnly={true}
					slot="right"
				/>
			</div>
			{"app-connect" === variant && (
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

export { ModalHeader }
