import { ButtonProps } from "./button.types"

/**
 * Represents the properties for a toggle button component.
 */
interface ToggleButtonProps extends ButtonProps {
	/**
	 * Button checkbox selected state.
	 */
	isSelected: boolean
}

export type { ToggleButtonProps }
