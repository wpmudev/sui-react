import React, { HTMLProps } from "react"

import { ButtonProps } from "@wpmudev/sui-button"
import { InteractionTypes, useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes } from "@wpmudev/sui-utils"

/**
 * Props for the Tooltip component.
 */
interface TooltipBaseProps
	extends SuiHTMLAttributes<
			HTMLProps<HTMLButtonElement | HTMLSpanElement | HTMLButtonElement>
		>,
		useStylesTypes,
		InteractionTypes {
	/**
	 * Button link
	 */
	href?: string
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
	 * Optional to define icon size
	 */
	iconSize?: ButtonProps["iconSize"]
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
	 * Button props
	 */
	buttonProps?: ButtonProps
	/**
	 * Callback function for the click event.
	 */
	onClick?: () => void
}

type TooltipProps = TooltipBaseProps

export type { TooltipProps, TooltipBaseProps }
