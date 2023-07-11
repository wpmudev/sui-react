import React from "react"

interface ErrorMessagePropTypes {
	id: string
	show: boolean
	children: React.ReactNode
}

// Build field error message element
export const ErrorMessage = ({
	id,
	show = false,
	children,
}: ErrorMessagePropTypes) => (
	<span
		id={`${id}__error-message`}
		className="sui-form-field__helper sui-color-error--50"
	>
		{show && children}
	</span>
)
