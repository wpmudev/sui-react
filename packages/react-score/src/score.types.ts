import React, { HTMLProps } from "react"

/**
 * This interface defines the props for the Score component.
 * It extends the HTMLProps<HTMLDivElement> type to inherit standard HTML div element props.
 */
interface ScoreProps extends HTMLProps<HTMLDivElement> {
	/** The length of the score bar to be displayed. */
	bar: number
	/** The value to be displayed in the score component. */
	value: number
	/** Optional content to be rendered inside the score component. */
	content?: React.ReactNode
	/** The state of the score, represented as a string (e.g., "low", "medium", "high"). */
	state?: string
	/** Whether the score component should be displayed in a small size. */
	isSmall?: boolean
	/** Whether the value represents a percentage (e.g., 50% or 0.5). */
	isPercentage?: boolean
	/** Additional CSS class name for styling the score component. */
	className?: string
}

export { ScoreProps }
