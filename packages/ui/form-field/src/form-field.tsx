// @ts-nocheck
import React, {
	Children,
	cloneElement,
	isValidElement,
	ReactNode,
	useId,
} from "react"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"

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

	const isErrored =
		"string" === typeof error ? !isEmpty((error as string) ?? "") : !!error

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
		...(isErrored && {
			"aria-errormessage": `${fieldId}-error-message`,
			isError: true,
		}),
	}

	// Render field
	return (
		<div className={classNames} {...props} data-testid="form-field">
			{!isEmpty(label ?? "") && (
				<Label id={fieldId} hidden={isLabelHidden ?? false}>
					{label}
				</Label>
			)}
			{Object.keys(ariaAttrs).length > 0
				? Children.map(children, (child: ReactNode) =>
						isValidElement(child)
							? cloneElement(child, { ...ariaAttrs })
							: child,
				  )
				: children}
			{isErrored && (
				<ErrorMessage id={fieldId} show={isErrored}>
					{error}
				</ErrorMessage>
			)}
			{!!helper && <Helper id={fieldId}>{helper}</Helper>}
		</div>
	)
}

export { FormField }