import React, {
	ForwardRefExoticComponent,
	PropsWithoutRef,
	forwardRef,
	useCallback,
	useState,
	useEffect,
} from "react"

import {
	isUndefined,
	isEmpty,
	generateCN,
	condContent,
} from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import { CloseAlt } from "@wpmudev/sui-icons"

import { Icon } from "./elements/input-icon"
import { InputProps } from "./input.types"

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
				iconPosition,
				allowClear = false,
				...props
			},
			ref,
		) => {
			// Define states
			const [value, setValue] = useState<typeof defaultValue>(defaultValue)
			const [isHovered, isFocused, interactionMethods] = useInteraction({})

			// Properties validation
			const hasID = !isUndefined(id) && !isEmpty(id)

			if (!hasID) {
				throw new Error(
					`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n`,
				)
			}

			useEffect(() => {
				setValue(defaultValue)
			}, [defaultValue])

			// handle on change
			const handleChange = useCallback(
				(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
					// update value if input isn't read-only
					if (!isReadOnly) {
						setValue(e?.target?.value ?? "")
					}

					if (!!onChange) {
						onChange(e)
					}
				},
				[isReadOnly, onChange],
			)

			// Clear input value
			const onClear = useCallback(() => {
				setValue("")
				if (!!onChange) {
					onChange("")
				}
			}, [onChange])

			// flags
			const hasValue = !isUndefined(value) && !isEmpty((value ?? "") as string)
			const hasPlaceholder = !isUndefined(placeholder) && !isEmpty(placeholder)
			const hasClassInput = !isUndefined(inputClass) && !isEmpty(inputClass)

			// Define input type
			let inputType: string | undefined = "text"

			// expected types
			if (
				["email", "number", "password", "search", "tel", "url"].includes(
					type as string,
				)
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
					"icon-start": !isEmpty(iconPosition) && "start" === iconPosition,
					"icon-end": !isEmpty(iconPosition) && "end" === iconPosition,
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
				{
					"allow-clear":
						allowClear && !isEmpty(value as string) && !isMultiLine,
				},
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
				type: condContent(!isMultiLine, inputType),
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
						<Icon name={icon ?? ""} size={isSmall ? "md" : "lg"} />
					)}
					<TagName {...attrs}></TagName>
					{icon && !isMultiLine && "end" === iconPosition && (
						<Icon name={icon ?? ""} size={isSmall ? "md" : "lg"} />
					)}
					{allowClear && !isEmpty(value as string) && !isMultiLine && (
						<CloseAlt
							className="sui-input__input-clear"
							onClick={onClear}
							color="neutral"
						/>
					)}
				</div>
			)
		},
	)

Input.displayName = "Input"

export { Input }
