import React, { useId } from "react"

import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"

import DatePickerPopover from "./date-picker-popover"
import { DatePickerProvider } from "./date-picker-context"
import { DatePickerInput } from "./date-picker-input"
import { DatePickerProps } from "./date-picker.types"
import { useStyles } from "@wpmudev/sui-hooks"

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
	id = "",
	className,
	type = "single",
	startDate,
	endDate,
	minDate,
	maxDate,
	alignment = "left",
	isDisabled = false,
	isError = false,
	onChange = () => null,
	onSubmit,
	onClose,
	ariaAttrs = {},
	_htmlProps,
	_style,
}) => {
	// Generate a unique id for the input field using the useId hook
	let uid = useId()

	const pickType: string = type ?? "single"
	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// Generate class names for the component
	const classNames = generateCN(
		"sui-date-picker",
		{
			[pickType]: !isEmpty(pickType),
		},
		// Append any custom className provided by the parent component
		suiInlineClassname,
	)

	if (!isEmpty(id)) {
		uid = id
	}

	// Define aria attributes.
	const datepickerProps = {
		type,
		startDate,
		endDate,
		minDate,
		maxDate,
		isDisabled,
		onChange,
		onSubmit,
		onClose,
	}

	return (
		// Wrap the component with the DatePickerProvider and pass the props down to it
		<DatePickerProvider {...datepickerProps}>
			<div
				className={classNames}
				data-testid="date-picker"
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				<DatePickerInput
					id={uid}
					isDisabled={isDisabled}
					isError={isError}
					ariaAttrs={ariaAttrs}
				/>
				<DatePickerPopover alignment={alignment} />
			</div>
		</DatePickerProvider>
	)
}
export { DatePicker }
