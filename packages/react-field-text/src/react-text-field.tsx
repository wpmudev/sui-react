import React, { forwardRef } from "react"

import { Field } from "@wpmudev/react-form-field"
import { Input } from "@wpmudev/react-input"

/**
 * Represents the properties for a text field component.
 */
interface TextFieldProps {
	/**
	 * The unique identifier of the text field.
	 */
	id: string
	/**
	 * The label for the text field.
	 */
	label: string
	/**
	 * The helper text for the text field.
	 */
	helper: string
	/**
	 * The error message for the text field.
	 */
	errorMessage: string
	/**
	 * Indicates whether the text field should be displayed as small or not.
	 */
	isSmall: boolean
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden: boolean
	/**
	 * Indicates whether the text field has an error or not.
	 */
	isError: boolean
	/**
	 * Indicates whether the text field is disabled or not.
	 */
	isDisabled: boolean
}

const TextField: React.FC<TextFieldProps> = forwardRef<
	HTMLInputElement,
	TextFieldProps
>(
	(
		{
			id,
			label,
			helper,
			errorMessage,
			isSmall = false,
			isLabelHidden = false,
			isError = false,
			isDisabled = false,
			...props
		},
		ref,
	) => {
		const error = Object.assign({
			state: isError,
			text: errorMessage,
		})

		return (
			<Field
				id={id}
				label={label}
				helper={helper}
				error={error}
				isLabelHidden={isLabelHidden}
				isSmall={isSmall}
				isDisabled={isDisabled}
			>
				<Input
					ref={ref}
					id={id}
					isSmall={isSmall}
					isError={isError}
					isDisabled={isDisabled}
					{...props}
				/>
			</Field>
		)
	},
)

TextField.displayName = "TextField"

export { TextField, TextFieldProps }
