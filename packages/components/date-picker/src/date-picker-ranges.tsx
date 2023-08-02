import React, { useCallback, useContext } from "react"

import { isSameDay } from "date-fns"

import { handleOnKeyDown, generateCN } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"

import { DatePickerContext } from "./date-picker-context"

const isSameRange = (first, second) => {
	const { startDate: fStart, endDate: fEnd } = first
	const { startDate: sStart, endDate: sEnd } = second
	if (fStart && sStart && fEnd && sEnd) {
		return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd)
	}
	return false
}

const DatePickerRange = ({}) => {
	const ctx = useContext(DatePickerContext)

	const onRangeClick = useCallback(
		(data) => {
			ctx?.setDateRangeValidated(data)
		},
		[ctx],
	)

	return (
		<div className="sui-date-picker__range">
			{ctx?.definedRanges.map((range, index) => (
				<div
					key={index}
					tabIndex={0}
					role="button"
					className={generateCN("sui-date-picker__range-button", {
						active: isSameRange(range, ctx.dateRange),
					})}
					onClick={() => onRangeClick(range)}
					onKeyDown={(e) =>
						handleOnKeyDown(e, () => {
							onRangeClick(range)
						})
					}
				>
					{range?.label}
				</div>
			))}
		</div>
	)
}

export { DatePickerRange }
