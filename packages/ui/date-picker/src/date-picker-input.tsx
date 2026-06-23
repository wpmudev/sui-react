import React, { useCallback, useContext, useEffect, useId, useRef } from "react"
import { format } from "date-fns"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { Input } from "@wpmudev/sui-input"

import { DatePickerContext } from "./date-picker-context"
import { isEmpty } from "../../../docs/src/utils/index"

const DatePickerInput: React.FC<any> = ({
	id,
	isError,
	disabled,
	ariaAttrs = {},
}) => {
	// DatePickerContext to handle the date picker state
	const ctx = useContext(DatePickerContext)!

	// Keep track of the last valid (complete) date range
	const lastValidRangeRef = useRef<string>("")

	// Generate classNames for the input field based on the provided props
	const classNames = generateCN("sui-date-picker__input", {
		single: ctx?.isSingle,
		range: !ctx?.isSingle,
		disabled: ctx?.isDisabled,
	})

	useEffect(() => {
		if (ctx?.isDisabled) {
			ctx.setIsOpen(false)
		}
	}, [ctx, ctx?.isDisabled])

	// function to toggle the date picker visibility when the input field is clicked
	const onInputClick = useCallback(
		(event: React.MouseEvent<HTMLInputElement>) => {
			// Stop event propagation
			event.stopPropagation()

			ctx.setIsOpen(!ctx.isOpen) // Toggle the isOpen state in the context
		},
		[ctx],
	)

	// Extract the date range from the DatePickerContext, defaulting to an empty object
	const { startDate, endDate } = ctx?.dateRange ?? {}

	// Date format string for displaying the selected date(s)
	const formatStr = ctx?.dateFormat || "LLLL d, yyyy"

	// value to be displayed in the input field based on the context state
	let value = ``

	if (ctx?.isSingle && !!startDate) {
		value = `${format(startDate, formatStr)}`
	} else if (!!startDate && !!endDate) {
		// Both dates are selected - show the complete range
		value = `${format(startDate, formatStr)} - ${format(endDate, formatStr)}`
		// Update the last valid range
		lastValidRangeRef.current = value
	} else if (!ctx?.isSingle) {
		// In range mode, if only start date is selected, keep showing the last valid range
		value = lastValidRangeRef.current
	}

	return (
		<div className={classNames} data-testid="date-picker-input-container">
			<Input
				id={id}
				icon="Calendar"
				iconPosition="start"
				defaultValue={value ?? ""}
				onClick={onInputClick}
				className="sui-datepicker__input--element"
				isError={isError}
				ariaAttrs={ariaAttrs}
				_htmlProps={{
					onKeyDown: (e: any) => handleOnKeyDown(e, onInputClick),
					"data-testid": "date-picker-input-container-cta",
					tabIndex: disabled ? -1 : 0,
					readOnly: true,
				}}
			/>
		</div>
	)
}

export { DatePickerInput }
