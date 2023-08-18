import { HTMLProps } from "react"

/**
 * Represents the properties for a Selector component.
 */
interface SelectorProps
	extends Omit<HTMLProps<HTMLInputElement>, "defaultValue"> {
	/**
	 * The label for the Selector.
	 */
	label?: string
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden?: boolean
	/**
	 * Indicates whether the Selector should be displayed as small or not.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the Selector is disabled or not.
	 */
	isDisabled?: boolean
	/**
	 * The default value of the Selector.
	 */
	defaultValue?: boolean
}

export { SelectorProps }
