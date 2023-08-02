import React, { useContext } from "react"
import { format } from "date-fns"

import { handleOnKeyDown } from "@wpmudev/sui-utils"
import { CaretDown, ChevronLeft, ChevronRight } from "@wpmudev/sui-icons"

import { DatePickerContext } from "./date-picker-context"
import { CALENDARS } from "./date-picker"

const DatePickerNav: React.FC<any> = ({ date, marker, ...props }) => {
	const ctx = useContext(DatePickerContext)

	const { openToggle, closeToggle } = ctx.helpers
	const { onMonthNavigate } = ctx.handlers

	// Render the day cell only if the value prop is truthy (i.e., a valid date).
	return (
		<div className="sui-date-picker__calendar-nav">
			{CALENDARS.START_MONTH === marker && (
				<div className="sui-date-picker__calendar-nav-item">
					<ChevronLeft
						size="sm"
						onClick={() => {
							ctx.closeToggle()
							onMonthNavigate(marker)
						}}
					/>
				</div>
			)}
			<div className="sui-date-picker__calendar-nav-item">
				<div
					className="sui-date-picker__calendar-dropdown-btn"
					role="button"
					tabIndex={0}
					onClick={() => openToggle("months", marker)}
					onKeyDown={() => openToggle("months", marker)}
				>
					{format(date, "MMMM")}
					<CaretDown size="sm" />
				</div>
			</div>
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
					{format(date, "yyyy")}
					<CaretDown size="sm" />
				</div>
			</div>
			{CALENDARS.END_MONTH === marker && (
				<div className="sui-date-picker__calendar-nav-item">
					<ChevronRight
						size="sm"
						onClick={() => {
							closeToggle()
							onMonthNavigate(marker)
						}}
					/>
				</div>
			)}
		</div>
	)
}

export { DatePickerNav }
