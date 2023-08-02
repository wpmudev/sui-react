import React, { useState, useCallback } from "react"

import { Tooltip } from "@wpmudev/sui-tooltip"
import { generateCN } from "@wpmudev/sui-utils"

import {
	getDate,
	isSameMonth,
	isToday,
	addYears,
	format,
	isWithinRange,
	addMonths,
	isBefore,
	isAfter,
	min,
	max,
	isSameDay,
} from "date-fns"

import { CodeSnippetProps } from "./date-picker.types"
import { DatePickerMonth } from "./date-picker-month"
import { defaultRanges, getValidatedMonths, parseOptionalDate } from "./helpers"

type Marker = symbol

export const MARKERS: { [key: string]: Marker } = {
	FIRST_MONTH: Symbol("firstMonth"),
	SECOND_MONTH: Symbol("secondMonth"),
}

const DatePicker: React.FC<CodeSnippetProps> = ({
	language = "markup",
	copy = true,
	className = "",
	children,
}) => {
	// generate class names
	const classNames = generateCN("sui-date-picker", {}, className ?? "")

	const today = new Date()

	const {
		open,
		onChange,
		initialDateRange,
		minDate,
		maxDate,
		definedRanges = defaultRanges,
	} = {}

	const minDateValid = parseOptionalDate(minDate, addYears(today, -10))
	const maxDateValid = parseOptionalDate(maxDate, addYears(today, 10))
	const [intialFirstMonth, initialSecondMonth] = getValidatedMonths(
		initialDateRange || {},
		minDateValid,
		maxDateValid,
	)

	const [dateRange, setDateRange] = React.useState<any>({
		...initialDateRange,
	})
	const [hoverDay, setHoverDay] = React.useState<Date>()
	const [firstMonth, setFirstMonth] = React.useState<Date>(
		intialFirstMonth || today,
	)
	const [secondMonth, setSecondMonth] = React.useState<Date>(
		initialSecondMonth || addMonths(firstMonth, 1),
	)

	const { startDate, endDate } = dateRange

	// handlers
	const setFirstMonthValidated = (date: Date) => {
		if (isBefore(date, secondMonth)) {
			setFirstMonth(date)
		}
	}

	const setSecondMonthValidated = (date: Date) => {
		if (isAfter(date, firstMonth)) {
			setSecondMonth(date)
		}
	}

	const setDateRangeValidated = (range: any) => {
		let { startDate: newStart, endDate: newEnd } = range

		if (newStart && newEnd) {
			range.startDate = newStart = max(newStart, minDateValid)
			range.endDate = newEnd = min(newEnd, maxDateValid)

			setDateRange(range)
			onChange(range)

			setFirstMonth(newStart)
			setSecondMonth(
				isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd,
			)
		} else {
			const emptyRange = {}

			setDateRange(emptyRange)
			onChange(emptyRange)

			setFirstMonth(today)
			setSecondMonth(addMonths(firstMonth, 1))
		}
	}

	const onDayClick = (day: Date) => {
		if (startDate && !endDate && !isBefore(day, startDate)) {
			const newRange = { startDate, endDate: day }
			onChange(newRange)
			setDateRange(newRange)
		} else {
			setDateRange({ startDate: day, endDate: undefined })
		}
		setHoverDay(day)
	}

	const onMonthNavigate = (marker: any, action) => {
		if (marker === MARKERS.FIRST_MONTH) {
			const firstNew = addMonths(firstMonth, action)
			if (isBefore(firstNew, secondMonth)) setFirstMonth(firstNew)
		} else {
			const secondNew = addMonths(secondMonth, action)
			if (isBefore(firstMonth, secondNew)) setSecondMonth(secondNew)
		}
	}

	const onDayHover = (date: Date) => {
		if (startDate && !endDate) {
			if (!hoverDay || !isSameDay(date, hoverDay)) {
				setHoverDay(date)
			}
		}
	}

	// helpers
	const inHoverRange = (day: Date) =>
		(startDate &&
			!endDate &&
			hoverDay &&
			isAfter(hoverDay, startDate) &&
			isWithinRange(day, startDate, hoverDay)) as boolean

	const helpers = {
		inHoverRange,
	}

	const handlers = {
		onDayClick,
		onDayHover,
		onMonthNavigate,
	}

	return (
		<div className={classNames}>
			<div className="sui-date-picker__header">HEADER</div>
			<div className="sui-date-picker__body">
				<div className="sui-date-picker__calendars">
					<DatePickerMonth
						dateRange={dateRange}
						minDate={minDateValid}
						maxDate={maxDateValid}
						ranges={definedRanges}
						value={secondMonth}
						setFirstMonth={setFirstMonthValidated}
						setSecondMonth={setSecondMonthValidated}
						setDateRange={setDateRangeValidated}
						helpers={helpers}
						handlers={handlers}
					/>
					<DatePickerMonth
						dateRange={dateRange}
						minDate={minDateValid}
						maxDate={maxDateValid}
						ranges={definedRanges}
						value={firstMonth}
						setFirstMonth={setFirstMonthValidated}
						setSecondMonth={setSecondMonthValidated}
						setDateRange={setDateRangeValidated}
						helpers={helpers}
						handlers={handlers}
					/>
				</div>
			</div>
			<div className="sui-date-picker__footer">FOOTER</div>
		</div>
	)
}

export { DatePicker }
