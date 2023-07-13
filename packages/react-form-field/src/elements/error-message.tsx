import React from "react"

import { FormFieldErrorProps } from "../form-field.types"

// Build field error message element
const ErrorMessage: React.FC<FormFieldErrorProps> = ({
	id,
	show = false,
	children,
}) => (
	<span
		id={`${id}__error-message`}
		className="sui-form-field__helper sui-color-error--50"
	>
		{show && children}
	</span>
)

export { ErrorMessage, FormFieldErrorProps }
