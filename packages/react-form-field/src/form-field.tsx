import React from "react"
import { isObject, generateCN, isEmpty } from "@wpmudev/react-utils"

// Import required modules
import { Label } from "./elements/label"
import { Helper } from "./elements/helper"
import { ErrorMessage } from "./elements/error-message"

import { FieldProps } from "./form-field.types"

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
			{!isEmpty(label ?? "") && (
				<Label id={id} hidden={isLabelHidden}>
					{label}
				</Label>
			)}
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

export { Field }
