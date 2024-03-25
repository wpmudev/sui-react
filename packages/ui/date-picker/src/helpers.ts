import {
	startOfWeek,
	startOfMonth,
	endOfWeek,
	endOfMonth,
	isBefore,
	addDays,
	isSameDay,
	isWithinInterval,
	isSameMonth,
	addMonths,
	subYears,
	parse,
	isValid,
	min,
	max,
	format,
} from "date-fns"

/**
 * Splits an array of data into chunks of the specified size.
 *
 * @template T The type of data in the array.
 * @param {ReadonlyArray<T>} data      The array of data to be split into chunks.
 * @param {number}           chunkSize The size of each chunk.
 * @return {T[][]} An array of arrays, each representing a chunk of data.
 */
export const splitMonthsIntoChunks = <T>(
	data: ReadonlyArray<T>,
	chunkSize: number,
): T[][] =>
	Array.from({ length: Math.ceil(data.length / chunkSize) }, (value, index) =>
		// Slice the original array to get the chunk for the current index.
		data.slice(index * chunkSize, index * chunkSize + chunkSize),
	)

/**
 * Generates an array of dates representing the days within a week based on the provided date.
 *
 * @param {Date} date The date to be used for generating the days array.
 * @return {Date[]} An array of dates representing the days within a week.
 */
export const generateDaysArray = (date: Date) => {
	// Get the first day of the week of the provided date.
	const startWeek = startOfWeek(startOfMonth(date))

	// Get the last day of the week of the provided date.
	const endWeek = endOfWeek(endOfMonth(date))

	// Initialize an empty array to hold the days.
	const days = []

	// Loop from the startWeek to the endWeek, adding each date to the days array.
	for (let curr = startWeek; isBefore(curr, endWeek); ) {
		days.push(curr)
		// Move to the next day.
		curr = addDays(curr, 1)
	}

	// Return the array of days.
	return days
}

/**
 * Checks if a given day is the start of the selected range.
 *
 * @param {any}  startDate - The start date of the selected range (if available).
 * @param {Date} day       - The date to check.
 * @return {boolean} - True if the given day is the start of the range, false otherwise.
 */
export const checkIfStartOfRange = ({ startDate }: any, day: Date) =>
	(startDate && isSameDay(day, startDate)) as boolean

/**
 * Checks if a given day is the end of the selected range.
 *
 * @param {any}  endDate - The end date of the selected range (if available).
 * @param {Date} day     - The date to check.
 * @return {boolean} - True if the given day is the end of the range, false otherwise.
 */
export const checkIsEndOfSelectedRange = ({ endDate }: any, day: Date) =>
	(endDate && isSameDay(day, endDate)) as boolean

/**
 * Checks if a given day is within the selected range (inclusive of start and end dates).
 *
 * @param {Object} selectedRange           - An object containing 'startDate' and 'endDate'.
 * @param          selectedRange.startDate
 * @param          selectedRange.endDate
 * @param {Date}   day                     - The date to check if it falls within the selected range.
 * @return {boolean} - True if the given day is within the selected range, false otherwise.
 */
export const checkIsInSelectedRange = (
	{ startDate, endDate }: any,
	day: Date,
) => {
	return (startDate &&
		endDate &&
		// Check if the day is within the interval defined by startDate and endDate.
		(isWithinInterval(day, {
			start: startDate,
			end: endDate,
		}) ||
			// Check if the day is the same as the startDate or endDate.
			isSameDay(day, startDate) ||
			isSameDay(day, endDate))) as boolean
}

/**
 * Checks if the selected range consists of the same day.
 *
 * @param {any} selectedRange - An object containing 'startDate' and 'endDate'.
 * @return {boolean} - True if the selected range consists of the same day, false otherwise.
 */
export const checkIsSelectedRangeSameDay = ({ startDate, endDate }: any) => {
	if (startDate && endDate) {
		// If both startDate and endDate are defined, check if they are the same day.
		return isSameDay(startDate, endDate)
	}
	// If either startDate or endDate is missing, the range cannot consist of the same day.
	return false
}

type Falsy = false | null | undefined | 0 | ""

/**
 * Parses a Date or date string and returns the parsed Date if valid, or the defaultValue if invalid or falsy.
 *
 * @param {Date|string|Falsy} date         - The Date or date string to be parsed.
 * @param {Date}              defaultValue - The default value to be returned if the parsing fails or the input is falsy.
 * @return {Date} - The parsed Date if valid, or the defaultValue if invalid or falsy.
 */
export const parseDate = (date: Date | string | Falsy, defaultValue?: Date) => {
	if (date) {
		// Attempt to parse the provided date using date-fns parse function.
		const parsed = parse(date as string, "dd/MM/yyyy", new Date())

		// Check if the parsed date is valid.
		if (isValid(parsed)) {
			// If the parsed date is valid, return it.
			return parsed
		}
	}
	// If the input date is falsy or the parsing fails, return the defaultValue.
	return defaultValue
}

/**
 * Gets the start and end months of the given range, constrained by the minDate and maxDate.
 *
 * @param {Object}         range   - An object containing 'startDate' and 'endDate' properties.
 * @param {Date|undefined} minDate - The minimum allowed date for the range.
 * @param {Date|undefined} maxDate - The maximum allowed date for the range.
 * @return {Array<Date>} - An array containing the start and end months of the range, constrained by minDate and maxDate.
 */
export const getMonths = (range: any, minDate?: Date, maxDate?: Date) => {
	const { startDate, endDate } = range

	if (startDate && endDate) {
		// Constrain the startDate to be the maximum of the actual startDate and minDate.
		const newStart = max([startDate, minDate])
		// Constrain the endDate to be the minimum of the actual endDate and maxDate.
		const newEnd = min([endDate, maxDate])

		// Return an array with the newStart and newEnd (or next month if newStart and newEnd are in the same month).
		return [
			newStart,
			isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd,
		]
	}

	// If either startDate or endDate is missing, return the original startDate and endDate (could be null or undefined).
	return [startDate, endDate]
}

/**
 * An array of predefined date ranges based on the current date.
 *
 * @param {Date} dateStr - The current date to use as a base for the predefined ranges.
 * @return {Array} - An array containing predefined date ranges with label, startDate, and endDate properties.
 */
const generateRanges = (dateStr: Date): any[] => {
	// Setting time to 00:00:00 for the end of the month
	const endOfMonthDate = endOfMonth(dateStr)
	endOfMonthDate.setHours(0, 0, 0, 0)

	return [
		{
			label: "Today",
			startDate: dateStr,
			endDate: dateStr,
		},
		{
			label: "Tomorrow",
			startDate: addDays(dateStr, 1),
			endDate: addDays(dateStr, 1),
		},
		{
			label: "1 Week",
			startDate: startOfWeek(dateStr, { weekStartsOn: 1 }), // The week start on monday
			endDate: endOfWeek(dateStr, { weekStartsOn: 1 }), // The week start on monday
		},
		{
			label: "30 days",
			startDate: startOfMonth(dateStr),
			endDate: endOfMonthDate,
		},
		{
			label: "Custom",
			startDate: null,
			endDate: null,
		},
	]
}

// Current date with time set to 00:00:00.
const currentDate = new Date()
currentDate.setHours(0, 0, 0, 0)

// Generate predefined date ranges starting from the current date.
export const predefinedRanges = generateRanges(currentDate)

// Object containing lists of months and years for the date picker dropdowns.
export const switchLists = {
	// Array of 12 months' names.
	months: Array(12)
		.fill(null)
		.map((_v, index) => format(new Date().setMonth(index), "MMMM")),

	// Array of 30 years, starting from the current year and going back 30 years.
	years: Array(30)
		.fill(null)
		.map((_v, i) => format(subYears(new Date(), i), "yyyy"))
		.reverse(),
}
