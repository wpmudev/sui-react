import React, { HTMLProps } from "react"

import { ButtonProps } from "@wpmudev/sui-button"

/**
 * Props for the Popover component.
 */
interface PopoverBaseProps
	extends Omit<
		HTMLProps<HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement>,
		"onClick"
	> {
	image?: string
	header?: React.ReactNode
	/**
	 * Optional child elements.
	 */
	children?: React.ReactNode
	footer?: React.ReactNode
	trigger?: React.ReactNode
	position?: ["top", "left", "bottom", "bottom-left", "bottom-right", "right"]
	className?: string
}

type PopoverProps = PopoverBaseProps & ButtonProps

export type { PopoverProps, PopoverBaseProps }
