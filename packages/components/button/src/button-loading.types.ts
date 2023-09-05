import { ButtonProps } from "./button.types"

/**
 * Represents the properties for a loading button component.
 */
interface LoadingButtonProps extends ButtonProps {
	/**
	 * Loading state for the button.
	 */
	isLoading: boolean
	/**
	 * Additional className for the loading button
	 */
	className?: string
	/**
	 * Additional className for the loading button
	 */
	children: React.ReactNode
}

export type { LoadingButtonProps }
