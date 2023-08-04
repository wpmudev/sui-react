import React, { useCallback } from "react"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"

const DatePickerDay: React.FC<any> = ({ value, ...props }) => {
	// destructure the necessary props for the component
	const {
		disabled,
		filled,
		highlighted,
		outlined,
		startOfRange: start,
		endOfRange: end,
		onClick,
	} = props

	// use the useInteraction hook to handle hover and focus states
	const [isHovered, isFocused, methods] = useInteraction({
		onMouseEnter: props.onHover,
	})

	const classNames = generateCN("sui-date-picker__day", {
		disabled,
		filled: !disabled && filled,
		highlighted: !!highlighted && !disabled,
		outlined: !filled && outlined && !disabled,
		hover: isHovered && !disabled,
		start,
		end,
	})

	// Callback function to handle click on the day cell
	const onClickDay = useCallback(() => {
		if (!disabled && !!onClick) {
			onClick() // Call the provided onClick function if the component is not disabled
		}
	}, [disabled, onClick])

	return (
		!!value && (
			<div
				tabIndex={props.disabled ? -1 : 0}
				role="button"
				className={classNames}
				onClick={onClickDay}
				onKeyDown={(e) => handleOnKeyDown(e, onClickDay)}
				{...methods}
			>
				<span className="sui-date-picker__day-title">{value}</span>{" "}
			</div>
		)
	)
}

export { DatePickerDay }
