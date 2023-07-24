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

export { TextFieldProps }
