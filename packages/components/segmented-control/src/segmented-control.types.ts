import React from "react"
import { IconsNamesType } from "@wpmudev/sui-icons/dist"
/**
 * This interface defines the props for the SegmentedButton component.
 */
interface SegmentedControlProps {
	// Radio button name
	name: string
	// The child elements to be rendered inside the segmented control (the individual segments).
	children?: React.ReactNode
	// A boolean indicating whether the segmented control should take full width (optional).
	isFullWidth?: boolean
	// A callback function triggered when the value of the segmented control changes.
	onChange?(value: string | number): void
	// Default selected value
	defaultValue?: string | number
}

/**
 * This interface defines the props for the SegmentedControlButton component.
 */
interface SegmentedControlButtonProps {
	// The value associated with the button.
	value: string | number
	// A boolean indicating whether the button is disabled (optional).
	isDisabled?: boolean
	// A boolean indicating whether the segmented control should hide label in mobile view (optional).
	isResponsive?: boolean
	// An optional icon to be displayed within the button.
	icon?: IconsNamesType
	// The label for accessibility purposes (optional).
	ariaLabel?: string
	// The child elements to be rendered inside the button (optional).
	children?: React.ReactNode
}

/**
 * This interface defines the context props for the SegmentedControl component.
 */
interface SegmentedControlContextProps {
	// The name of the segmented control.
	name: string
	// The current selected value of the segmented control.
	value: string | number
	// The click event handler for the segmented control items.
	onClick(value: string | number): void
}

export type {
	SegmentedControlProps,
	SegmentedControlButtonProps,
	SegmentedControlContextProps,
}
