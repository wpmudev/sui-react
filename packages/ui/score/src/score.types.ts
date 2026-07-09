import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * This interface defines the props for the Score component.
 * It extends the HTMLProps<HTMLDivElement> type to inherit standard HTML div element props.
 */
interface ScoreProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the score.
	 */
	id?: string
	/** The length of the score bar to be displayed. */
	bar: number
	/** The value to be displayed in the score component. */
	value: number
	/** Optional description to be rendered inside the score component. */
	description?: React.ReactNode
	/** The state of the score, represented as a string (e.g., "low", "medium", "high"). */
	state?: "default" | "error" | "warning" | "success"
	/** Whether the score component should be displayed in a small size. */
	isSmall?: boolean
	/** Whether the value represents a percentage (e.g., 50% or 0.5). */
	isPercentage?: boolean
	/** Additional CSS class name for styling the score component. */
	className?: string
}

export type { ScoreProps }
