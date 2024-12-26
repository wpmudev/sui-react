import { RefObject, HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Describes the props that can be passed to the Spinner component.
 */
interface SpinnerProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * Size of the spinner
	 */
	loaderSize?: "xs" | "sm" | "lg"
	/**
	 * Color of the spinner
	 */
	colorScheme?: "primary" | "dark" | "white"
	/**
	 * Whether the spinner should be absolutely positioned
	 */
	isAbsolute?: boolean
	/**
	 * Wraps the spinner in a container with 500px height
	 */
	isContained?: boolean
	/**
	 * Whether it's spinning or not
	 */
	isSpinning?: boolean
}

/**
 * Describes the props that can be passed to the SpinnerLoader component,
 * using a subset of SpinnerProps (size and color).
 */
interface SpinnerLoaderProps extends SuiStyleType {
	loaderSize: SpinnerProps["loaderSize"]
	colorScheme: SpinnerProps["colorScheme"]
	isSpinning: SpinnerProps["isSpinning"]
}

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

export type { SpinnerProps, SpinnerLoaderProps, SpinnerHookProps, SpinnerHook }
