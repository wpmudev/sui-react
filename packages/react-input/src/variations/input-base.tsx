import React, {
	ForwardRefExoticComponent,
	PropsWithoutRef,
	forwardRef,
	HTMLProps,
	useCallback,
	useState,
} from "react"

import {
	isUndefined,
	isEmpty,
	isFunction,
	generateCN,
	condContent,
} from "@wpmudev/react-utils"
import { InteractionTypes, useInteraction } from "@wpmudev/react-hooks"

import { Icon } from "../elements/input-icon"

/**
 * The `InputPropsTypes` interface represents the props for an input element.
 * It extends the `HTMLProps<HTMLInputElement>` interface and includes additional props for interaction types.
 *
 * @interface InputProps
 * @augments {HTMLProps<HTMLInputElement>}
 * @augments {InteractionTypes}
 */
interface InputProps extends HTMLProps<HTMLInputElement>, InteractionTypes {
	/**
	 * The type of the input element.
	 */
	type: string
	/**
	 * The placeholder text for the input element.
	 */
	placeholder: string
	/**
	 * The unique identifier for the input element.
	 */
	id: string
	/**
	 * The CSS class name for the input element.
	 */
	className: string
	/**
	 * The CSS class name for the input element's input field.
	 */
	inputClass: string
	/**
	 * Specifies whether the input element is a multiline input.
	 */
	isMultiLine: boolean
	/**
	 * Specifies whether the input element is small in size.
	 */
	isSmall: boolean
	/**
	 * Specifies whether the input element is read-only.
	 */
	isReadOnly: boolean
	/**
	 * Specifies whether the input element has an error.
	 */
	isError: boolean
	/**
	 * Specifies whether the input element is disabled.
	 */
	isDisabled: boolean
	/**
	 * The callback function for handling input changes.
	 */
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	/**
	 * Optional icon to be displayed.
	 */
	icon?: string
	/**
	 * Optional icon position to be displayed before or after text.
	 */
	iconPosition: "start" | "end"
}

// Build input component
const Input: ForwardRefExoticComponent<PropsWithoutRef<InputProps>> =
	forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
		(
			{
				type,
				defaultValue,
				placeholder,
				id,
				className,
				inputClass,
				isMultiLine = false,
				isSmall = false,
				isReadOnly = false,
				isError = false,
				isDisabled = false,
				onMouseEnter = () => {},
				onMouseLeave = () => {},
				onChange,
				icon,
				iconPosition = "start",
				...props
			},
			ref,
		) => {
			// Define states
			const [value, setValue] = useState(defaultValue)
			const [isHovered, isFocused, interactionMethods] = useInteraction({})

			// Properties validation
			const hasID = !isUndefined(id) && !isEmpty(id)

			if (!hasID) {
				throw new Error(
					`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n`,
				)
			}

			// handle on change
			const handleChange = useCallback(
				(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
					// update value if input isn't read-only
					if (!isReadOnly) {
						setValue(e?.target?.value ?? "")
					}

					if (isFunction(onChange)) {
						onChange(e)
					}
				},
				[isReadOnly, onChange],
			)

			// flags
			const hasValue = !isUndefined(value) && !isEmpty(value)
			const hasPlaceholder = !isUndefined(placeholder) && !isEmpty(placeholder)
			const hasClassInput = !isUndefined(inputClass) && !isEmpty(inputClass)

			// Define input type
			let inputType = "text"

			// expected types
			if (
				["email", "number", "password", "search", "tel", "url"].includes(type)
			) {
				inputType = type
			}

			// Generate class names based on the prop values
			const classNames = generateCN(
				"sui-input",
				{
					sm: isSmall,
					readonly: isReadOnly,
					hover: isHovered && !isReadOnly,
					focus: isFocused && !isReadOnly,
					filled: hasValue,
					"has-icon": !isEmpty(icon),
					error: isError,
					disabled: isDisabled,
					// Define multiline class name
					[`multiline${isSmall ? "-sm" : ""}`]: isMultiLine,
				},
				className ?? "",
			)

			// Generate input class names
			const inputClassNames = generateCN(
				"sui-input__input",
				{},
				hasClassInput ? inputClass : "",
			)

			// Define main tag
			let TagName = "input"

			// render as textarea if multiline requested
			if (isMultiLine) {
				TagName = "textarea"
			}

			// Input field props
			const attrs = {
				id,
				ref,
				type: condContent(isMultiLine, inputType),
				placeholder: condContent(hasPlaceholder, placeholder),
				readOnly: condContent(isReadOnly, true),
				disabled: condContent(isDisabled, true),
				value: value ?? "",
				className: inputClassNames,
				onChange: handleChange,
				// Interaction methods
				...interactionMethods,
				// Any additional props
				...props,
			}

			// Render component
			return (
				<div className={classNames}>
					{icon && !isMultiLine && "start" === iconPosition && (
						<Icon name={icon ?? ""} />
					)}
					<TagName {...attrs}></TagName>
					{icon && !isMultiLine && "end" === iconPosition && (
						<Icon name={icon ?? ""} />
					)}
				</div>
			)
		},
	)

Input.displayName = "Input"

export { Input, InputProps }
