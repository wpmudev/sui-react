import React, { HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Represents the properties for a code snippet component.
 */
interface CodeEditorProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * File name
	 */
	filename?: string
	/**
	 * The language of the code snippet.
	 */
	language?: string
	/**
	 * Indicates whether the code snippet can be copied or not.
	 */
	allowCopy?: boolean
	/**
	 * Display line numbers
	 */
	displayLineNumbers?: boolean
	/**
	 * Make content non-editable
	 */
	readOnly?: boolean
	/**
	 * Optional CSS class name for the code snippet.
	 */
	className?: string
	/**
	 * The content of the code snippet.
	 */
	children?: React.ReactNode
}

export type { CodeEditorProps }
