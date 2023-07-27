import React from "react"

/**
 * Represents the properties for a code snippet component.
 */
interface CodeSnippetProps {
	/**
	 * The language of the code snippet.
	 */
	language?: string
	/**
	 * Indicates whether the code snippet can be copied or not.
	 */
	copy?: boolean
	/**
	 * Optional CSS class name for the code snippet.
	 */
	className?: string
	/**
	 * The content of the code snippet.
	 */
	children?: React.ReactNode
}

export type { CodeSnippetProps }
