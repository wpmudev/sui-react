import React, { useCallback, useState, useId, useEffect } from "react"
import {
	isFunction,
	generateCN,
	_renderHTMLPropsSafely,
} from "@wpmudev/sui-utils"

import { useInteraction, useStyles } from "@wpmudev/sui-hooks"

import { TextareaProps } from "./textarea.types"

// Build "Textarea" component.
const Textarea: React.FC<TextareaProps> = ({
	id,
	className = "",
	value = "",
	isError = false,
	isSmall = false,
	isDisabled = false,
	onChange = () => {},
	label,
	customWidth,
	placeholder = "",
	rows,
	validate,
	validateOnMount,
	resetValidation,
	ariaAttrs = {},
	_htmlProps = {},
	_style = {},
}) => {
	const [currentValue, setCurrentValue] = useState(value)
	const [isHovered, isFocused, methods] = useInteraction({})

	// generate a unique id if not provided
	const uniqueId = useId()

	if (!id) {
		id = uniqueId
	}

	const { suiInlineClassname } = useStyles(_style, className)

	const classNames = generateCN(
		"sui-textarea",
		{
			error: isError,
			disabled: isDisabled,
			filled: !!currentValue,
			sm: isSmall,
			hover: isHovered,
			focus: isFocused,
		},
		suiInlineClassname,
	)

	const handleOnChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setCurrentValue(e.target.value)
			// call the onChange prop
			onChange?.(e)

			// Validate the value
			validate?.(e.target.value)
		},
		[onChange, validate],
	)

	// validate on mount if applicable
	useEffect(() => {
		if (validateOnMount) {
			validate?.(value)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div
			className={classNames}
			data-testid="textarea"
			{...(customWidth && { style: { maxWidth: `${customWidth}px` } })}
		>
			<textarea
				id={id}
				className="sui-textarea__field"
				value={currentValue}
				disabled={isDisabled}
				onChange={handleOnChange}
				aria-label={label || "textarea"}
				data-testid="textarea-input"
				placeholder={placeholder}
				rows={rows}
				{...ariaAttrs}
				{..._renderHTMLPropsSafely(_htmlProps)}
				{...methods}
			/>
		</div>
	)
}

// Publish required component.
export { Textarea }
