import { HTMLProps } from "react"
/**
 * Represents the properties for a code snippet component.
 */
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

interface ColorPickerProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * Unique identifier for the color-picker
	 */
	id?: string
	/**
	 * Default color (initial color)
	 */
	defaultColor?: string
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
	 * callback when reset
	 */
	onReset?: Function
	/**
	 * callback when the color changes but not applied yet
	 */
	onColorChange?: (color: string) => void
	/**
	 * Whether the color picker should allow for transperncy selection
	 */
	disableAlpha?: boolean
}

interface ColorPickerColorProps {
	/**
	 * Unique identifier for the ColorPickerColor.
	 */
	id?: string
	colorCode: string
}

interface ColorPickerPickerProps {
	/**
	 * Unique identifier for the ColorPickerPicker.
	 */
	id?: string
	color: ColorPickerProps["color"]
	type: ColorPickerProps["type"]
	disableAlpha: ColorPickerProps["disableAlpha"]
	onColorChange: ColorPickerProps["onColorChange"]
	onApplyButton: () => void
}

export type { ColorPickerProps, ColorPickerColorProps, ColorPickerPickerProps }
