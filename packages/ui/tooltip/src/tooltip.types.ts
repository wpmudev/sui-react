import React, { HTMLProps } from "react"

import { ButtonProps } from "@wpmudev/sui-button"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * Props for the Tooltip component.
 */
interface TooltipBaseProps
	extends Omit<
			HTMLProps<HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement>,
			"onClick" | "label"
		>,
		useStylesTypes {
	/**
	 * The text label for the tooltip.
	 */
	label?: React.ReactNode
	/**
	 * Optional type of the tooltip.
	 */
	type?: string
	/**
	 * Optional to define icon name of the tooltip.
	 */
	icon?: string
	/**
	 * Optional additional CSS classes for the tooltip.
	 */
	className?: string
	/**
	 * Optional position of the tooltip.
	 */
	placement?: string
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

type TooltipProps = TooltipBaseProps & ButtonProps

export type { TooltipProps, TooltipBaseProps }
