// @ts-nocheck
import React, {
	Children,
	cloneElement,
	isValidElement,
	ReactNode,
	useId,
} from "react"
import { _renderRestPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"

// Import required modules
import { Label } from "./elements/label"
import { Helper } from "./elements/helper"
import { ErrorMessage } from "./elements/error-message"

import { FormFieldProps } from "./form-field.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

// Build form field component
const FormField: React.FC<FormFieldProps> = ({
	id = "",
	label,
	helper,
	error,
	className,
	isSmall,
	isDisabled = false,
	isLabelHidden = false,
	children,
	customWidth,
	htmlProps = {},
	...props
}) => {
	// Define a unique id.
	let fieldId = useId()

	if (!isEmpty(id)) {
		fieldId = id
	}

	// Default children content
	children = useDefaultChildren(children, "{add form element as children}")

	const isErrored =
		"string" === typeof error ? !isEmpty((error as string) ?? "") : !!error

	const { suiInlineClassname } = useStyles(props, className)

	// Generate classnames
	const classNames = generateCN(
		"sui-form-field",
		{
			sm: isSmall,
			disabled: isDisabled,
		},
		suiInlineClassname,
	)

	// Define aria attributes.
	const ariaAttrs = {
		id: fieldId,
		...(isSmall && { isSmall }),
		...(isDisabled && { isDisabled }),
		...(!isEmpty(label ?? "") && { "aria-labelledby": `${fieldId}-label` }),
		...(!!helper && { "aria-describedby": `${fieldId}-helper` }),
		...(isErrored && {
			"aria-errormessage": `${fieldId}-error-message`,
			isError: true,
		}),
	}

	// Render field
	return (
		<div
			className={classNames}
			{..._renderRestPropsSafely(htmlProps)}
			{...(customWidth && { style: { maxWidth: `${customWidth}px` } })}
			data-testid="form-field"
		>
			{!isEmpty(label ?? "") && (
				<Label id={fieldId} hidden={isLabelHidden ?? false}>
					{label}
				</Label>
			)}
			{Object.keys(ariaAttrs).length > 0
				? Children.map(children, (child: ReactNode) => {
						return isValidElement(child)
							? cloneElement(child, { ...ariaAttrs, ...child.props })
							: child
				  })
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
