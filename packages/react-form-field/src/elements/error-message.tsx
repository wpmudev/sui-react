import React from "react"

/**
 * Represents the properties for an error message component.
 */
interface ErrorMessageProps {
	/**
	 * The unique identifier of the error message.
	 */
	id: string
	/**
	 * Indicates whether the error message should be shown or not.
	 */
	show: boolean
	/**
	 * The content of the error message.
	 */
	children: React.ReactNode
}

// Build field error message element
const ErrorMessage: React.FC<ErrorMessageProps> = ({
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

export { ErrorMessage, ErrorMessageProps }
