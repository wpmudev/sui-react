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
	label,
	labelId,
	description,
	descriptionId,
	errorMessage,
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
			errored: !isEmpty(errorMessage ?? ""),
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
			<div className="sui-textarea__wrapper">
				<textarea
					id={id ?? ""}
					className="sui-textarea__field"
					value={currentValue}
					aria-labelledby={condContent(labelId)}
					aria-describedby={condContent(labelId)}
					disabled={isDisabled}
					onChange={handleOnChange}
					{...props}
					{...methods}
				/>
				<label className="sui-textarea__label" htmlFor={id} id={labelId}>
					{label}
				</label>
			</div>
			{!isEmpty(errorMessage ?? "") && (
				<span className="sui-textarea__error-message" role="alert" id={errorId}>
					{errorMessage}
				</span>
			)}
			{!isEmpty(description ?? "") && isEmpty(errorMessage ?? "") && (
				<span
					className="sui-textarea__description"
					id={descriptionId + errorId ? ` ${errorId}` : ""}
				>
					{description}
				</span>
			)}
		</div>
	)
}

// Publish required component.
export { Textarea }
