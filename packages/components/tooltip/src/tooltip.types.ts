import React, { HTMLProps } from "react"

/**
 * Props for the Tooltip component.
 */
interface TooltipProps
	extends Omit<
		HTMLProps<HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement>,
		"onClick"
	> {
	/**
	 * The text label for the tooltip.
	 */
	label?: string
	/**
	 * Optional type of the tooltip.
	 */
	type?: string
	/**
	 * Optional additional CSS classes for the tooltip.
	 */
	className?: string
	/**
	 * Optional position of the tooltip.
	 */
	position?: string
	/**
	 * Optional custom width of the tooltip.
	 */
	customWidth?: number
	/**
	 * Optional custom width of the tooltip for mobile devices.
	 */
	customMobileWidth?: number
	/**
	 * Optional child elements.
	 */
	children?: React.ReactNode
	/**
	 * Callback function for the click event.
	 */
	onClick?: () => void
}

export { TooltipProps }
