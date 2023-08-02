import React, { useState, useCallback, Fragment } from "react"

import { getDate, isSameMonth, isToday, format } from "date-fns"

import { generateCN } from "@wpmudev/sui-utils"

import { CodeSnippetProps } from "./date-picker.types"
import { DatePickerDay } from "./date-picker-day"
import {
	chunks,
	getDaysInMonth,
	inDateRange,
	isEndOfRange,
	isRangeSameDay,
	isStartOfRange,
} from "./helpers"

const DatePickerMonth: React.FC<CodeSnippetProps> = ({
	language = "markup",
	copy = true,
	className = "",
	children,
	value,
	dateRange,
	helpers,
	minDate,
	maxDate,
	handlers,
}) => {
	const date = value

	const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

	return (
		<div className="sui-date-picker__calendar-month">
			<div className="sui-date-picker__calendar-weekdays">
				{WEEK_DAYS.map((day, index) => (
					<div className="sui-date-picker__calendar-weekday" key={index}>
						{day}
					</div>
				))}
			</div>
			<div className="sui-date-picker__calendar-days">
				{chunks(getDaysInMonth(date), 7).map((week, idx) => (
					// eslint-disable-next-line react/no-array-index-key
					<Fragment key={idx}>
						{week.map((day) => {
							const isStart = isStartOfRange(dateRange, day)
							const isEnd = isEndOfRange(dateRange, day)
							const isRangeOneDay = isRangeSameDay(dateRange)
							const highlighted =
								inDateRange(dateRange, day) || helpers.inHoverRange(day)

							return (
								<DatePickerDay
									key={format(day, "MM-dd-yyyy")}
									filled={isStart || isEnd}
									outlined={isToday(day)}
									highlighted={highlighted && !isRangeOneDay}
									disabled={
										!isSameMonth(date, day)
										// !isWithinRange(day, minDate, maxDate)
									}
									startOfRange={isStart && !isRangeOneDay}
									endOfRange={isEnd && !isRangeOneDay}
									onClick={() => handlers.onDayClick(day)}
									onHover={() => handlers.onDayHover(day)}
									value={getDate(day)}
								/>
							)
						})}
					</Fragment>
				))}
				<DatePickerDay />
			</div>
		</div>
	)
}

export { DatePickerMonth }
