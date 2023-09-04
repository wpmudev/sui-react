/**
 * Represents the properties for a code snippet component.
 */
interface ColorPickerProps {
	/**
	 * Color code
	 */
	color?: string
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
}

interface ColorPickerColorProps {
	colorCode: string
}

export type { ColorPickerProps, ColorPickerColorProps }
