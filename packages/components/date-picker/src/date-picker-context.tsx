import React, { createContext, useCallback, useState } from "react"
import {
	isSameMonth,
	addYears,
	addMonths,
	subMonths,
	isBefore,
	isAfter,
	subDays,
	min,
	max,
	isSameDay,
	isWithinInterval,
	setMonth,
	setYear,
} from "date-fns"

import { predefinedRanges, getMonths, parseDate, CURRENT_DATE } from "./helpers"
import { CALENDARS } from "./date-picker"

const DatePickerContext = createContext<any>(null)

/**
 * DatePickerProvider is a context provider component for the date picker.
 * It manages the state and actions related to the date picker component.
 *
 * @param {Object} props - Component props passed to the DatePickerProvider.
 * @return {JSX.Element} - JSX element wrapping the children components.
 */
const DatePickerProvider: React.FC<any> = (props) => {
	// Extract the props passed to the component.
	const {
		onChange,
		initialDateRange,
		minDate,
		maxDate,
		definedRanges = predefinedRanges,
	} = props

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [listType, setListType] = useState<"" | "months" | "years">("months")
	const [toggleId, setToggleId] = useState<string | symbol>("")

	// Calculate the valid minDate and maxDate to be used in the date range.
	const minDateValid = parseDate(minDate, subDays(CURRENT_DATE, 10))
	const maxDateValid = parseDate(maxDate, addYears(CURRENT_DATE, 10))

	// Get the initial first and second months based on the provided initialDateRange.
	const [initialFirstMonth, initialSecondMonth] = getMonths(
		initialDateRange || {},
		minDateValid,
		maxDateValid,
	)

	// Initialize state using React hooks.
	const [dateRange, setDateRange] = useState<any>({
		...initialDateRange,
	})
	const [hoverDay, setHoverDay] = useState<Date>()
	const [startMonth, setFirstMonth] = useState<Date>(
		initialFirstMonth || CURRENT_DATE,
	)
	const [endMonth, setSecondMonth] = useState<Date>(
		initialSecondMonth || addMonths(startMonth, 1),
	)

	// Extract startDate and endDate from the dateRange state.
	const { startDate, endDate } = dateRange

	// Handler to set the first month with validation.
	const setFirstMonthValidated = (date: Date) => {
		if (isBefore(date, endMonth)) {
			setFirstMonth(date)
		}
	}

	// Handler to set the second month with validation.
	const setSecondMonthValidated = (date: Date) => {
		if (isAfter(date, startMonth)) {
			setSecondMonth(date)
		}
	}

	// Handler to set the date range with validation.
	const setDateRangeValidated = (range: any) => {
		let { startDate: newStart, endDate: newEnd } = range

		if (newStart && newEnd) {
			// Constrain the startDate and endDate to be within minDateValid and maxDateValid.
			range.startDate = newStart = max([newStart, minDateValid])
			range.endDate = newEnd = min([newEnd, maxDateValid])

			// Set the date range state.
			setDateRange(range)
			// Call the onChange callback with the updated date range.
			onChange(range)

			// Set the startMonth and endMonth states based on the newStart and newEnd.
			setFirstMonth(newStart)
			setSecondMonth(
				isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd,
			)
		} else {
			// If either startDate or endDate is missing, set the range to an empty object.
			const emptyRange = {}

			// Set the date range state and call the onChange callback with the empty range.
			setDateRange(emptyRange)
			onChange(emptyRange)

			// Reset the startMonth and endMonth to the current month and next month, respectively.
			setFirstMonth(CURRENT_DATE)
			setSecondMonth(addMonths(startMonth, 1))
		}
	}

	// Handler for when a day is clicked.
	const onDayClick = (day: Date) => {
		if (startDate && !endDate && !isBefore(day, startDate)) {
			// If there's a startDate but no endDate, set the endDate to the clicked day.
			const newRange = { startDate, endDate: day }
			// Call the onChange callback with the updated date range.
			onChange(newRange)
			// Set the date range state.
			setDateRange(newRange)
		} else {
			// If there's no startDate or endDate, set the startDate to the clicked day and the endDate to undefined.
			setDateRange({ startDate: day, endDate: undefined })
		}
		// Set the hoverDay state to the clicked day.
		setHoverDay(day)
	}

	// Handler for when a day is hovered over.
	const onDayHover = (date: Date) => {
		if (startDate && !endDate) {
			// If there's a startDate but no endDate, update the hoverDay state with the hovered date.
			if (!hoverDay || !isSameDay(date, hoverDay)) {
				setHoverDay(date)
			}
		}
	}

	const jumpToDate = (val: any) => {
		const firstCalendar = toggleId === CALENDARS.START_MONTH

		if ("months" === listType) {
			setFirstMonth(setMonth(startMonth, firstCalendar ? val : val - 1))
			setSecondMonth(setMonth(startMonth, firstCalendar ? val + 1 : val))
		} else if ("years" === listType) {
			setFirstMonth(setYear(startMonth, val))
			setSecondMonth(addMonths(setYear(startMonth, val), 1))
		}
	}

	// Handler for navigating to the previous/next month.
	const onMonthNavigate = (marker: any) => {
		if (marker === CALENDARS.START_MONTH) {
			// If the startMonth is being navigated, go to the previous month.
			const firstNew = subMonths(startMonth, 1)
			if (isBefore(firstNew, startMonth)) {
				setFirstMonth(firstNew)
				setSecondMonth(startMonth)
			}
		} else {
			// If the endMonth is being navigated, go to the next month.
			const secondNew = addMonths(endMonth, 1)
			if (isBefore(endMonth, secondNew)) {
				setSecondMonth(secondNew)
				setFirstMonth(endMonth)
			}
		}
	}

	// Helper function to check if a day falls within the hover range.
	const inHoverRange = (day: Date) =>
		startDate &&
		!endDate &&
		hoverDay &&
		isAfter(hoverDay, startDate) &&
		isWithinInterval(day, {
			start: startDate,
			end: hoverDay,
		})

	const closeToggle = useCallback(() => {
		setToggleId("")
		setListType("")
	}, [])

	const openToggle = useCallback(
		(type: "months" | "years", toggleIdStr: string) => {
			if (toggleIdStr === toggleId && type === listType) {
				closeToggle()
			} else {
				setToggleId(toggleIdStr)
				setListType(type)
			}
		},
		[closeToggle, listType, toggleId],
	)

	// Prepare the helpers and handlers to be provided via the DatePickerContext.
	const helpers = {
		inHoverRange,
		jumpToDate,
		openToggle,
		closeToggle,
	}

	const handlers = {
		onDayClick,
		onDayHover,
		onMonthNavigate,
	}

	// Render the DatePickerContext.Provider with the provided value and children components.
	return (
		<DatePickerContext.Provider
			value={{
				// popover visibility
				isOpen,
				setIsOpen,
				listType,
				toggleId,
				openToggle,
				closeToggle,
				dateRange,
				minDateValid,
				maxDateValid,
				minDate,
				maxDate,
				definedRanges,
				startMonth,
				endMonth,
				setFirstMonthValidated,
				setSecondMonthValidated,
				setDateRangeValidated,
				helpers,
				handlers,
			}}
		>
			{props?.children}
		</DatePickerContext.Provider>
	)
}

export { DatePickerContext, DatePickerProvider }
