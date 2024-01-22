import React, { HTMLProps } from "react"
import { InteractionTypes } from "@wpmudev/sui-hooks"
import { IconsNamesType } from "@wpmudev/sui-icons"

// Possible values for input type
type InputType =
	| "button"
	| "checkbox"
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "hidden"
	| "image"
	| "month"
	| "number"
	| "password"
	| "radio"
	| "range"
	| "reset"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week"

/**
 * The `InputPropsTypes` interface represents the props for an input element.
 * It extends the `HTMLProps<HTMLInputElement>` interface and includes additional props for interaction types.
 *
 * @interface InputProps
 * @augments {HTMLProps<HTMLInputElement>}
 * @augments {InteractionTypes}
 */
interface InputProps
	extends Omit<
			HTMLProps<HTMLInputElement>,
			| "onChange"
			| "selected"
			| "onMouseEnter"
			| "onMouseLeave"
			| "onMouseDownCapture"
			| "onMouseUp"
			| "onMouseUpCapture"
			| "onFocus"
			| "onBlur"
			| "onBlurCapture"
		>,
		InteractionTypes {
	/**
	 * The type of the input element.
	 */
	type?: InputType
	/**
	 * The placeholder text for the input element.
	 */
	placeholder?: string
	/**
	 * Input field hint
	 */
	hint?: string
	/**
	 * The unique identifier for the input element.
	 */
	id?: string
	/**
	 * The CSS class name for the input element.
	 */
	className?: string
	/**
	 * The CSS class name for the input element's input field.
	 */
	inputClass?: string
	/**
	 * Specifies whether the input element is a multiline input.
	 */
	isMultiLine?: boolean
	/**
	 * Specifies whether the input element is small in size.
	 */
	isSmall?: boolean
	/**
	 * Specifies whether the input element is read-only.
	 */
	isReadOnly?: boolean
	/**
	 * Specifies whether the input element has an error.
	 */
	isError?: boolean
	/**
	 * Specifies whether the input element is disabled.
	 */
	isDisabled?: boolean
	/**
	 * Disables interaction methods
	 */
	isInteractionDisabled?: boolean
	/**
	 * The callback function for handling input changes.
	 */
	onChange?: (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
	) => void
	/**
	 * The callback function for handling input clear
	 */
	onClear?: (value: string | number) => void
	/**
	 * Optional icon to be displayed.
	 */
	icon?: IconsNamesType
	/**
	 * Optional icon position to be displayed before or after text.
	 */
	iconPosition?: "start" | "end"
	/**
	 * Specifies whether the value can be cleared or not
	 */
	allowClear?: boolean
	/**
	 * Disable interactions such as hover and focus
	 */
	disableInteractions?: boolean
}

export type { InputProps }
