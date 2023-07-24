import React, { HTMLProps } from "react"

/**
 * This interface defines the props for the Textarea component.
 * It extends the HTMLProps<HTMLTextAreaElement> type to inherit standard HTML textarea element props.
 */
interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
	/** ID for the textarea element. */
	id?: string

	/** Additional CSS class name for styling the textarea. */
	className?: string

	/** The value to be displayed in the textarea. */
	value?: string

	/** The label for the textarea. */
	label?: string

	/** ID for the label element associated with the textarea. */
	labelId?: string

	/** Description or helper text for the textarea. */
	description?: string

	/** ID for the element associated with the textarea's description. */
	descriptionId?: string

	/** Error message to be displayed for the textarea. */
	errorMessage?: string

	/** ID for the element associated with the textarea's error message. */
	errorId?: string

	/** Whether the textarea should be displayed in a small size. */
	isSmall?: boolean

	/** Whether the textarea is disabled or not. */
	isDisabled?: boolean

	/** Event handler for the onChange event of the textarea. */
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export { TextareaProps }
