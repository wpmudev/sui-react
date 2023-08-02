import React, { useContext } from "react"
import { differenceInCalendarMonths } from "date-fns"

import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"

import { DatePickerMonth } from "./date-picker-month"
import { CALENDARS } from "./date-picker"
import { DatePickerContext } from "./date-picker-context"
import { DatePickerRange } from "./date-picker-ranges"
//
//
// interface MenuProps {
// 	dateRange: DateRange
// 	ranges: DefinedRange[]
// 	minDate: Date
// 	maxDate: Date
// 	startMonth: Date
// 	endMonth: Date
// 	setFirstMonth: Setter<Date>
// 	setSecondMonth: Setter<Date>
// 	setDateRange: Setter<DateRange>
// 	helpers: {
// 		inHoverRange: (day: Date) => boolean
// 	}
// 	handlers: {
// 		onDayClick: (day: Date) => void
// 		onDayHover: (day: Date) => void
// 		onMonthNavigate: (marker: symbol, action: NavigationAction) => void
// 	}
// }

const DatePickerPopover: React.FunctionComponent<any> = (props: any) => {
	const ctx = useContext(DatePickerContext)

	const {
		dateRange,
		minDate,
		maxDate,
		startMonth,
		setFirstMonth,
		endMonth,
		setSecondMonth,
		helpers,
		handlers,
	} = ctx

	const { startDate, endDate } = ctx?.dateRange
	const canNavigateCloser =
		differenceInCalendarMonths(endMonth, startMonth) >= 2

	const commonProps = {
		dateRange,
		minDate,
		maxDate,
		helpers,
		handlers,
	}

	return (
		<div
			className={generateCN("sui-date-picker__popover", { open: ctx.isOpen })}
		>
			<div className="sui-date-picker__header">
				<DatePickerRange />
			</div>
			<div className="sui-date-picker__body">
				<div className="sui-date-picker__calendars">
					<DatePickerMonth
						{...commonProps}
						value={startMonth}
						setValue={setFirstMonth}
						navState={[true, canNavigateCloser]}
						marker={CALENDARS.START_MONTH}
					/>
					<DatePickerMonth
						{...commonProps}
						value={endMonth}
						setValue={setSecondMonth}
						navState={[canNavigateCloser, true]}
						marker={CALENDARS.END_MONTH}
					/>
				</div>
			</div>
			<div className="sui-date-picker__footer">
				<div className="sui-date-picker__footer-item">
					<Button
						appearance="tertiary"
						color="black"
						isSmall={true}
						onClick={() => ctx.setIsOpen(false)}
					>
						Close
					</Button>
				</div>
				<div className="sui-date-picker__footer-item">
					<Button appearance="secondary" color="black" isSmall={true}>
						Ok
					</Button>
				</div>
			</div>
		</div>
	)
}

export default DatePickerPopover
