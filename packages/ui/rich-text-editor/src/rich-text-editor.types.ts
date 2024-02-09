import React from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * Represents the properties of the Rich Text Editor component
 */
interface RichTextEditorProps extends useStylesTypes {
	/**
	 * Id for the textarea that contains the editor
	 */
	textareaId?: string

	/**
	 * Add toolbar actions beside header
	 */
	actions?: null | React.ReactNode

	/**
	 * TinyMCE options
	 */
	tinyMCEOptions?: object

	/**
	 * Optional CSS class name for the code snippet.
	 */
	className?: string

	/**
	 * Detect changes made in text area
	 *
	 * @param {string} content
	 */
	onChange?(content: string): void

	/**
	 * Make textarea readable
	 */
	isDisabled?: boolean

	/**
	 * Default textarea value
	 */
	defaultValue?: string
}

export type { RichTextEditorProps }
