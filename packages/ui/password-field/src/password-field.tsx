import React, { useId, useState } from "react"

import { Input, InputProps } from "@wpmudev/sui-input"
import { Button, ButtonProps } from "@wpmudev/sui-button"

import { PasswordFieldProps } from "./password-field.types"

const PasswordField: React.FC<PasswordFieldProps> = ({
	id,
	buttonType = "icon",
	isSmall = false,
	isError = false,
	isDisabled = false,
	placeholder,
	...props
}) => {
	// Generate unique id if not provided
	const uniqueId = useId()

	if (!id) {
		id = uniqueId
	}

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
		placeholder,
		onKeyUp: () => {
			const inputElement = document.getElementById(
				id as string,
			) as HTMLInputElement
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
		isDisabled: isDisabled || !hasValue,
		onClick: () => setVisible(!isVisible),
		...(buttonType === "icon" && {
			icon: isVisible ? "Hide" : "Show",
			appearance: "tertiary",
			iconOnly: true,
			iconSize: isSmall ? "sm" : "md",
		}),
		isSmall,
	}

	return (
		<div className="sui-password" data-testid="password-field">
			<Input {...(inputAttrs as InputProps)} />
			<Button {...(buttonProps as ButtonProps)}>{buttonProps.label}</Button>
		</div>
	)
}

PasswordField.displayName = "PasswordField"

export { PasswordField }
