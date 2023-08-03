import React, { useCallback, useContext } from "react"
import { format } from "date-fns"

import { handleOnKeyDown } from "@wpmudev/sui-utils"
import { CaretDown, ChevronLeft, ChevronRight } from "@wpmudev/sui-icons"

import { DatePickerContext } from "./date-picker-context"
import { CALENDARS } from "./date-picker"

const DatePickerNav: React.FC<any> = ({ date, marker, ...props }) => {
	// Get the context of the DatePicker, which contains helper functions and handlers
	const ctx = useContext(DatePickerContext)

	// Extract the required helper functions and handlers from the context
	const { openToggle } = ctx.helpers
	const { onMonthNavigate } = ctx.handlers

	// Handle the click event when navigating to the previous or next month/year
	const onNavClick = useCallback(
		(direction: "prev" | "next") => {
			if (!ctx?.isSingle) {
				ctx.closeToggle() // Close the date picker dropdown if not in single-date mode
			}
			// Navigate to the previous or next month (in non-single mode)
			onMonthNavigate(ctx?.isSingle ? direction : marker)
		},
		[ctx, marker, onMonthNavigate],
	)

	// Render the navigation elements for the date picker (previous month, current month/year dropdown, and next month).
	return (
		<div className="sui-date-picker__calendar-nav">
			{/* Render the previous month navigation element */}
			{(CALENDARS.START_MONTH === marker || ctx?.isSingle) && (
				<div className="sui-date-picker__calendar-nav-item">
					<ChevronLeft size="sm" onClick={() => onNavClick("prev")} />
				</div>
			)}
			{/* Render the month dropdown element (only in non-single mode) */}
			{!ctx?.isSingle && (
				<div className="sui-date-picker__calendar-nav-item">
					<div
						className="sui-date-picker__calendar-dropdown-btn"
						role="button"
						tabIndex={0}
						onClick={() => openToggle("months", marker)}
						onKeyDown={() => openToggle("months", marker)}
					>
						{/* Display the current month name */}
						{format(date, "MMMM")}
						<CaretDown size="sm" /> {/* Render a caret down icon */}
					</div>
				</div>
			)}
			{/* Year dropdown element */}
			<div className="sui-date-picker__calendar-nav-item">
				<div
					className="sui-date-picker__calendar-dropdown-btn"
					role="button"
					tabIndex={0}
					onClick={() => ctx.openToggle("years", marker)}
					onKeyDown={(e) =>
						handleOnKeyDown(e, () => ctx.openToggle("years", marker))
					}
				>
					{/* Display the current month and year */}
					{ctx.isSingle && format(date, "MMMM")} {format(date, "yyyy")}
					<CaretDown size="sm" />
				</div>
			</div>
			{/* Render the next month navigation element */}
			{(CALENDARS.END_MONTH === marker || ctx.isSingle) && (
				<div className="sui-date-picker__calendar-nav-item">
					<ChevronRight size="sm" onClick={() => onNavClick("next")} />
				</div>
			)}
		</div>
	)
}

export { DatePickerNav }
