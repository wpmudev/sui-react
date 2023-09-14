import { RefObject } from "react"

/**
 * Describes the props that can be passed to the Spinner component.
 */
interface SpinnerProps {
	/**
	 * Size of the spinner
	 */
	size?: "sm" | "lg"
	/**
	 * Color of the spinner
	 */
	color?: "primary" | "dark"
	/**
	 * Whether the spinner should be absolutely positioned
	 */
	isAbsolute?: boolean
}

/**
 * Describes the props that can be passed to the SpinnerLoader component,
 * using a subset of SpinnerProps (size and color).
 */
interface SpinnerLoaderProps extends Pick<SpinnerProps, "size" | "color"> {}

/**
 * Describes the props required for the SpinnerHook, used to control spinner visibility.
 */
interface SpinnerHookProps {
	/**
	 * Reference to the target DOM element
	 */
	targetRef: RefObject<any>
	/**
	 * Additional options for the spinner
	 */
	options: Record<string, any>
}

/**
 * Describes the SpinnerHook, which provides functions to show, hide,
 * and check visibility of the spinner.
 */
interface SpinnerHook {
	/**
	 * Function to show the spinner
	 */
	show(): void
	/**
	 * Function to hide the spinner
	 */
	hide(): void
	/**
	 * Indicates whether the spinner is currently visible
	 */
	isVisible: boolean
}

export { SpinnerProps, SpinnerLoaderProps, SpinnerHookProps, SpinnerHook }
