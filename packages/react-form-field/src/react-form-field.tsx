import React from "react"
import { isObject, generateCN } from "@wpmudev/react-utils"

// Import required modules
import { Label } from "./elements/label"
import { Helper } from "./elements/helper"
import { ErrorMessage } from "./elements/error-message"

/**
 * Represents the properties for a field component.
 */
interface FieldProps {
	/**
	 * The unique identifier of the field.
	 */
	id: string
	/**
	 * The label for the field.
	 */
	label: string
	/**
	 * The helper text for the field.
	 */
	helper: React.ReactNode
	/**
	 * The error message or element for the field.
	 */
	error: string | React.ReactNode
	/**
	 * Optional CSS class name for the field.
	 */
	className?: string
	/**
	 * Indicates whether the field should be displayed as small or not.
	 */
	isSmall: boolean
	/**
	 * Indicates whether the field is disabled or not.
	 */
	isDisabled: boolean
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden: boolean
	/**
	 * The content of the field.
	 */
	children?: React.ReactNode
}

// Build form field component
const Field: React.FC<FieldProps> = ({
	id,
	label,
	helper,
	error,
	className,
	isSmall = false,
	isDisabled = false,
	isLabelHidden = false,
	children,
	...props
}) => {
	// Define error object
	const errorObj = Object.assign(
		{
			state: false,
			text: "",
		},
		error,
	)

	// Generate classnames
	const classNames = generateCN(
		"sui-form-field",
		{
			sm: isSmall,
			disabled: isDisabled,
		},
		className,
	)

	// Render field
	return (
		<div className={classNames} {...props}>
			<Label id={id} hidden={isLabelHidden}>
				{label}
			</Label>
			{children}
			{isObject(error) && Object.keys(error).length > 0 && (
				<ErrorMessage id={id} show={errorObj.state} small={isSmall}>
					{errorObj.text}
				</ErrorMessage>
			)}
			{!!helper && (
				<Helper id={id} small={isSmall}>
					{helper}
				</Helper>
			)}
		</div>
	)
}

export { Field, FieldProps }
