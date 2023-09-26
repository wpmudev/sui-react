import React, { useId } from "react"
import { isObject, generateCN, isEmpty } from "@wpmudev/sui-utils"

// Import required modules
import { Label } from "./elements/label"
import { Helper } from "./elements/helper"
import { ErrorMessage } from "./elements/error-message"

import { FormFieldProps } from "./form-field.types"

// Build form field component
const FormField: React.FC<FormFieldProps> = ({
	id = "",
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
	// Define a unique id.
	let fieldId = useId()

	if (!isEmpty(id)) {
		fieldId = id
	}

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

	// Define aria attributes.
	const ariaAttrs = {
		id: fieldId,
		isSmall,
		isDisabled,
		...(!isEmpty(label ?? "") && { "aria-labelledby": `${fieldId}-label` }),
		...(!!helper && { "aria-describedby": `${fieldId}-helper` }),
		...(isObject(error) &&
			Object.keys(error).length > 0 &&
			errorObj.state && {
				"aria-errormessage": `${fieldId}-error-message`,
				isError: true,
			}),
	}

	// Render field
	return (
		<div className={classNames} {...props}>
			{!isEmpty(label ?? "") && (
				<Label id={fieldId} hidden={isLabelHidden ?? false}>
					{label}
				</Label>
			)}
			{Object.keys(ariaAttrs).length > 0
				? React.Children.map(children, (child) => {
						// Pass ariaAttrs as a prop to children
						if (React.isValidElement(child)) {
							return React.cloneElement(child, { ...ariaAttrs })
						}
						return child
				  })
				: children}
			{isObject(error) && Object.keys(error).length > 0 && errorObj.state && (
				<ErrorMessage id={fieldId} show={errorObj.state} small={isSmall}>
					{errorObj.text}
				</ErrorMessage>
			)}
			{!!helper && (
				<Helper id={fieldId} small={isSmall}>
					{helper}
				</Helper>
			)}
		</div>
	)
}

export { FormField }
