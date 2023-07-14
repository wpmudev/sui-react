import React from "react"

import { isEmpty, isFunction } from "@wpmudev/react-utils"

// Import required module(s)
import { AlertDialog } from "@wpmudev/react-alertdialog"
import { Box, BoxGroup } from "@wpmudev/react-box"
// import { IconButton } from "@wpmudev/react-icon-button"

interface ModalProps {
	id?: string
	title?: string
	icon?: Record<string, any>[]
	isSmall?: boolean
	content?: Function
	footer?: Function
	timer?: number
	trigger?: Function
	onClick?: Function
}

// Build modal component
const Modal: React.FC<ModalProps> = ({
	id,
	title,
	icon,
	isSmall,
	content,
	footer,
	timer,
	trigger,
	onClick,
	...props
}) => {
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
}

// Publish component(s)
export { Modal }
