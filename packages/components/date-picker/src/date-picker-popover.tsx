import React, { Fragment, useContext } from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"

import { DatePickerMonth } from "./date-picker-month"
import { CALENDARS } from "./date-picker"
import { DatePickerContext } from "./date-picker-context"
import { DatePickerRange } from "./date-picker-ranges"

const DatePickerPopover: React.FunctionComponent<any> = () => {
	// Context of the DatePicker, which contains various state variables and functions
	const ctx = useContext(DatePickerContext)

	const { startMonth, endMonth, helpers, handlers } = ctx!

	// Common props passed to the DatePickerMonth components
	const commonProps = {
		helpers,
		handlers,
	}

	return (
		<div
			className={generateCN("sui-date-picker__popover", { open: ctx?.isOpen })}
			data-testid="date-picker-popover"
		>
			{/* Render the DatePickerRange component in the header (only in non-single mode) */}
			{!ctx?.isSingle && (
				<div className="sui-date-picker__header">
					<DatePickerRange />
				</div>
			)}
			<div className="sui-date-picker__body">
				<div className="sui-date-picker__calendars">
					{ctx?.isSingle ? (
						// Render a single DatePickerMonth component for single-date mode
						<DatePickerMonth {...commonProps} value={startMonth} />
					) : (
						// Render two DatePickerMonth components for date range mode
						<Fragment>
							<DatePickerMonth
								{...commonProps}
								value={startMonth}
								marker={CALENDARS.START_MONTH}
							/>
							<DatePickerMonth
								{...commonProps}
								value={endMonth}
								marker={CALENDARS.END_MONTH}
							/>
						</Fragment>
					)}
				</div>
			</div>
			{!ctx?.isSingle && (
				<div className="sui-date-picker__footer">
					<div className="sui-date-picker__footer--item">
						<Button
							appearance="tertiary"
							color="black"
							isSmall={true}
							onClick={() => ctx?.setIsOpen(false)}
						>
							Close
						</Button>
					</div>
					<div className="sui-date-picker__footer--item">
						<Button
							appearance="secondary"
							color="black"
							isSmall={true}
							onClick={() => ctx?.setIsOpen(false)}
						>
							Ok
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default DatePickerPopover
