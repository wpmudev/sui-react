import React, {
	useCallback,
	useContext,
	MouseEvent,
	KeyboardEvent,
} from "react"
import { getMonth, getYear, isWithinInterval } from "date-fns"

import { handleOnKeyDown, generateCN } from "@wpmudev/sui-utils"

import { DatePickerContext } from "./date-picker-context"
import { switchLists } from "./helpers"

const DatePickerList: React.FC<any> = ({ date, height }) => {
	const ctx = useContext(DatePickerContext)!
	// @ts-ignore
	const dropdownList: string[] = switchLists?.[ctx?.listType] ?? []

	const onItemClick = useCallback(
		(
			value: number | string,
			event: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>,
		) => {
			event.stopPropagation()
			ctx.helpers.jumpToDate(value)
		},
		[ctx],
	)

	// Check if list item is active or not
	const isActive = (val: number | string) =>
		"months" === ctx.listType
			? getMonth(date) === val
			: Number(val) === getYear(date)

	return (
		<ul className="sui-date-picker__calendar-list" style={{ height }}>
			{dropdownList.map((name, index) => {
				// if we have "months" list, else "years" list
				const isTypeMonths = "months" === ctx.listType

				// The value to use based on the type
				const val = isTypeMonths ? index : name

				// Minimum and Maximum dates
				const minYear = getYear(ctx?.minDateValid as Date)
				const maxYear = getYear(ctx?.maxDateValid as Date)

				// The date to check upon (always use the first of the month and the selected year)
				const monthFullDate = new Date(`${index + 1}-01-${getYear(date)}`)

				// Check if the current "year" or "month" is disabled (if it's outside of the valid date range)
				const disabled = isTypeMonths
					? !isWithinInterval(monthFullDate, {
							start: ctx?.minDateValid as Date,
							end: ctx?.maxDateValid as Date,
					  })
					: !(Number(val) >= minYear && Number(val) <= maxYear)

				return (
					<li
						key={index}
						className={generateCN("sui-date-picker__calendar-list-item", {
							active: isActive(val) && !disabled,
							disabled,
						})}
					>
						<span
							role="button"
							tabIndex={0}
							onClick={(e) => {
								if (!disabled) onItemClick(val, e)
							}}
							onKeyDown={(event) => {
								if (!disabled)
									handleOnKeyDown(event, () => onItemClick(val, event))
							}}
						>
							{name}
						</span>
					</li>
				)
			})}
		</ul>
	)
}

export { DatePickerList }
