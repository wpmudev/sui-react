import React, { createContext, forwardRef, useContext, useState } from "react"

import { generateCN, isEmpty, isFunction } from "@wpmudev/react-utils"

// Import required module(s)
import { AlertDialog } from "@wpmudev/react-alertdialog"
import { Box, BoxGroup } from "@wpmudev/react-box"
import { ModalHeader } from "./modal-header"
import ModalOverlay from "./modal-overlay"
// import { IconButton } from "@wpmudev/react-icon-button"

type ModalProps = {
	id?: string
	title?: string
	size?: "sm" | "md" | "lg" | "xl"
	children?: React.ReactNode
}

export type HandleModal = {
	openModal: () => void
	closeModal: () => void
}

export interface ModalContextValue {
	state?: boolean
}

export const ModalContext = createContext<ModalContextValue | null>(null)

// Build modal
const Modal = forwardRef<HandleModal, ModalProps>(
	(
		{
			id,
			title,
			icon,
			isSmall,
			content,
			footer,
			timer,
			trigger,
			onClick,
			children,
			...props
		},
		ref,
	) => {
		const [isOpen, setIsOpen] = useState<boolean>(false)

		// Not valid id? return error
		if (isEmpty(id ?? "")) {
			throw new Error(
				`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Modal\n\nThe "ID" argument requires some value to be passed to it.\n\n`,
			)
		}

		// Not valid title? return error
		if (isEmpty(title ?? "")) {
			throw new Error(
				`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Modal\n\nThe "title" argument requires some value to be passed to it.\n\n`,
			)
		}

		React.useImperativeHandle(ref, () => ({
			openModal() {
				setIsOpen(true)
			},
			closeModal() {
				setIsOpen(false)
			},
		}))

		// Generate classnames
		const classNames = generateCN("sui-modal", {
			"is-open": isOpen,
		})

		return (
			<div className={classNames}>
				<div className="sui-modal__overlay" />
				<ModalContext.Provider value={{}}>
					<div className="sui-modal__body">{children}</div>
				</ModalContext.Provider>
			</div>
		)

		// // Define icon object
		// const iconProps = {
		// 	name: !!icon && isObject(icon) ? "" : icon,
		// 	color: "",
		// 	class: "suicons", // Define icon main class
		// 	...(isObject(icon) ? icon : {}),
		// }

		// // icon classes
		// const iconClassName = classnames({
		// 	"sui-color-primary--50": "blue" === color,
		// 	"sui-color-success--50": "green" === color,
		// 	"sui-color-warning--50": "yellow" === color,
		// 	"sui-color-error--50": "red" === color,
		//  "suicons--lg": true
		// })

		// Define modal content
		const modalContent = ({ closeModal }) => {
			return (
				<Box>
					<BoxGroup>
						<div slot="left">
							{!!icon && (
								<span
									className={`${set.icon.class} suicons--${set.icon.name} sui-box-group__item`}
									aria-hidden="true"
								/>
							)}
							<h3
								id={`${id}__title`}
								className="sui-heading sui-heading--h4 sui-box-group__item"
							>
								{title}
							</h3>
						</div>
						<div slot="right">
							{/*<IconButton
							icon="close"
							label="Close modal"
							appearance="tertiary"
							color="black"
							isSmall={true}
							onClick={(e) => {
								closeModal()

								if (isFunction(onClick)) {
									onClick(e)
								}
							}}
						/>*/}
						</div>
					</BoxGroup>
					{isFunction(content) && content({ closeModal })}
					{isFunction(footer) && (
						<BoxGroup>
							<div slot="left" />
							<div slot="right">{footer({ closeModal })}</div>
						</BoxGroup>
					)}
				</Box>
			)
		}

		// Define alert dialog props
		const attrs = {
			dialogId: id,
			titleText: `${id}__title`,
			isSmall,
			triggerTimer: !!timer ? timer : undefined,
			triggerContent: isFunction(trigger) ? timer : undefined,
			modalContent,
			...props,
		}

		return <AlertDialog {...attrs} />
	},
)

Modal.displayName = "Modal"

// Publish component(s)
export { Modal }
