import React from "react"
import { FormField } from "@wpmudev/sui-form-field"
import { useValidation } from "@wpmudev/sui-hooks"
import dedent from "dedent"

// Import required component.
import { Input } from "../../../src"

export const ValidationInputCode = dedent`
import { FormField } from "@wpmudev/sui-form-field"
import { useValidation } from "@wpmudev/sui-hooks"
import { Input } from "@wpmudev/sui-input"

const ValidationInput = () => {
	const [status, validationError] = useValidation({
		required: true,
		message: "This input is required",
	})

	return (
		<FormField
			id="input-1"
			label="Required Input"
			helper="Helper Text"
			error={status.error}
		>
			<Input isError={status.isError} {...validationError} />
		</FormField>
	)
}
`

export const ValidationInput = () => {
	const [status, validationError] = useValidation({
		required: true,
		message: "This input is required",
	})

	return (
		<FormField
			id="input-1"
			label="Required Input"
			helper="Helper Text"
			error={status.error}
		>
			<Input isError={status.isError} {...validationError} />
		</FormField>
	)
}
