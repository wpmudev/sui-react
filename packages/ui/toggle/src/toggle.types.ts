import React, { HTMLProps, ReactNode } from "react"
import { InteractionTypes, useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Represents the properties for a toggle component.
 */
interface ToggleProps
	extends SuiHTMLAttributes<HTMLProps<HTMLInputElement | HTMLDivElement>>,
		SuiStyleType,
		InteractionTypes {
	/**
	 * Toggle ID
	 */
	id?: string
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
	 * Children elements to be rendered within the toggle component.
	 */
	children?: React.ReactNode
	/**
	 * isFluid: When true, the toggle component will take the full width of its container.
	 */
	isFluid?: boolean
	/**
	 * A Callback function to be invoked upon clicking.
	 */
	onClick?(e: React.ChangeEvent<HTMLInputElement>): void
}

export type { ToggleProps }
