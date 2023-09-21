/**
 * Interface representing the properties of a radio input component.
 */
interface RadioProps {
	/**
	 * ID of the radio input.
	 */
	id: string

	/**
	 * Name for the radio.
	 */
	name: string

	/**
	 * Label for the radio input.
	 */
	label: string

	/**
	 * Description for the radio input.
	 */
	description: string

	/**
	 * Tag for the radio input.
	 */
	tag: string

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

	/**
	 * Indicates whether the radio input background is enabled.
	 */
	isBg: boolean
}

export type { RadioProps }
