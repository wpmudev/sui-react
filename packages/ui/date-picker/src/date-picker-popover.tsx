import React, { Fragment, LegacyRef, useContext, useRef } from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"

import { DatePickerMonth } from "./date-picker-month"
import { CALENDARS } from "./date-picker"
import { DatePickerContext } from "./date-picker-context"
import { DatePickerRange } from "./date-picker-ranges"
import { useOuterClick, useStyles } from "@wpmudev/sui-hooks"
import { DatePickerPopoverProps } from "./date-picker.types"

const DatePickerPopover: React.FunctionComponent<DatePickerPopoverProps> = ({
	...props
}) => {
	// Context of the DatePicker, which contains various state variables and functions
	const ctx = useContext(DatePickerContext)
	const { suiInlineClassname } = useStyles(props)

	const { startMonth, endMonth, helpers, handlers } = ctx!

	// Create a ref to access the dropdown's outer container element.
	const popoverRef = useRef<HTMLDivElement | null>(null)

	// Handle the closing of the dropdown when clicking outside the component.
	useOuterClick(popoverRef, () => {
		if (ctx?.isSingle) {
			ctx?.setIsOpen(false)
		}
	})

	// Common props passed to the DatePickerMonth components
	const commonProps = {
		helpers,
		handlers,
	}

	return (
		<div
			className={generateCN(
				"sui-date-picker__popover",
				{ open: ctx?.isOpen },
				suiInlineClassname,
			)}
			data-testid="date-picker-popover"
			ref={popoverRef as LegacyRef<HTMLDivElement>}
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
						// Render a single DatePickerMonth component for single-date modowe
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
							type="tertiary"
							color="black"
							isSmall={true}
							onClick={() => ctx?.setIsOpen(false)}
						>
							Close
						</Button>
					</div>
					<div className="sui-date-picker__footer--item">
						<Button
							type="secondary"
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
