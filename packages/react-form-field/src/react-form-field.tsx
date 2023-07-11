import React from "react"
import { isObject, generateCN } from "@wpmudev/react-utils"

// Import required modules
import { Label } from "./elements/label"
import { Helper } from "./elements/helper"
import { ErrorMessage } from "./elements/error-message"

interface FieldPropTypes {
	id: string
	label: string
	helper: React.ReactNode
	error: string | React.ReactNode
	className: string
	isSmall: boolean
	isDisabled: boolean
	isLabelHidden: false
	children?: React.ReactNode
}

// Build form field component
const Field = ({
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
}: FieldPropTypes) => {
	// Define error object
	const errorObj = Object.assign(
		{
			state: false,
			text: "",
		},
		error,
	)

	// Props validation
	// const hasLabel = !isUndefined(label) && !isEmpty(label)
	// const hasLabel = !isUndefined(helper) && !isEmpty(helper)
	// const hasClassName = !isUndefined(className) && !isEmpty(className)

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

// Publish component(s)
export { Field, FieldPropTypes }
