import React, { HTMLProps, ReactNode } from "react"
import { InteractionTypes, useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes } from "@wpmudev/sui-utils"

/**
 * Represents the properties for a toggle component.
 */
interface ToggleProps
	extends SuiHTMLAttributes<HTMLProps<HTMLInputElement>>,
		useStylesTypes,
		InteractionTypes {
	/**
	 * The label for the toggle component.
	 */
	label?: string | ReactNode
	/**
	 * The description for the toggle component.
	 */
	description?: string
	/**
	 * Default value
	 */
	defaultValue?: boolean
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden?: boolean
	/**
	 * Indicates whether the toggle component is disabled or not.
	 */
	isDisabled?: boolean
	/**
	 * A Callback function to be invoked upon clicking.
	 */
	onClick?(e: React.ChangeEvent<HTMLInputElement>): void
}

export type { ToggleProps }
