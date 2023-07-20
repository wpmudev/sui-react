import React, { useCallback, useState } from "react"
import {
	isEmpty,
	isFunction,
	condContent,
	generateCN,
} from "@wpmudev/react-utils"
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

	const classNames = generateCN(
		"sui-input sui-textarea",
		{
			error: !isEmpty(errorMessage ?? ""),
			disabled: isDisabled,
			filled: !!currentValue,
			sm: isSmall,
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
			<div className="sui-input__wrapper">
				<textarea
					id={id ?? ""}
					className="sui-input__field"
					value={currentValue}
					aria-labelledby={condContent(labelId)}
					aria-describedby={condContent(labelId)}
					disabled={isDisabled}
					onChange={handleOnChange}
					{...props}
				/>
				<label className="sui-input__label" htmlFor={id} id={labelId}>
					{label}
				</label>
			</div>
			{isEmpty(errorMessage ?? "") && (
				<span className="sui-input__error-message" role="alert" id={errorId}>
					{errorMessage}
				</span>
			)}
			{!isEmpty(description ?? "") && (
				<span
					className="sui-input__description"
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
