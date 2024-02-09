import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * EmptyStateProps Interface
 *
 * Represents the props for the EmptyState component.
 */
interface EmptyStateProps
	extends Omit<HTMLProps<HTMLDivElement>, "className" | "children">,
		useStylesTypes {
	/**
	 * The logo to be displayed in the empty state.
	 * It can be a string representing the URL of an image or an HTML/SVG element.
	 */
	logo?: string | React.ReactElement
	/**
	 * CSS class for styling the component
	 */
	className?: string
	/**
	 * Additional content to be displayed alongside the main content in the empty state.
	 */
	children?: React.ReactNode
}

export type { EmptyStateProps }
