import React, { forwardRef, useState } from "react"

import { Field } from "@wpmudev/react-form-field"
import { Input } from "../../input/src"
import { Button } from "../../button/src"

import { PasswordFieldProps } from "./field-password.types"

const PasswordField: React.FC<PasswordFieldProps> = forwardRef<
	HTMLInputElement,
	PasswordFieldProps
>(
	({
		id,
		label,
		helper,
		errorMessage,
		button = { type: "" },
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
			iconPosition: "end",
			onKeyUp: () => {
				const getValue = document.getElementById(id).value
				setHasValue(getValue.length > 0)
			},
			...props,
		}

		// Button settings
		const buttonProps = Object.assign(
			{
				type: "icon-button",
				showLabel: "Show",
				hideLabel: "Hide",
				icon: isVisible ? "hide" : "show",
				appearance: "tertiary",
				iconOnly: true,
				iconSize: "lg",
				color: "black",
				className: "sui-password__button",
				isSmall: true,
				isDisabled: isDisabled || !hasValue ? true : false,
				onClick: () => setVisible(!isVisible),
				html: "",
			},
			button,
		)

		// Render button appearance
		// switch (button.type) {
		// 	case "standard":
		// 		buttonProps.html = (
		// 			<Button appearance="secondary" {...buttonProps.props}>
		// 				{isVisible ? buttonProps.hideLabel : buttonProps.showLabel}
		// 			</Button>
		// 		)
		// 		break

		// 	default:
		// 		buttonProps.html = (
		// 			<IconButton
		// 				appearance="tertiary"
		// 				icon={buttonProps.icon}
		// 				label={isVisible ? buttonProps.hideLabel : buttonProps.showLabel}
		// 				{...buttonProps.props}
		// 			/>
		// 		)
		// 		break
		// }

		return (
			<Field {...fieldAttrs}>
				<div className="sui-password">
					<Input {...inputAttrs} />
					<Button {...buttonProps} />
					{/*{set.button.html}*/}
				</div>
			</Field>
		)
	},
)

PasswordField.displayName = "PasswordField"

export { PasswordField }
