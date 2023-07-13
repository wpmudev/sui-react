import { ButtonPropsType } from "./types"

/**
 * Represents the properties for a toggle button component.
 */
interface ToggleButtonProps extends ButtonPropsType {
	/**
	 * Button checkbox selected state.
	 */
	isSelected: boolean
}

export { ToggleButtonProps }
