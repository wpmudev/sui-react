import React, { useState, useEffect, useId, useCallback } from "react"

import { useInteraction } from "@wpmudev/sui-hooks"
import { isBoolean, generateCN } from "@wpmudev/sui-utils"

import { ToggleProps } from "./toggle.types"

// Build "Toggle" component
const Toggle: React.FC<ToggleProps> = ({
	label,
	description,
	defaultValue,
	isLabelHidden = false,
	isDisabled = false,
	onClick,
	...props
}) => {
	// use id
	const id = `sui-toggle-${useId()}`

	const [state, setState] = useState<boolean>(defaultValue as boolean)
	const [isHovered, isFocused, methods] = useInteraction({
		onMouseEnter: props?.onMouseEnter,
		onMouseLeave: props?.onMouseLeave,
		onMouseDownCapture: props?.onMouseDownCapture,
		onBlur: props?.onBlur,
		onBlurCapture: props?.onBlurCapture,
	})

	useEffect(() => {
		if (!isBoolean(defaultValue)) {
			setState(defaultValue ?? false)
		}
	}, [defaultValue])

	// handle on change
	const handleOnChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
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
			"checked-hover": state && isHovered,
			"checked-focus": state && isFocused,
		}),
		...methods,
	}

	// Define input props
	const inputProps = {
		type: "checkbox",
		className: "sui-screen-reader-only",
		defaultChecked: state,
		disabled: isDisabled,
		...props,
	}

	return (
		<label {...containerProps} htmlFor={id} data-testid="toggle">
			<input {...inputProps} id={id} onChange={handleOnChange} />
			<span tabIndex={-1} className="sui-toggle__switch" aria-hidden={true} />
			{isLabelHidden && <span className="sui-screen-reader-only">{label}</span>}
			{!isLabelHidden && (
				<span className="sui-toggle__label" data-testid="toggle-label">
					{label}
				</span>
			)}
			{description && (
				<p className="sui-toggle__description" data-testid="toggle-description">
					{description}
				</p>
			)}
		</label>
	)
}

// Publish component(s)
export { Toggle }