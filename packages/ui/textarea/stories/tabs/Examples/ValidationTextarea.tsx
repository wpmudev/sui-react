import React from "react"
import { FormField } from "@wpmudev/sui-form-field"
import { useValidation } from "@wpmudev/sui-hooks"
import dedent from "dedent"

// Import required component.
import { Textarea } from "../../../src"

export const ValidationTextareaCode = dedent`
import { FormField } from "@wpmudev/sui-form-field"
import { useValidation } from "@wpmudev/sui-hooks"
import { Teaxtarea } from "@wpmudev/sui-text-area"

const ValidationTextarea = () => {
	const [status, validationError] = useValidation({
		required: true,
		message: "You must enter a value",
	})

	return (
		<FormField
			id="textarea-1"
			label="Text Field"
			helper="Helper Text"
			error={status.error}
		>
			<Textarea isError={status.isError} {...validationError} />
		</FormField>
	)
}
`

export const ValidationTextarea = () => {
	const [status, validationError] = useValidation({
		required: true,
		message: "You must enter a value",
	})

	return (
		<FormField
			id="textarea-1"
			label="Text Field"
			helper="Helper Text"
			error={status.error}
		>
			<Textarea isError={status.isError} {...validationError} />
		</FormField>
	)
}
