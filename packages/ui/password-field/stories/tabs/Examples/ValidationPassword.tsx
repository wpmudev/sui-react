import React from "react"
import { FormField } from "@wpmudev/sui-form-field"
import { useValidation } from "@wpmudev/sui-hooks"
import dedent from "dedent"

// Import required component.
import { PasswordField } from "../../../src"

export const ValidationPasswordCode = dedent`
import { FormField } from "@wpmudev/sui-form-field"
import { useValidation } from "@wpmudev/sui-hooks"
import { PasswordField } from "@wpmudev/sui-password-field"

const ValidationPassword = () => {
	const [status, validationError] = useValidation((value) => {
		if (value.length < 8) {
			return "Password must be at least 8 characters long"
		}
	})

	return (
		<FormField
			id="input-1"
			label="Password Field"
			helper="Helper Text"
			error={status.error}
		>
			<PasswordField isError={status.isError} {...validationError} />
		</FormField>
	)
}
`

export const ValidationPassword = () => {
	const [status, validationError] = useValidation((value) => {
		if (value.length < 8) {
			return "Password must be at least 8 characters long"
		}
	})

	return (
		<FormField
			id="input-1"
			label="Password Field"
			helper="Helper Text"
			error={status.error}
		>
			<PasswordField isError={status.isError} {...validationError} />
		</FormField>
	)
}
