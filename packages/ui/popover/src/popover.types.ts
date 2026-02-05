import React, { HTMLProps } from "react"

import { ButtonProps } from "@wpmudev/sui-button"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Props for the Popover component.
 */
interface PopoverBaseProps
	extends SuiHTMLAttributes<
			HTMLProps<HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement>
		>,
		SuiStyleType {
	/**
	 * Unique identifier for the popover.
	 */
	id?: string
	/**
	 * Open popup on initial load
	 */
	isOpen?: boolean
	/**
	 * Popup thumbnail
	 */
	image?: string
	/**
	 * Popup header
	 */
	header?: React.ReactNode
	/**
	 * Optional child elements.
	 */
	children?: React.ReactNode
	/**
	 * Popup footer
	 */
	footer?: React.ReactNode
	/**
	 * Popup trigger element
	 */
	trigger?: React.ReactNode
	/**
	 * Popup directions
	 */
	placement?:
		| "top"
		| "top-left"
		| "top-right"
		| "bottom"
		| "bottom-left"
		| "bottom-right"
		| "left"
		| "left-top"
		| "left-bottom"
		| "right"
		| "right-top"
		| "right-bottom"
	/**
	 * Additional className
	 */
	className?: string
	/**
	 * When true, it will display popup on hover
	 */
	displayOnHover?: boolean
	/**
	 * Width of the popup
	 */
	popupWidth?: string | number
	/**
	 * Additional props for the popup container
	 */
	popupProps?: SuiHTMLAttributes<HTMLProps<HTMLDivElement>>
}

type PopoverProps = PopoverBaseProps & ButtonProps

export type { PopoverProps, PopoverBaseProps }
