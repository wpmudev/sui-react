import React, { useState, useEffect, useId, useCallback } from "react"

import { useInteraction } from "@wpmudev/react-hooks"
import { isBoolean, generateCN } from "@wpmudev/react-utils"

import { ToggleProps } from "./toggle.types"

// Build "Toggle" component
const Toggle: React.FC<ToggleProps> = ({
	label,
	defaultValue,
	isLabelHidden = false,
	isDisabled = false,
	onClick = () => {},
	...props
}) => {
	// use id
	const id = `sui-toggle-${useId()}`

	const [state, setState] = useState<boolean>(defaultValue as boolean)
	const [isFocused, isHovered, methods] = useInteraction({})

	useEffect(() => {
		if (!isBoolean(defaultValue)) {
			setState(!!defaultValue)
		}
	}, [defaultValue])

	// handle on change
	const handleOnChange = useCallback(
		(e: MouseEvent) => {
			setState(!state)

			if (onClick) {
				onClick(e)
			}
		},
		[onClick, state],
	)

	// Define container props
	const containerProps = {
		className: generateCN("sui-toggle", {
			"hidden-label": isLabelHidden,
			checked: state,
			disabled: isDisabled,
			hover: !state && isHovered,
			focus: !state && isFocused,
			"checked-hover": isHovered,
			"checked-focus": isFocused,
		}),
		...methods,
	}

	// Define input props
	const inputProps = {
		type: "checkbox",
		className: "sui-screen-reader-only",
		defaultChecked: state,
		disabled: isDisabled,
		onChange: handleOnChange,
		...props,
	}

	return (
		<label {...containerProps} htmlFor={id}>
			<input {...inputProps} id={id} />
			<span tabIndex={-1} className="sui-toggle__switch" aria-hidden={true} />
			{isLabelHidden && <span className="sui-screen-reader-only">{label}</span>}
			{!isLabelHidden && label}
		</label>
	)
}

// Publish component(s)
export { Toggle }
