import React, { useCallback, useContext } from "react"
import { isSameDay, isWithinInterval } from "date-fns"

import { handleOnKeyDown, generateCN } from "@wpmudev/sui-utils"

import { DatePickerContext } from "./date-picker-context"
import { DatePickerDateRange } from "./date-picker.types"

/**
 * Compare two date ranges and check if they are the same range.
 *
 * @param {DatePickerDateRange} first  - object containing startDate and endDate properties.
 * @param {DatePickerDateRange} second - object containing startDate and endDate properties.
 * @return {boolean} - if the ranges have the same start and end dates, false otherwise.
 */
const isSameRange = (
	first: DatePickerDateRange,
	second: DatePickerDateRange,
) => {
	// startDate and endDate from the first range object
	const { startDate: fStart, endDate: fEnd } = first

	// startDate and endDate from the second range object
	const { startDate: sStart, endDate: sEnd } = second

	// If both date ranges have valid start and end dates
	if (fStart && sStart && fEnd && sEnd) {
		// If all dates are valid, compare the start and end dates of both ranges
		// using the isSameDay function to check if they are the same day.
		return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd)
	}

	// any of the dates is missing or invalid, return false to indicate that the ranges are not the same.
	return false
}

const DatePickerRange = ({}) => {
	// context of the DatePicker
	const ctx = useContext(DatePickerContext)!

	// Click event for selecting a date range
	const onRangeClick = useCallback(
		(data: DatePickerDateRange) => {
			ctx?.setDateRangeValidated(data)
		},
		[ctx],
	)

	return (
		<div className="sui-date-picker__range">
			{ctx?.definedRanges?.map((range, index) => {
				// If current predfined range is active
				const isActive = isSameRange(
					range,
					ctx?.dateRange as DatePickerDateRange,
				)

				// Date constraints
				const dateConstraints = {
					start: ctx?.minDateValid as Date,
					end: ctx?.maxDateValid as Date,
				}

				// Disabled when it's not in the current range
				const isDisabled =
					range.startDate &&
					range.endDate &&
					(!isWithinInterval(range.startDate as Date, dateConstraints) ||
						!isWithinInterval(range.endDate as Date, dateConstraints))

				return (
					<div
						key={index}
						tabIndex={0}
						role="button"
						className={generateCN("sui-date-picker__range-button", {
							active: isActive && !isDisabled,
							disabled: isDisabled,
						})}
						onClick={() => onRangeClick(range)}
						onKeyDown={(e) =>
							handleOnKeyDown(e, () => {
								onRangeClick(range)
							})
						}
					>
						{range?.label}
					</div>
				)
			})}
		</div>
	)
}

export { DatePickerRange }
