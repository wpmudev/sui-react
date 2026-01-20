import React, { useContext, useId } from "react"

import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { useStyles, useValidateProps } from "@wpmudev/sui-hooks"
import { IconProps } from "@wpmudev/sui-icon"
import Icons from "@wpmudev/sui-icons"
import { ModalContext } from "./modal"
import { ModalHeaderProps } from "./modal.types"

const ModalHeader: React.FC<ModalHeaderProps> = ({
	id,
	title = "header title",
	children,
	icon,
	iconSize = "md",
	iconColor = "success",
	hasCloseButton = true,
	_htmlProps,
	_style,
}) => {
	const generatedId = useId()
	const modalHeaderId = id || `sui-modal-header-${generatedId}`
	const { suiInlineClassname } = useStyles(_style)
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
		<header
			id={modalHeaderId}
			className={generateCN("sui-modal__header", {}, suiInlineClassname)}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-modal__header-actions">
				{!!Icon && <Icon size={iconSize} colorScheme={iconColor} />}
				{!isEmpty(title ?? "") && "app-connect" !== variant && (
					<h4 className="sui-heading--h4">{title}</h4>
				)}
				{hasCloseButton && (
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
				)}
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
