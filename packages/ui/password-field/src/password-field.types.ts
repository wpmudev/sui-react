import React, { HTMLProps } from "react"
import { validationPropsType } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Interface representing the properties of a password field.
 */
interface PasswordFieldProps
	extends Omit<
			HTMLProps<HTMLDivElement>,
			"id" | "height" | "content" | "translate" | "width" | "color"
		>,
		SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		validationPropsType {
	/**
	 * ID of the password field.
	 */
	id?: string
	/**
	 * Button text for the password field.
	 */
	buttonType?: "icon" | "text"
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
	/**
	 * Placeholder text for the password input
	 */
	placeholder?: string
	/**
	 * Custom width in pixels
	 */
	customWidth?: number
}

export type { PasswordFieldProps }
