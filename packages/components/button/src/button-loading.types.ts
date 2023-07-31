import { ButtonProps } from "./button.types"

/**
 * Represents the properties for a loading button component.
 */
interface LoadingButtonProps extends ButtonProps {
	/**
	 * Loading state for the button.
	 */
	isLoading: boolean
}

export { LoadingButtonProps }
