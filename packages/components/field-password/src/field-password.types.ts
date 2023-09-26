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
	 * Button text for the password field.
	 */
	button?: { type: string }
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

export type { PasswordFieldProps }
