import { HTMLProps } from "react"

/**
 * Represents the properties for a checkbox component.
 */
interface CheckboxProps
	extends Omit<HTMLProps<HTMLInputElement>, "defaultValue"> {
	/**
	 * The label for the checkbox.
	 */
	label?: string
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden?: boolean
	/**
	 * Indicates whether the checkbox should be displayed as small or not.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the checkbox is disabled or not.
	 */
	isDisabled?: boolean
	isIndeterminate?: boolean
	/**
	 * The default value of the checkbox.
	 */
	defaultValue?: boolean
}

export { CheckboxProps }
