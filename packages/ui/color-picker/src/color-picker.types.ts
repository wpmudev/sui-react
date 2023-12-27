/**
 * Represents the properties for a code snippet component.
 */
interface ColorPickerProps {
	/**
	 * Unique identifier for the color-picker
	 */
	id: string
	/**
	 * Color code
	 */
	color?: string
	/**
	 * Color picker placeholder
	 */
	placeholder?: string
	/**
	 * Callback for color change
	 */
	onChange?: (color: string) => void
	/**
	 * Color type hex | rgb
	 */
	type?: "hex" | "rgb"
	/**
	 * Callback for color change
	 */
	onColorChange?: (color: string) => void
	/**
	 * Callback for color button click
	 */
	onApplyButton?: () => void
	/**
	 * Specifies if the color picker field has errors.
	 */
	isError?: boolean
	/**
	 * Specifies if the color picker field is disabled.
	 */
	isDisabled?: boolean
	/**
	 * callback when cancel
	 */
	onCancel?: Function
	/**
	 * callback when reset
	 */
	onReset?: Function
}

interface ColorPickerColorProps {
	colorCode: string
}

export type { ColorPickerProps, ColorPickerColorProps }
