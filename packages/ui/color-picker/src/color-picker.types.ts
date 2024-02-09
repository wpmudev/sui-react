/**
 * Represents the properties for a code snippet component.
 */
import { useStylesTypes } from "@wpmudev/sui-hooks"

interface ColorPickerProps extends useStylesTypes {
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
	 * Specifies if the color picker field has errors.
	 */
	isError?: boolean
	/**
	 * Specifies if the color picker field is disabled.
	 */
	isDisabled?: boolean
	/**
	 * Specifies if the color picker field is small.
	 */
	isSmall?: boolean
	/**
	 * Specifies if the color picker is full width.
	 */
	isFluid?: boolean
	/**
	 * Small sized
	 */
	isSmall?: boolean
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
	onApplyButton: () => void
}

export type { ColorPickerProps, ColorPickerColorProps, ColorPickerPickerProps }
