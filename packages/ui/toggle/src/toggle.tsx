import React, {
	useState,
	useEffect,
	useId,
	useCallback,
	HTMLProps,
	Fragment,
} from "react"

import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import {
	isBoolean,
	generateCN,
	_renderHTMLPropsSafely,
} from "@wpmudev/sui-utils"

import { ToggleProps } from "./toggle.types"

// Build "Toggle" component
const Toggle: React.FC<ToggleProps> = ({
	id,
	label,
	description,
	defaultValue = false,
	isLabelHidden = false,
	isDisabled = false,
	onClick,
	_htmlProps = {},
	_style = {},
	...props
}) => {
	// use id
	const generatedId = useId()
	const toggleId = id || `sui_toggle_${generatedId}`

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
		} else {
			setState(defaultValue)
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

	const { suiInlineClassname } = useStyles(_style)

	// Define container props
	const containerProps = {
		className: generateCN(
			"sui-toggle",
			{
				"hidden-label": isLabelHidden,
				checked: state,
				disabled: isDisabled,
				hover: !state && isHovered,
				focus: !state && isFocused,
				"checked-hover": state && isHovered,
				"checked-focus": state && isFocused,
			},
			suiInlineClassname,
		),
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
		<div className="sui-toggle__container" id={`${toggleId}_container`}>
			<label {...containerProps} htmlFor={toggleId} data-testid="toggle">
				<input
					{...(inputProps as HTMLProps<HTMLInputElement>)}
					id={toggleId}
					onChange={handleOnChange}
					{..._renderHTMLPropsSafely(_htmlProps)}
				/>
				<span
					tabIndex={-1}
					className="sui-toggle__switch"
					id={`${toggleId}_switch`}
				/>
				{isLabelHidden && (
					<span className="sui-screen-reader-only" id={`${toggleId}_label`}>
						{label}
					</span>
				)}
				{!isLabelHidden && (
					<span
						className="sui-toggle__label"
						id={`${toggleId}_label`}
						data-testid="toggle-label"
					>
						{label}
					</span>
				)}
			</label>
			{description && (
				<div
					id={`${toggleId}_description`}
					className="sui-toggle__description"
					data-testid="toggle-description"
				>
					{description}
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { Toggle }
