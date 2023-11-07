import React, {
	createContext,
	useRef,
	useCallback,
	useEffect,
	useState,
} from "react"
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
import { useOuterClick } from "@wpmudev/sui-hooks"

import { predefinedRanges, getMonths, parseDate } from "./helpers"
import { CALENDARS } from "./date-picker"
import {
	DatePickerContextProps,
	DatePickerDateRange,
	DatePickerNavs,
	DatePickerProps,
} from "./date-picker.types"

const DatePickerContext = createContext<DatePickerContextProps | undefined>(
	undefined,
)

// today's date
const today = new Date()

/**
 * DatePickerProvider is a context provider component for the date picker.
 * It manages the state and actions related to the date picker component.
 *
 * @param {DatePickerProps} props - Component props passed to the DatePickerProvider.
 * @return {JSX.Element} - JSX element wrapping the children components.
 */
const DatePickerProvider: React.FC<DatePickerProps> = (props) => {
	// Extract the props passed to the component.
	const {
		onChange,
		minDate,
		maxDate,
		definedRanges = predefinedRanges,
		isDisabled,
	} = props

	// Create a ref to access the dropdown's outer container element.
	const dropdownRef = useRef<HTMLDivElement | null>(null)

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [listType, setListType] = useState<"" | "months" | "years">("months")
	const [toggleId, setToggleId] = useState<string | symbol>("")

	const isSingle = "single" === props?.type

	// Calculate the valid minDate and maxDate to be used in the date range.
	const minDateValid = parseDate(minDate, subDays(today, 10))
	const maxDateValid = parseDate(maxDate, addYears(today, 10))

	const defaultRange: DatePickerDateRange = {
		startDate: parseDate(props?.startDate, today),
		endDate: parseDate(props?.endDate, today),
	}

	// Get the initial first and second months based on the provided defaultRange.
	const [initialFirstMonth, initialSecondMonth] = getMonths(
		defaultRange || {},
		minDateValid,
		maxDateValid,
	)

	// Initialize state using React hooks.
	const [dateRange, setDateRange] = useState<any>({
		...defaultRange,
	})
	const [hoverDay, setHoverDay] = useState<Date>()
	const [startMonth, setFirstMonth] = useState<Date | number>(
		initialFirstMonth || today,
	)
	const [endMonth, setSecondMonth] = useState<Date | number>(
		initialSecondMonth || addMonths(startMonth, 1),
	)

	useEffect(() => {
		setDateRange(defaultRange)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.startDate, props.endDate])

	// Handle the closing of the dropdown when clicking outside the component.
	useOuterClick(dropdownRef, () => {
		if (isSingle) {
			setIsOpen(false)
		}
	})

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
	const setDateRangeValidated = (range: DatePickerDateRange) => {
		let { startDate: newStart, endDate: newEnd } = range

		if (newStart && newEnd) {
			// Constrain the startDate and endDate to be within minDateValid and maxDateValid.
			range.startDate = newStart = max([newStart, minDateValid as Date])
			range.endDate = newEnd = min([newEnd, maxDateValid as Date])

			// Set the date range state.
			setDateRange(range)
			// Call the onChange callback with the updated date range.
			if (onChange) {
				onChange(range)
			}

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
			if (onChange) {
				onChange(emptyRange)
			}

			// Reset the startMonth and endMonth to the current month and next month, respectively.
			setFirstMonth(today)
			setSecondMonth(addMonths(startMonth, 1))
		}
	}

	// Handler for when a day is clicked.
	const onDayClick = (day: Date) => {
		// Set startDate and close the popover (in single mode)
		if (isSingle) {
			setDateRange({ startDate: day, endDate: undefined })
			setIsOpen(false)
			return
		}

		if (startDate && !endDate && !isBefore(day, startDate)) {
			// If there's a startDate but no endDate, set the endDate to the clicked day.
			const newRange = { startDate, endDate: day }
			// Call the onChange callback with the updated date range.
			if (onChange) {
				onChange(newRange)
			}
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

	const jumpToDate = (val: number | string) => {
		const firstCalendar = toggleId === CALENDARS.START_MONTH
		const value = val as number

		// set year for single date
		if (isSingle) {
			setFirstMonth(setYear(startMonth, value))
			return
		}

		if ("months" === listType) {
			setFirstMonth(setMonth(startMonth, firstCalendar ? value : value - 1))
			setSecondMonth(setMonth(startMonth, firstCalendar ? value + 1 : value))
		} else if ("years" === listType) {
			setFirstMonth(setYear(startMonth, value))
			setSecondMonth(addMonths(setYear(startMonth, value), 1))
		}
	}

	// Handler for navigating to the previous/next month.
	const onMonthNavigate = (marker: any) => {
		// move to next month
		if (isSingle) {
			setFirstMonth(
				"prev" === marker ? subMonths(startMonth, 1) : addMonths(startMonth, 1),
			)
			return
		}

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
		(type: DatePickerNavs, toggleIdStr: string) => {
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
				isDisabled,
				isSingle,
				isOpen,
				setIsOpen,
				listType,
				toggleId,
				openToggle,
				closeToggle,
				dateRange,
				minDateValid,
				maxDateValid,
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
			{props?.children &&
				React.cloneElement(props.children as React.ReactElement, {
					ref: dropdownRef,
				})}
		</DatePickerContext.Provider>
	)
}

export { DatePickerContext, DatePickerProvider }
