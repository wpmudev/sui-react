import React, { useId } from "react"

// Import required component(s)
import { generateCN, isEmpty, handleOnKeyDown } from "@wpmudev/sui-utils"
import { useInteraction } from "@wpmudev/sui-hooks"
import * as Icons from "@wpmudev/sui-icons"

import { SegmentedControlButtonProps } from "./segmented-control.types"
import { useSegmentedControl } from "./segmented-control-context"

// Build segmented button
const SegmentedControlButton: React.FC<SegmentedControlButtonProps> = ({
	value,
	icon = "",
	children,
	ariaLabel,
	isDisabled,
	isResponsive = false,
	...props
}) => {
	// Generate a unique ID for the radio button and set its ID attribute.
	const uniqueId = useId()
	const buttonId = `sui-radio-${uniqueId}`

	// Retrieve context values and interaction methods for the button.
	const { onClick, name, value: ctxValue } = useSegmentedControl(value)
	const [isHovered, isFocused, methods] = useInteraction({})

	// Generate class names for the button.
	const classNames = generateCN("sui-segmented-control__button", {})

	// Check if the button is active based on its value and the context value.
	const isActive = value === ctxValue

	// Get the appropriate icon component if provided.
	// @ts-ignore
	const IconTag = Icons?.[icon ?? ""] ?? null

	return (
		<span className={classNames} {...props}>
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
				aria-hidden={true}
				aria-checked={isActive}
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
