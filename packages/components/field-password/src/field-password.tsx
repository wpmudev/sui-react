import React, { forwardRef, useState } from "react"
import { generateCN } from "@wpmudev/sui-utils"
import { FormField } from "@wpmudev/sui-form-field"
import { Input } from "@wpmudev/sui-input"
import { Button } from "@wpmudev/sui-button"

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
		isSmall = false,
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
			isSmall,
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
			isSmall,
			...props,
		}

		// Button settings
		const buttonProps = {
			label: isVisible ? "Hide" : "Show",
			appearance: "secondary",
			color: "black",
			className: "sui-password__button",
			isDisabled: isDisabled || !hasValue ? true : false,
			onClick: () => setVisible(!isVisible),
			...(button.type === "icon-button" && {
				icon: isVisible ? "hide" : "show",
				appearance: "tertiary",
				iconOnly: true,
				iconSize: isSmall ? "md" : "lg",
			}),
			isSmall,
		}

		const classNames = generateCN("sui-password", {
			password: true,
			icon: button.type === "icon-button" ? true : false,
		})

		return (
			<FormField {...fieldAttrs}>
				<div className="sui-password">
					<Input {...inputAttrs} />
					<Button {...buttonProps}>{buttonProps.label}</Button>
				</div>
			</FormField>
		)
	},
)

PasswordField.displayName = "PasswordField"

export { PasswordField }
