import React from "react"

/**
 * EmptyStateProps Interface
 *
 * Represents the props for the EmptyState component.
 */
interface EmptyStateProps {
	/**
	 * The logo to be displayed in the empty state.
	 * It can be a string representing the URL of an image or an HTML/SVG element.
	 */
	logo?: string | HTMLOrSVGElement
	/**
	 * CSS class for styling the component
	 */
	className?: string
	/**
	 * Additional content to be displayed alongside the main content in the empty state.
	 */
	children: React.ReactNode
}

export type { EmptyStateProps }
