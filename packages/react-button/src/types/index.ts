import React from "react"

/**
 * Represents the properties for a button component.
 */
export interface ButtonPropsType
	extends React.HTMLAttributes<
		HTMLButtonElement | HTMLAnchorElement | HTMLLabelElement
	> {
	/**
	 * Optional CSS class name for the button.
	 */
	className?: string
	/**
	 * Link URL for the button.
	 */
	href?: string
	/**
	 * Optional target window or frame to open the link.
	 */
	target?: "_blank" | "_self"
	/**
	 * Optional associated form element for the button.
	 */
	htmlFor?: string
	/**
	 * Appearance style of the button.
	 */
	appearance: string
	/**
	 * Color of the button.
	 */
	color: string
	/**
	 * Optional flag to make the button small.
	 */
	isSmall?: boolean
	/**
	 * Optional flag to disable the button.
	 */
	isDisabled?: boolean
	/**
	 * Optional flag to unwrap the button from its container.
	 */
	isUnwrapped?: boolean
	/**
	 * Optional icon to be displayed.
	 */
	icon?: string
	/**
	 * Optional icon position to be displayed before or after text.
	 */
	iconPosition?: "start" | "end"
	/**
	 * The content of the button (e.g., text or other React components).
	 */
	children?: React.ReactNode
	/**
	 * Optional button with icon only
	 */
	iconOnly?: boolean
}

/**
 * Represents the properties for a loading button component.
 */
export interface LoadingButtonPropsTypes extends ButtonPropsType {
	/**
	 * Loading state for the button.
	 */
	isLoading: boolean
}

/**
 * Represents the properties for a toggle button component.
 */
export interface ToggleButtonPropsTypes extends ButtonPropsType {
	/**
	 * Button checkbox selected state.
	 */
	isSelected: boolean
}
