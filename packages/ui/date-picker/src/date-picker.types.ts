import { HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

interface DatePickerDateRange {
	startDate?: number | Date
	endDate?: number | Date
}

type DatePickerTypes = "single" | "range"
type DatePickerNavs = "months" | "years"

type DatePickerPredefined = {
	label: string
} & DatePickerDateRange

/**
 * Represents the properties for a code snippet component.
 */
interface DatePickerProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * CSS class for styling the component
	 */
	id?: string

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
	 * aria attributes of field
	 */
	ariaAttrs?: object
	/**
	 * Close the date picker when clicking outside
	 */
	closeOnClickOutside?: boolean
	/**
	 * Callback function called when the selected date(s) change
	 *
	 * @param {string | Date | DatePickerDateRange} value
	 */
	onChange?: (value: string | Date | DatePickerDateRange) => void
	/**
	 * Callback function called when the user submits the selected date(s)
	 */
	onSubmit?: (range?: DatePickerDateRange) => void
	/**
	 * Callback function called when the date picker is closed
	 */
	onClose?: (range?: DatePickerDateRange) => void
	/**
	 * Alignment of the popover relative to the input field
	 */
	alignment?: "left" | "right"
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
	 * Close the date picker when clicking outside
	 */
	closeOnClickOutside?: boolean
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
	onSubmit?: (range?: DatePickerDateRange) => void
	onClose?: (range?: DatePickerDateRange) => void
}

interface DatePickerPopoverProps extends SuiStyleType {
	/**
	 * Alignment of the popover relative to the input field
	 */
	alignment?: "left" | "right"
}

export type {
	DatePickerDateRange,
	DatePickerProps,
	DatePickerTypes,
	DatePickerNavs,
	DatePickerContextProps,
	DatePickerPopoverProps,
}
