import React, { forwardRef, HTMLProps, useState } from "react"

import { Field, FieldProps } from "@wpmudev/react-form-field"
import { Input } from "@wpmudev/react-input"
// import { IconButton } from "@wpmudev/react-icon-button"
import { Button } from "@wpmudev/react-button"

/**
 * Interface representing the properties of a password field.
 */
interface PasswordFieldProps extends HTMLProps<HTMLDivElement> {
	/**
	 * ID of the password field.
	 */
	id: string
	/**
	 * Label for the password field.
	 */
	label?: React.ReactNode
	/**
	 * Helper text for the password field.
	 */
	helper?: React.ReactNode
	/**
	 * Error message for the password field.
	 */
	errorMessage?: React.ReactNode
	/**
	 * Button text for the password field.
	 */
	button?: string
	/**
	 * Indicates whether the label should be hidden.
	 */
	isLabelHidden?: boolean
	/**
	 * Indicates whether there is an error with the field.
	 */
	iError?: boolean
	/**
	 * Indicates whether the field is disabled.
	 */
	isDisabled?: boolean
}

const PasswordField: React.FC<PasswordFieldProps> = forwardRef<
	HTMLInputElement,
	PasswordFieldProps
>(
	({
		id,
		label,
		helper,
		errorMessage,
		button,
		isLabelHidden = false,
		isError = false,
		isDisabled = false,
		...props
	}) => {
		// Define field error state
		const error = Object.assign({
			state: isError,
			text: errorMessage,
		})

		// Define password visibility
		const [hasValue, setHasValue] = useState(false)
		const [isVisible, setVisible] = useState(false)

		// Field settings
		const fieldAttrs = {
			id,
			label,
			helper,
			error,
			isLabelHidden,
		}

		// Input settings
		const inputAttrs = {
			id,
			type: isVisible ? "text" : "password",
			inputClass: "sui-password__input",
			isError,
			isDisabled,
			onKeyUp: () => {
				const getValue = document.getElementById(id).value
				setHasValue(getValue.length > 0)
			},
			...props,
		}

		// Button settings
		// set.button = Object.assign(
		// 	{
		// 		type: "icon-button",
		// 		showLabel: "Show",
		// 		hideLabel: "Hide",
		// 		icon: is.visible ? "hide" : "show",
		// 		props: {
		// 			color: "black",
		// 			className: "sui-password__button",
		// 			isSmall: true,
		// 			isDisabled: isDisabled || !is.filled ? true : false,
		// 			onClick: () => set.visibility(!is.visible),
		// 		},
		// 		html: "",
		// 	},
		// 	button,
		// )
		//
		// // Render button appearance
		// switch (set.button.type) {
		// 	case "standard":
		// 		set.button.props.appearance = "secondary"
		// 		set.button.html = (
		// 			<Button {...set.button.props}>
		// 				{is.visible ? set.button.hideLabel : set.button.showLabel}
		// 			</Button>
		// 		)
		// 		break
		//
		// 	default:
		// 		set.button.props.appearance = "tertiary"
		// 		set.button.html = (
		// 			<IconButton
		// 				icon={set.button.icon}
		// 				label={is.visible ? set.button.hideLabel : set.button.showLabel}
		// 				{...set.button.props}
		// 			/>
		// 		)
		// 		break
		// }

		return (
			<Field {...fieldAttrs}>
				<div className="sui-password">
					<Input {...inputAttrs} />
					{/*{set.button.html}*/}
				</div>
			</Field>
		)
	},
)

PasswordField.displayName = "PasswordField"

export { PasswordField, PasswordFieldProps }
