import React from "react"

import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import DatePickerPopover from "./date-picker-popover"
import { DatePickerProvider } from "./date-picker-context"
import { DatePickerInput } from "./date-picker-input"
import { DatePickerProps } from "./date-picker.types"

// Define an object to store unique symbols associated with calendar types
export const CALENDARS: { [key: string]: symbol } = {
	// Symbol represents the starting month in the calendar.
	START_MONTH: Symbol("startMonth"),
	// Symbol represents the ending month in the calendar.
	END_MONTH: Symbol("endMonth"),
}

// Define the DatePicker component as a functional component (React.FC)
// It accepts a set of props as input, including a className and other possible props.
const DatePicker: React.FC<DatePickerProps> = ({
	className = "",
	type = "single",
	startDate,
	endDate,
	minDate,
	maxDate,
	isDisabled = false,
	children,
	...props
}) => {
	const pickType: string = type ?? "single"

	// Generate class names for the component
	const classNames = generateCN(
		"sui-date-picker",
		{
			[pickType]: !isEmpty(pickType),
		},
		// Append any custom className provided by the parent component
		className ?? "",
	)

	// Define aria attributes.
	const datepickerProps = {
		type,
		startDate,
		endDate,
		minDate,
		maxDate,
		isDisabled,
		children,
		onChange: props?.onChange,
	}

	return (
		// Wrap the component with the DatePickerProvider and pass the props down to it
		<DatePickerProvider {...datepickerProps}>
			<div className={classNames} data-testid="date-picker">
				<DatePickerInput isDisabled={isDisabled} {...props} />
				<DatePickerPopover />
			</div>
		</DatePickerProvider>
	)
}
export { DatePicker }