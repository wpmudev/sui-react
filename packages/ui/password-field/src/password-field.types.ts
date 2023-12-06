import React, { HTMLProps } from "react"

/**
 * Interface representing the properties of a password field.
 */
interface PasswordFieldProps extends Omit<HTMLProps<HTMLDivElement>, "id"> {
	/**
	 * ID of the password field.
	 */
	id: string
	/**
	 * Button text for the password field.
	 */
	button?: { type: "icon-button" | "text" }
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
