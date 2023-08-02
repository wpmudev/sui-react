import React, {
	Fragment,
	useCallback,
	useContext,
	useRef,
	useState,
} from "react"

import {
	getDate,
	isSameMonth,
	isToday,
	format,
	isWithinInterval,
	subYears,
} from "date-fns"

import { DatePickerDay } from "./date-picker-day"
import {
	generateDaysArray,
	checkIsInSelectedRange,
	checkIsEndOfSelectedRange,
	checkIsSelectedRangeSameDay,
	checkIfStartOfRange,
	splitMonthsIntoChunks,
	switchLists,
} from "./helpers"
import { DatePickerContext } from "./date-picker-context"
import { handleOnKeyDown } from "@wpmudev/sui-utils"

import { DatePickerNav } from "./date-picker-nav"

const DatePickerMonth: React.FC<any> = ({ value: date, marker }) => {
	const ctx = useContext(DatePickerContext)
	const { dateRange, helpers, handlers } = ctx

	const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
	const monthChunks = splitMonthsIntoChunks(generateDaysArray(date), 7)

	const daysBlockRef = useRef(null)
	const isListVisible = ctx?.toggleId === marker
	const dropdownList = switchLists?.[ctx?.listType] ?? []

	const onItemClick = useCallback(
		(value: string | number) => {
			// close list
			ctx.closeToggle()
			ctx.helpers.jumpToDate(value)
		},
		[ctx],
	)

	return (
		<div className="sui-date-picker__calendar-month">
			<DatePickerNav marker={marker} date={date} />
			{isListVisible && (
				<div
					className="sui-date-picker__calendar-list"
					style={{ height: daysBlockRef?.current?.offsetHeight }}
				>
					{dropdownList.map((name, index) => {
						const val = "months" === ctx.listType ? index : name
						return (
							<li key={index}>
								<span
									role="button"
									tabIndex={0}
									onClick={() => onItemClick(val)}
									onKeyDown={(e) => handleOnKeyDown(e, () => onItemClick(val))}
								>
									{name}
								</span>
							</li>
						)
					})}
				</div>
			)}
			{!isListVisible && (
				<div ref={daysBlockRef}>
					<div className="sui-date-picker__calendar-weekdays">
						{WEEK_DAYS.map((day, index) => (
							<div className="sui-date-picker__calendar-weekday" key={index}>
								{day.toUpperCase()}
							</div>
						))}
					</div>
					<div className="sui-date-picker__calendar-days">
						{monthChunks.map((week, idx) => (
							<Fragment key={idx}>
								{week.map((day) => {
									const isStart = checkIfStartOfRange(dateRange, day)
									const isEnd = checkIsEndOfSelectedRange(dateRange, day)
									const isRangeOneDay = checkIsSelectedRangeSameDay(dateRange)
									const disabled =
										!isSameMonth(date, day) ||
										!isWithinInterval(day, {
											start: ctx.minDateValid,
											end: ctx.maxDateValid,
										})
									const highlighted =
										checkIsInSelectedRange(dateRange, day) ||
										helpers.inHoverRange(day)

									return (
										<DatePickerDay
											key={format(day, "MM-dd-yyyy")}
											filled={isStart || isEnd}
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
								})}
							</Fragment>
						))}
						<DatePickerDay />
					</div>
				</div>
			)}
		</div>
	)
}

export { DatePickerMonth }
