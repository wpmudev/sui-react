import { HTMLProps } from "react"

/**
 * Represents the properties for a toggle component.
 */
interface ToggleProps extends HTMLProps<HTMLInputElement> {
	/**
	 * The label for the toggle component.
	 */
	label: string
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden: boolean
	/**
	 * Indicates whether the toggle component is disabled or not.
	 */
	isDisabled?: boolean
}

export type { ToggleProps }
