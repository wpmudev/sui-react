import React, { useCallback, useState } from "react"
import {
	isEmpty,
	isFunction,
	condContent,
	generateCN,
} from "@wpmudev/sui-utils"

import { useInteraction } from "@wpmudev/sui-hooks"

import { TextareaProps } from "./textarea.types"

// Build "Textarea" component.
const Textarea: React.FC<TextareaProps> = ({
	id,
	className = "",
	value = "",
	labelId,
	descriptionId,
	errorId,
	isSmall = false,
	isDisabled = false,
	onChange = () => {},
	...props
}) => {
	const [currentValue, setCurrentValue] = useState(value)
	const [isHovered, isFocused, methods] = useInteraction({})

	const classNames = generateCN(
		"sui-textarea",
		{
			error: !isEmpty(errorId ?? ""),
			disabled: isDisabled,
			filled: !!currentValue,
			sm: isSmall,
			hover: isHovered,
			focus: isFocused,
		},
		className,
	)

	const handleOnChange = useCallback(
		(e) => {
			setCurrentValue(e.target.value)
			if (isFunction(onChange)) {
				onChange(e)
			}
		},
		[onChange],
	)

	return (
		<div className={classNames}>
			<textarea
				id={id ?? ""}
				className="sui-textarea__field"
				value={currentValue}
				aria-labelledby={condContent(labelId)}
				aria-describedby={condContent(descriptionId)}
				disabled={isDisabled}
				onChange={handleOnChange}
				{...props}
				{...methods}
			/>
		</div>
	)
}

// Publish required component.
export { Textarea }
