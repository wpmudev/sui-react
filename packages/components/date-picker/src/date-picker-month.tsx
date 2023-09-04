import React, { useContext, useRef } from "react"

import {
	getDate,
	isSameMonth,
	isToday,
	format,
	isWithinInterval,
	isSameDay,
} from "date-fns"

import { DatePickerDay } from "./date-picker-day"
import {
	generateDaysArray,
	checkIsInSelectedRange,
	checkIsEndOfSelectedRange,
	checkIsSelectedRangeSameDay,
	checkIfStartOfRange,
	splitMonthsIntoChunks,
} from "./helpers"
import { DatePickerContext } from "./date-picker-context"

import { DatePickerNav } from "./date-picker-nav"
import { DatePickerList } from "./date-picker-list"

const DatePickerMonth: React.FC<any> = ({ value: date, marker }) => {
	// Get the context of the DatePicker
	const ctx = useContext(DatePickerContext)
	const { dateRange, helpers, handlers } = ctx

	// Week days labels
	const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

	// Split the month into chunks of weeks, with each week containing 7 days
	const monthChunks = splitMonthsIntoChunks(generateDaysArray(date), 7)

	// Reference for the days block element
	const daysBlockRef = useRef(null)

	// If the current month's date list should be visible in the DatePicker
	const isListVisible = ctx?.toggleId === marker

	// List of days for each week in the month
	const daysList = monthChunks.map((week) =>
		week.map((day) => {
			const isStart = checkIfStartOfRange(dateRange, day)
			const isEnd = checkIsEndOfSelectedRange(dateRange, day)
			const isRangeOneDay = checkIsSelectedRangeSameDay(dateRange)

			// Check if the day is disabled (not part of the current month or outside of the valid date range)
			const disabled =
				!isSameMonth(date, day) ||
				!isWithinInterval(day, {
					start: ctx.minDateValid,
					end: ctx.maxDateValid,
				})

			// Check if the day should be highlighted (part of the selected range or in hover range)
			const highlighted =
				checkIsInSelectedRange(dateRange, day) || helpers.inHoverRange(day)

			// Return the DatePickerDay component with relevant props
			return (
				<DatePickerDay
					key={format(day, "MM-dd-yyyy")}
					filled={
						isStart ||
						isEnd ||
						(ctx.isSingle && isSameDay(day, ctx?.singleDate))
					}
					outlined={isToday(day)}
					highlighted={highlighted && !isRangeOneDay}
					hovered={helpers.inHoverRange(day)}
					disabled={disabled}
					startOfRange={isStart && !isRangeOneDay}
					endOfRange={isEnd && !isRangeOneDay}
					onClick={() => handlers.onDayClick(day)}
					onHover={() => handlers.onDayHover(day)}
					value={getDate(day)}
				/>
			)
		}),
	)

	return (
		<div className="sui-date-picker__calendar-month">
			{/* Render the navigation component for moving between months */}
			<DatePickerNav marker={marker} date={date} />
			{isListVisible ? (
				// Month's date list should be visible, render the DatePickerList
				<DatePickerList
					date={date}
					height={daysBlockRef?.current?.offsetHeight}
				/>
			) : (
				<div ref={daysBlockRef}>
					<div className="sui-date-picker__calendar-weekdays">
						{WEEK_DAYS.map((day, index) => (
							<div className="sui-date-picker__calendar-weekday" key={index}>
								{day.toUpperCase()}
							</div>
						))}
					</div>
					<div className="sui-date-picker__calendar-days">
						{/* Days for the current month */}
						{daysList}
						<DatePickerDay />
					</div>
				</div>
			)}
		</div>
	)
}

export { DatePickerMonth }
