import React, { HTMLProps } from "react"

import { ButtonProps } from "@wpmudev/sui-button"

/**
 * Props for the Popover component.
 */
interface PopoverBaseProps
	extends Omit<
		HTMLProps<HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement>,
		"onClick",
		"title"
	> {
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
	title?: React.ReactNode
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
	position?:
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
}

type PopoverProps = PopoverBaseProps & ButtonProps

export type { PopoverProps, PopoverBaseProps }
