/**
 * Interface representing the properties of a radio input component.
 */
interface RadioProps {
	/**
	 * ID of the radio input.
	 */
	id: string

	/**
	 * Label for the radio input.
	 */
	label: string

	/**
	 * Default value of the radio input.
	 */
	defaultValue: unknown

	/**
	 * Indicates whether the radio input is checked.
	 */
	isChecked: boolean

	/**
	 * Indicates whether the radio input should be displayed in a small size.
	 */
	isSmall: boolean

	/**
	 * Indicates whether the radio input is disabled.
	 */
	isDisabled: boolean
}

export type { RadioProps }
