import React, { forwardRef, useState } from "react"
import { Input, InputProps } from "@wpmudev/sui-input"
import { Button, ButtonProps } from "@wpmudev/sui-button"

import { PasswordFieldProps } from "./field-password.types"

const PasswordField: React.FC<PasswordFieldProps> = ({
	id,
	button = { type: "" },
	isSmall = false,
	isError = false,
	isDisabled = false,
	onClick = () => null,
	...props
}) => {
	// Define password visibility
	const [hasValue, setHasValue] = useState(false)
	const [isVisible, setVisible] = useState(false)
	// Input settings
	const inputAttrs = {
		id,
		type: isVisible ? "text" : "password",
		inputClass: "sui-password__input",
		isError,
		isDisabled,
		iconPosition: "end",
		onKeyUp: () => {
			const inputElement = document.getElementById(id) as HTMLInputElement
			const getValue = inputElement?.value
			setHasValue(getValue?.length > 0)
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

	return (
		<div className="sui-password">
			<Input {...(inputAttrs as InputProps)} />
			<Button {...(buttonProps as ButtonProps)}>{buttonProps.label}</Button>
		</div>
	)
}

PasswordField.displayName = "PasswordField"

export { PasswordField }
