import React, { useCallback, useContext, useEffect, useId } from "react"
import { format } from "date-fns"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { Input } from "@wpmudev/sui-input"

import { DatePickerContext } from "./date-picker-context"

const DatePickerInput: React.FC<any> = ({ ...props }) => {
	// DatePickerContext to handle the date picker state
	const ctx = useContext(DatePickerContext)!

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

	// Generate a unique id for the input field using the useId hook
	const id = useId()

	// Extract the date range from the DatePickerContext, defaulting to an empty object
	const { startDate, endDate } = ctx?.dateRange ?? {}

	// Date format string for displaying the selected date(s)
	const formatStr = "LLLL d, yyyy"

	// value to be displayed in the input field based on the context state
	let value = ``

	if (ctx?.isSingle && !!startDate) {
		value = `${format(startDate, formatStr)}`
	} else if (!!startDate && !!endDate) {
		value = `${format(startDate, formatStr)} - ${format(endDate, formatStr)}`
	}

	return (
		<div className={classNames} data-testid="date-picker-input-container">
			<Input
				id={id}
				icon="Calendar"
				iconPosition="start"
				readOnly={true}
				defaultValue={value ?? ""}
				onClick={onInputClick}
				tabIndex={props.disabled ? -1 : 0}
				{...props}
				_htmlProps={{
					onKeyDown: (e: any) => handleOnKeyDown(e, onInputClick),
					"data-testid": "date-picker-input-container-cta",
				}}
			/>
		</div>
	)
}

export { DatePickerInput }
