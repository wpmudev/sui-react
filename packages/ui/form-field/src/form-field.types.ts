import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes } from "@wpmudev/sui-utils"

/**
 * The Type of the error prop
 */
// type errorType = {
// 	state: boolean
// 	text: string
// }

/**
 * Represents the properties for a field component.
 */
interface FormFieldProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		useStylesTypes {
	/**
	 * The unique identifier of the field.
	 */
	id?: string
	/**
	 * The label for the field.
	 */
	label?: string
	/**
	 * The helper text for the field.
	 */
	helper?: React.ReactNode
	/**
	 * The error message or element for the field.
	 */
	error?: string
	/**
	 * Optional CSS class name for the field.
	 */
	className?: string
	/**
	 * Indicates whether the field should be displayed as small or not.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the field is disabled or not.
	 */
	isDisabled?: boolean
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden?: boolean
	/**
	 * The content of the field.
	 */
	children?: React.ReactNode
	/**
	 * Custom width in pixels
	 */
	customWidth?: number
}

/**
 * Represents the properties for an error message component.
 */
interface FormFieldErrorProps {
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

/**
 * Represents the properties for a helper component.
 */
interface FormFieldHelperProps extends useStylesTypes {
	/**
	 * The unique identifier of the helper.
	 */
	id: string
	/**
	 * The content of the helper.
	 */
	children?: React.ReactNode
}

/**
 * Represents the properties for an error message component.
 */
interface FormFieldLabelProps extends useStylesTypes {
	/**
	 * The unique identifier of the error message.
	 */
	id: string
	/**
	 * Hide or show label
	 */
	hidden: boolean
	/**
	 * The content of the error message.
	 */
	children: React.ReactNode
}

export type {
	FormFieldProps,
	FormFieldErrorProps,
	FormFieldHelperProps,
	FormFieldLabelProps,
}
