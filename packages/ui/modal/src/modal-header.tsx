import React, { useContext } from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { useStyles, useValidateProps } from "@wpmudev/sui-hooks"
import { IconProps } from "@wpmudev/sui-icon"
import Icons from "@wpmudev/sui-icons"
import { ModalContext } from "./modal"
import { ModalHeaderProps } from "./modal.types"

const ModalHeader: React.FC<ModalHeaderProps> = ({
	title = "header title",
	children,
	icon,
	iconSize = "md",
	iconColor = "success",
	...props
}) => {
	const { suiInlineClassname } = useStyles(props)
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
		<header className={generateCN("sui-modal__header", {}, suiInlineClassname)}>
			<div className="sui-modal__header-actions">
				{!!Icon && <Icon size={iconSize} colorScheme={iconColor} />}
				{!isEmpty(title ?? "") && "app-connect" !== variant && (
					<h4 className="sui-heading--h4">{title}</h4>
				)}
				<Button
					className="sui-modal__header-actions-close"
					icon="Close"
					type="tertiary"
					colorScheme="black"
					onClick={!!closeModal ? closeModal : () => {}}
					isSmall={true}
					iconOnly={true}
				>
					Close Modal
				</Button>
			</div>
			{"app-connect" === variant && (
				<div className="sui-modal__header-info">
					<h3 className="sui-heading--h3">{title}</h3>
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
