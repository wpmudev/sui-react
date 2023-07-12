import React from "react"

// Base button props
export interface ButtonPropsType
	extends React.HTMLAttributes<
		HTMLButtonElement | HTMLAnchorElement | HTMLLabelElement
	> {
	// Optional CSS class name for the button
	className?: string
	// Link URL for the button
	href?: string
	// Optional target window or frame to open the link
	target?: "_blank" | "_self"
	// Optional associated form element for the button
	htmlFor?: string
	// Appearance style of the button
	appearance: string
	// Color of the button
	color: string
	// Optional flag to make the button small
	isSmall?: boolean
	// Optional flag to disable the button
	isDisabled?: boolean
	// Optional flag to unwrap the button from its container
	isUnwrapped?: boolean
	// Optional icon to be displayed
	icon?: string
	// Optional icon position to be displayed before or after text
	iconPosition?: "start" | "end"
	// Optional button with icon only
	iconOnly?: boolean
	// The content of the button (e.g., text or other React components)
	children?: React.ReactNode
}

// Loading button props
export interface LoadingButtonPropsTypes extends ButtonPropsType {
	// Loading state for button
	isLoading: boolean
}

// Toggle button
export interface ToggleButtonPropsTypes extends ButtonPropsType {
	// button checkbox selected
	isSelected: boolean
}
