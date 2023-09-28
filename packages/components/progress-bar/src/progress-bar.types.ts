/**
 * Interface representing the properties of a progress bar component.
 */
interface ProgressBarProps {
	/**
	 * Label for the progress bar.
	 */
	label?: string

	/**
	 * Value of the progress bar.
	 */
	value?: string | number

	/**
	 * Size of the progress bar.
	 */
	size?: string

	/**
	 * Indicates whether the progress bar should be displayed inline.
	 */
	isInline?: boolean

	/**
	 * Indicates whether the cancel button should be displayed.
	 */
	allowCancel?: boolean

	/**
	 * Progress bar animation.
	 */
	isIndeterminate?: boolean

	/**
	 * Indicates whether the progress bar value should be displayed.
	 */
	showValue?: boolean

	/**
	 * Custom classname for the progress bar.
	 */
	className?: string

	/**
	 * Callback function when the progress bar is clicked.
	 */
	onClick?: (e) => void
}

export type { ProgressBarProps }
