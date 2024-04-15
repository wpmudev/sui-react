import { HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

interface DatePickerDateRange {
	startDate?: number | Date
	endDate?: number | Date
}

type DatePickerTypes = "single" | "range"
type DatePickerNavs = "months" | "years"

type DatePickerPredefined = {
	label: "Today" | "Tomorrow" | "1 Week" | "30 days" | "Custom"
} & DatePickerDateRange

/**
 * Represents the properties for a code snippet component.
 */
interface DatePickerProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * Specifies the type of DatePicker (e.g., single date, date range)
	 */
	type?: DatePickerTypes
	/**
	 * CSS class for styling the component
	 */
	className?: string
	/**
	 * Minimum selectable date in the DatePicker
	 */
	minDate?: string
	/**
	 * Maximum selectable date in the DatePicker
	 */
	maxDate?: string
	/**
	 * Make DatePicker disabled
	 */
	isDisabled?: boolean
	/**
	 * Make DatePicker disabled
	 */
	isError?: boolean
	/**
	 * Start date
	 */
	startDate?: string
	/**
	 * End Date (applicable only in range mode)
	 */
	endDate?: string
	/**
	 * Predefined date ranges to be shown in the DatePicker (in date range mode)
	 */
	definedRanges?: DatePickerPredefined[]
	/**
	 * children element of a datepicker
	 */
	children?: React.ReactNode
	/**
	 * Callback function called when the selected date(s) change
	 *
	 * @param {string | Date | DatePickerDateRange} value
	 */
	onChange?: (value: string | Date | DatePickerDateRange) => void
}
interface DatePickerContextProps {
	/**
	 * Flag indicating whether the DatePicker is in single date mode
	 */
	isSingle?: boolean
	/**
	 * Flag indicating whether the DatePicker is disabled or not
	 */
	isDisabled?: boolean
	/**
	 * Flag indicating whether the DatePicker is open (visible)
	 */
	isOpen?: boolean
	/**
	 * Function to set the open state of the DatePicker
	 *
	 * @param {boolean} val
	 */
	setIsOpen(val: boolean): void
	/**
	 * Type of the list (e.g., 'month', 'year') used in the DatePicker
	 */
	listType?: string
	/**
	 * ID or symbol used to identify the toggle element
	 */
	toggleId?: string | symbol
	/**
	 * Function to open a specific toggle element
	 *
	 * @param {DatePickerNavs} type
	 * @param {string}         toggleIdStr
	 */
	openToggle(type: DatePickerNavs, toggleIdStr: string): void
	/**
	 * Function to close the current toggle element
	 */
	closeToggle(): void
	/**
	 * Minimum selectable date (converted from the minDate prop)
	 */
	minDateValid?: Date
	/**
	 * Maximum selectable date (converted from the maxDate prop)
	 */
	maxDateValid?: Date
	/**
	 * Predefined date ranges to be shown in the DatePicker (in date range mode)
	 */
	definedRanges?: DatePickerProps["definedRanges"]
	/**
	 * Start month for the displayed calendar (in date range mode)
	 */
	startMonth?: Date | number
	/**
	 * End month for the displayed calendar (in date range mode)
	 */
	endMonth?: Date | number
	/**
	 * Function to set the validated first month in date range mode
	 *
	 * @param {Date} date
	 */
	setFirstMonthValidated(date: Date): void
	/**
	 * Function to set the validated second month in date range mode
	 *
	 * @param {Date} date
	 */
	setSecondMonthValidated(date: Date): void
	/**
	 * Function to set the validated date range in date range mode
	 *
	 * @param {DatePickerDateRange} range
	 */
	setDateRangeValidated(range: DatePickerDateRange): void
	/**
	 * Start and end date object
	 */
	dateRange?: DatePickerDateRange
	helpers: {
		/**
		 * Helper function to check if a day is in the hover range
		 *
		 * @param {Date} day
		 * @return {boolean}
		 */
		inHoverRange: (day: Date) => boolean
		/**
		 * Helper function to jump to a specific date in the calendar
		 *
		 * @param {number} val
		 */
		jumpToDate: (val: number | string) => void
		/**
		 * Helper function to open a specific toggle element
		 *
		 * @param {DatePickerNavs} type
		 * @param {string}         toggleIdStr
		 */
		openToggle: (type: DatePickerNavs, toggleIdStr: string) => void
		/**
		 * Helper function to close the current toggle element
		 */
		closeToggle: () => void
	}
	handlers: {
		/**
		 * Handler for the 'day click' event in the DatePicker
		 *
		 * @param {Date} day
		 */
		onDayClick: (day: Date) => void
		/**
		 * Handler for the 'day hover' event in the DatePicker
		 *
		 * @param {Date} day
		 */
		onDayHover: (day: Date) => void
		/**
		 * Handler for the 'month navigate' event in the DatePicker
		 *
		 * @param {symbol} marker
		 * @param          action
		 */
		onMonthNavigate: (marker: symbol) => void
	}
}

interface DatePickerPopoverProps extends SuiStyleType {}

export type {
	DatePickerDateRange,
	DatePickerProps,
	DatePickerTypes,
	DatePickerNavs,
	DatePickerContextProps,
	DatePickerPopoverProps,
}
