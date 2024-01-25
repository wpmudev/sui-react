/**
 * Represents the properties for a code snippet component.
 */
interface ColorPickerProps {
	/**
	 * Unique identifier for the color-picker
	 */
	id?: string
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
	onApply?: (color: string) => void
	/**
	 * Color type hex | rgb
	 */
	type?: "hex" | "rgb"
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
	 * callback when reset
	 */
	onReset?: Function
	/**
	 * callback when the color changes but not applied yet
	 */
	onColorChange?: (color: string) => void
}

interface ColorPickerColorProps {
	colorCode: string
}

interface ColorPickerPickerProps {
	color: ColorPickerProps["color"]
	type: ColorPickerProps["type"]
	onColorChange: ColorPickerProps["onColorChange"]
	onApplyButton: ColorPickerProps["onApplyButton"]
}

export type { ColorPickerProps, ColorPickerColorProps, ColorPickerPickerProps }
