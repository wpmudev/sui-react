import { ButtonPropsType } from "./types"

/**
 * Represents the properties for a loading button component.
 */
interface LoadingButtonProps extends ButtonPropsType {
	/**
	 * Loading state for the button.
	 */
	isLoading: boolean
}

export { LoadingButtonProps }
