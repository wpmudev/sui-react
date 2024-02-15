import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * This interface defines the props for the Textarea component.
 * It extends the HTMLProps<HTMLTextAreaElement> type to inherit standard HTML textarea element props.
 */
interface TextareaProps
	extends Omit<
			HTMLProps<HTMLTextAreaElement>,
			"height" | "content" | "translate" | "width" | "color"
		>,
		useStylesTypes {
	/** ID for the textarea element. */
	id?: string

	/** Additional CSS class name for styling the textarea. */
	className?: string

	/** The value to be displayed in the textarea. */
	value?: string

	/** The label for the textarea. */
	label?: string

	/** When the textarea has errors. */
	isError?: boolean

	/** Whether the textarea should be displayed in a small size. */
	isSmall?: boolean

	/** Whether the textarea is disabled or not. */
	isDisabled?: boolean

	/** Event handler for the onChange event of the textarea. */
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void

	/** Custom width in pixels. */
	customWidth?: number
}

export type { TextareaProps }
