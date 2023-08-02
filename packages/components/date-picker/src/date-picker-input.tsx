import React, { useCallback, useContext } from "react"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { Input } from "@wpmudev/sui-input"
import { DatePickerContext } from "./date-picker-context"

const DatePickerInput: React.FC<any> = ({ ...props }) => {
	const classNames = generateCN("sui-date-picker__input", {})
	const ctx = useContext(DatePickerContext)

	// toggle visibility when click on input field.
	const onInputClick = useCallback(() => {
		ctx.setIsOpen(!ctx.isOpen)
	}, [ctx])

	// Render the day cell only if the value prop is truthy (i.e., a valid date).
	return (
		<div
			tabIndex={props.disabled ? -1 : 0}
			role="button"
			className={classNames}
			onClick={onInputClick}
			onKeyDown={(e) => handleOnKeyDown(e, onInputClick)}
		>
			<Input
				id="input-id-3"
				tabIndex={-1}
				icon="calendar"
				iconPosition="start"
				isSmall={true}
				readOnly={true}
				// defaultValue={value ?? ""}
			/>
		</div>
	)
}

export { DatePickerInput }
