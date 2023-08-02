import {
	startOfWeek,
	startOfMonth,
	endOfWeek,
	endOfMonth,
	isBefore,
	addDays,
	isSameDay,
	isWithinRange,
	isSameMonth,
	addMonths,
	parse,
	isValid,
	min,
	max,
} from "date-fns"

export const identity = <T>(x: T) => x

export const chunks = <T>(array: ReadonlyArray<T>, size: number): T[][] =>
	Array.from({ length: Math.ceil(array.length / size) }, (_v, i) =>
		array.slice(i * size, i * size + size),
	)

export const combine = (...args: any[]): string =>
	args.filter(identity).join(" ")

// Date
export const getDaysInMonth = (date: Date) => {
	const startWeek = startOfWeek(startOfMonth(date))
	const endWeek = endOfWeek(endOfMonth(date))
	const days = []
	for (let curr = startWeek; isBefore(curr, endWeek); ) {
		days.push(curr)
		curr = addDays(curr, 1)
	}
	return days
}

export const isStartOfRange = ({ startDate }: any, day: Date) =>
	(startDate && isSameDay(day, startDate)) as boolean

export const isEndOfRange = ({ endDate }: any, day: Date) =>
	(endDate && isSameDay(day, endDate)) as boolean

export const inDateRange = ({ startDate, endDate }: any, day: Date) =>
	(startDate &&
		endDate &&
		(isWithinRange(day, startDate, endDate) ||
			isSameDay(day, startDate) ||
			isSameDay(day, endDate))) as boolean

export const isRangeSameDay = ({ startDate, endDate }: any) => {
	if (startDate && endDate) {
		return isSameDay(startDate, endDate)
	}
	return false
}

type Falsy = false | null | undefined | 0 | ""

export const parseOptionalDate = (
	date: Date | string | Falsy,
	defaultValue: Date,
) => {
	if (date) {
		const parsed = parse(date)
		if (isValid(parsed)) return parsed
	}
	return defaultValue
}

export const getValidatedMonths = (
	range: any,
	minDate: Date,
	maxDate: Date,
) => {
	const { startDate, endDate } = range
	if (startDate && endDate) {
		const newStart = max(startDate, minDate)
		const newEnd = min(endDate, maxDate)

		return [
			newStart,
			isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd,
		]
	}
	return [startDate, endDate]
}

import {
	addDays,
	startOfWeek,
	endOfWeek,
	addWeeks,
	startOfMonth,
	endOfMonth,
	addMonths,
} from "date-fns"

const getDefaultRanges = (date: Date): any[] => [
	{
		label: "Today",
		startDate: date,
		endDate: date,
	},
	{
		label: "Yesterday",
		startDate: addDays(date, -1),
		endDate: addDays(date, -1),
	},
	{
		label: "This Week",
		startDate: startOfWeek(date),
		endDate: endOfWeek(date),
	},
	{
		label: "Last Week",
		startDate: startOfWeek(addWeeks(date, -1)),
		endDate: endOfWeek(addWeeks(date, -1)),
	},
	{
		label: "Last 7 Days",
		startDate: addWeeks(date, -1),
		endDate: date,
	},
	{
		label: "This Month",
		startDate: startOfMonth(date),
		endDate: endOfMonth(date),
	},
	{
		label: "Last Month",
		startDate: startOfMonth(addMonths(date, -1)),
		endDate: endOfMonth(addMonths(date, -1)),
	},
]

export const defaultRanges = getDefaultRanges(new Date())
