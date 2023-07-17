import React, { HTMLProps } from "react"

/**
 * Interface representing the properties of a password field.
 */
interface PasswordFieldProps extends HTMLProps<HTMLDivElement> {
	/**
	 * ID of the password field.
	 */
	id: string
	/**
	 * Label for the password field.
	 */
	label?: React.ReactNode
	/**
	 * Helper text for the password field.
	 */
	helper?: React.ReactNode
	/**
	 * Error message for the password field.
	 */
	errorMessage?: React.ReactNode
	/**
	 * Button text for the password field.
	 */
	button?: { type: string }
	/**
	 * Indicates whether the label should be hidden.
	 */
	isLabelHidden?: boolean
	/**
	 * Indicates the size of the field.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether there is an error with the field.
	 */
	isError?: boolean
	/**
	 * Indicates whether the field is disabled.
	 */
	isDisabled?: boolean
}

export { PasswordFieldProps }
