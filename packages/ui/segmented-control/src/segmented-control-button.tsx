// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useId } from "react"

// Import required component(s)
import {
	generateCN,
	isEmpty,
	handleOnKeyDown,
	_renderHTMLPropsSafely,
} from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import Icons from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"
import { SegmentedControlButtonProps } from "./segmented-control.types"
import { useSegmentedControl } from "./segmented-control-context"

// Build segmented button
const SegmentedControlButton: React.FC<SegmentedControlButtonProps> = ({
	id,
	value,
	icon,
	children,
	ariaLabel,
	isDisabled,
	isResponsive = false,
	_htmlProps,
	_style = {},
}) => {
	// Generate a unique ID for the radio button and set its ID attribute.
	const generatedId = useId()
	const buttonId = id || `sui-radio-${generatedId}`

	if (!value) {
		value = `example-value-${generatedId}`
	}

	if (!children && !icon) {
		children = "example option"
	}

	// Retrieve context values and interaction methods for the button.
	const { onClick, name, value: ctxValue } = useSegmentedControl(value)
	const [isHovered, isFocused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style)

	// Generate class names for the button.
	const classNames = generateCN(
		"sui-segmented-control__button",
		{},
		suiInlineClassname,
	)

	// Check if the button is active based on its value and the context value.
	const isActive = value === ctxValue

	// Get the appropriate icon component if provided.
	let IconTag: React.ComponentType<IconProps> | null = null

	if (icon) {
		IconTag = Icons[icon]
	}

	return (
		<span className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
			{/* The input element serves as the radio button, connected to the label element. */}
			<input
				type="radio"
				id={buttonId}
				className="sui-segmented-control__input"
				name={name}
				checked={isActive}
				value={value}
				disabled={isDisabled}
				onChange={onClick}
				aria-label={ariaLabel || "radio input"}
				aria-checked={isActive}
				aria-hidden={true}
			/>
			{/* The label element represents the segmented control button. */}
			<label
				className={generateCN("sui-segmented-control__label", {
					focus: isFocused,
					active: isActive,
					hover: isHovered,
					disabled: isDisabled,
				})}
				tabIndex={isDisabled ? -1 : 0}
				htmlFor={buttonId}
				data-testid="segmented-control-label"
				onKeyDown={(e) => handleOnKeyDown(e, onClick)}
				{...methods}
			>
				{/* Display the icon if provided. */}
				{!!IconTag && <IconTag size="sm" />}
				{/* Display the children (additional content) if provided. */}
				{!!children && (
					<span {...(isResponsive && { className: "sui-md-hide" })}>
						{children}
					</span>
				)}
				{/* Display the ariaLabel if provided for accessibility. */}
				{!isEmpty(ariaLabel ?? "") && (
					<span className="screen-reader-text">{ariaLabel}</span>
				)}
			</label>
		</span>
	)
}

// Publish component(s)
export { SegmentedControlButton }
