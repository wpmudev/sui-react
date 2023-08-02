import React, { useCallback } from "react"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"

const DatePickerDay: React.FC<any> = ({ value, ...props }) => {
	const {
		disabled,
		filled,
		highlighted,
		outlined,
		startOfRange: start,
		endOfRange: end,
		onClick,
	} = props

	// Generate the classNames for the day cell based on the provided props.
	const classNames = generateCN("sui-date-picker__day", {
		disabled,
		filled,
		highlighted: !!highlighted && !disabled,
		outlined: !filled && outlined,
		start,
		end,
	})

	const onClickDay = useCallback(() => {
		if (!disabled && !!onClick) {
			onClick()
		}
	}, [disabled, onClick])

	// Render the day cell only if the value prop is truthy (i.e., a valid date).
	return (
		!!value && (
			<div
				tabIndex={props.disabled ? -1 : 0}
				role="button"
				className={classNames}
				onClick={onClickDay}
				onKeyDown={(e) => handleOnKeyDown(e, onClickDay)}
				onMouseEnter={props.onHover}
			>
				<span className="sui-date-picker__day-title">{value}</span>
			</div>
		)
	)
}

export { DatePickerDay }
