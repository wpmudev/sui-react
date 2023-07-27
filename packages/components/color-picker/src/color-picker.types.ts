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
}

interface ColorPickerColorProps {
	hex: string
}

export type { ColorPickerProps, ColorPickerColorProps }
