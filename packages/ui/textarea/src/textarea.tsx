import React, { useCallback, useState, useId } from "react"
import { isFunction, generateCN } from "@wpmudev/sui-utils"

import { useInteraction } from "@wpmudev/sui-hooks"

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
	...props
}) => {
	const [currentValue, setCurrentValue] = useState(value)
	const [isHovered, isFocused, methods] = useInteraction({})

	// generate a unique id if not provided
	const uniqueId = useId()

	if (!id) {
		id = uniqueId
	}

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
		className,
	)

	const handleOnChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setCurrentValue(e.target.value)
			if (isFunction(onChange) && !!onChange) {
				onChange(e)
			}
		},
		[onChange],
	)

	return (
		<div className={classNames} data-testid="textarea">
			<textarea
				id={id}
				className="sui-textarea__field"
				value={currentValue}
				disabled={isDisabled}
				onChange={handleOnChange}
				aria-label={label || "textarea"}
				data-testid="textarea-input"
				{...props}
				{...methods}
			/>
		</div>
	)
}

// Publish required component.
export { Textarea }
