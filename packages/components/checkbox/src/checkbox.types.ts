import { ReactNode, HTMLAttributes } from "react"

// Define a type that represents the possible values for a checkbox button.
type CheckboxValueType = string | number | undefined

/**
 * Define the props for a CheckboxGroup component.
 */
interface CheckboxGroupProps {
	/**
	 * The name of the checkbox group.
	 */
	name: string

	/**
	 * Indicates whether the checkbox buttons should be displayed inline.
	 */
	isInline?: boolean

	/**
	 * The children components rendered inside the checkbox group.
	 */
	children: ReactNode

	/**
	 * A callback function to handle checkbox button selection changes.
	 */
	onChange?(value: CheckboxValueType[]): void

	/**
	 * Indicates whether the checkbox buttons should be displayed with a smaller size (optional).
	 */
	isSmall?: boolean

	/**
	 * Indicates whether the checkbox button is disabled (optional).
	 */
	isDisabled?: boolean
}

/**
 * Represents the properties for a checkbox component.
 */
interface CheckboxProps
	extends Omit<HTMLAttributes<HTMLInputElement>, "defaultValue"> {
	/**
	 * The unique identifier for the checkbox button (optional).
	 */
	id?: string

	/**
	 * The label for the checkbox.
	 */
	label?: string

	/**
	 * The label for the checkbox.
	 */
	value?: string

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

	/**
	 * Indicates whether checkbox is checked or not
	 */
	isChecked?: boolean

	/**
	 * Mark checkbox checked as indeterminate
	 */
	isIndeterminate?: boolean
}

export type { CheckboxProps, CheckboxGroupProps, CheckboxValueType }
