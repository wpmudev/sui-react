/*
 * Props for the EditorToolbar component.
 */
import { ReactNode, HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

// interface definition for the EditorToolbar
interface EditorToolbarProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * The title displayed in the editor toolbar.
	 */
	title?: string

	/**
	 * Function that returns an array of ReactNodes representing action buttons.
	 *
	 * @param settingButton - The ReactNode representing the setting button.
	 * @return An array of ReactNodes representing action buttons including setting button.
	 */
	actions?(settingButton: ReactNode): ReactNode[]

	/**
	 * Whether to center the content or keep it aligned to the right
	 */
	alignCenter?: boolean

	/**
	 * Determines whether the back button is allowed in the toolbar.
	 */
	allowBack?: boolean

	/**
	 * Callback function to handle the back button click event.
	 */
	onBackClick?(): void

	/**
	 * Callback function to handle the setting button click event.
	 */
	onSettingClick?(): void

	/**
	 * Elements to be included in the middle of the toolbar.
	 */
	children?: ReactNode
	/**
	 * Whether to disable the settings button or not
	 */
	disableSetting?: boolean
	/**
	 * Whether to disable the back button or not
	 */
	disableBack?: boolean
}

// interface definition for the EditorToolbar
interface EditorToolbarFieldProps extends SuiStyleType {
	/**
	 * The title displayed in the editor toolbar.
	 */
	status?: "saved" | "saving" | "unsaved"

	/**
	 * The title displayed in the editor toolbar.
	 */
	statusText?: string

	/**
	 * Elements to be included in the middle of the toolbar.
	 */
	children: ReactNode
}

export type { EditorToolbarProps, EditorToolbarFieldProps }
