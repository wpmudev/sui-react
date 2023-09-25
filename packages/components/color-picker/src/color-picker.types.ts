/**
 * Represents the properties for a code snippet component.
 */
interface ColorPickerProps {
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
	onChange?: (color: any) => void
	/**
	 * Color type hex | rgb
	 */
	type?: "hex" | "rgb"
	/**
	 * Callback for color change
	 */
	onColorChange?: (color: any) => string
	/**
	 * Callback for color button click
	 */
	onApplyButton?: () => void
	/**
	 * Specifies the color picker label id.
	 */
	labelledby?: string
	/**
	 * Specifies the color picker helper id.
	 */
	describedby?: string
	/**
	 * Specifies the color picker error id.
	 */
	errormessage?: string
	/**
	 * Specifies the color picker id.
	 */
	id: string
	/**
	 * Specifies if the color picker field has errors.
	 */
	isError: boolean
}

interface ColorPickerColorProps {
	colorCode: string
}

export type { ColorPickerProps, ColorPickerColorProps }
