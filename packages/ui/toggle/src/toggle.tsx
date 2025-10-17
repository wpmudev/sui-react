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
	label,
	description,
	defaultValue = false,
	isLabelHidden = false,
	isDisabled = false,
	onClick,
	isFluid = false,
	_htmlProps = {},
	_style = {},
	children,
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
		<div className={generateCN("sui-toggle__container", { fluid: isFluid })}>
			<label {...containerProps} htmlFor={id} data-testid="toggle">
				<input
					{...(inputProps as HTMLProps<HTMLInputElement>)}
					id={id}
					onChange={handleOnChange}
					{..._renderHTMLPropsSafely(_htmlProps)}
				/>
				<span tabIndex={-1} className="sui-toggle__switch" />
				{isLabelHidden && (
					<span className="sui-screen-reader-only">{label}</span>
				)}
				{!isLabelHidden && (
					<span className="sui-toggle__label" data-testid="toggle-label">
						{label}
					</span>
				)}
			</label>
			{description && (
				<div
					className="sui-toggle__description"
					data-testid="toggle-description"
				>
					{description}
				</div>
			)}
			{state && children && (
				<div className="sui-toggle__content">
					<div className="sui-toggle__content--inner">{children}</div>
				</div>
			)}
		</div>
	)
}

// Publish component(s)
export { Toggle }
