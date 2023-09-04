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
	 * Callback function when the progress bar is clicked.
	 */
	onClick?: (e) => void
}

export type { ProgressBarProps }
