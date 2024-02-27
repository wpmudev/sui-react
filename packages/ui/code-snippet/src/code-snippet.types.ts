import React from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Represents the properties for a code snippet component.
 */
interface CodeSnippetProps extends SuiStyleType {
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
