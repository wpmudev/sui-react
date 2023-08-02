import React from "react"

import { generateCN } from "@wpmudev/sui-utils"

import DatePickerPopover from "./date-picker-popover"
import { DatePickerProvider } from "./date-picker-context"
import { DatePickerInput } from "./date-picker-input"

export const CALENDARS: { [key: string]: symbol } = {
	START_MONTH: Symbol("startMonth"),
	END_MONTH: Symbol("endMonth"),
}

const DatePicker: React.FC<any> = ({ className = "", ...props }) => {
	// generate class names
	const classNames = generateCN("sui-date-picker", {}, className ?? "")

	return (
		<DatePickerProvider {...props}>
			<div className={classNames}>
				<DatePickerInput />
				<DatePickerPopover />
			</div>
		</DatePickerProvider>
	)
}

export { DatePicker }
