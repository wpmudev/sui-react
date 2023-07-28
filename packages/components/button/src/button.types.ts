import React, { HTMLProps } from "react"

/**
 * Represents the properties for a button component.
 */
interface ButtonProps
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
	href?: Pick<HTMLProps<HTMLAnchorElement>, "href">
	/**
	 * Optional target window or frame to open the link.
	 */
	target?: Pick<HTMLProps<HTMLAnchorElement>, "target">
	/**
	 * Optional associated form element for the button.
	 */
	htmlFor?: string
	/**
	 * Appearance style of the button.
	 */
	appearance?: string
	/**
	 * Color of the button.
	 */
	color?: string
	/**
	 * Optional flag to make the button small.
	 */
	isSmall?: boolean
	/**
	 * Optional flag to make the button full width.
	 */
	isFullWidth?: boolean
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
	 * Optional icon size to be sm | md | lg.
	 */
	iconSize?: "sm" | "md" | "lg"
	/**
	 * The content of the button (e.g., text or other React components).
	 */
	children?: React.ReactNode
	/**
	 * Optional button with icon only
	 */
	iconOnly?: boolean
}

export { ButtonProps }
