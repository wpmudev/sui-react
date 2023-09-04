/*
 * Props for the EditorToolbar component.
 */
import { ReactNode } from "react"

// interface definition for the EditorToolbar
interface EditorToolbarProps {
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
	 * Determines whether the back button is allowed in the toolbar.
	 */
	allowBack?: boolean

	/**
	 * Callback function to handle the back button click event.
	 */
	onBackClick(): void

	/**
	 * Callback function to handle the setting button click event.
	 */
	onSettingClick(): void

	/**
	 * Elements to be included in the middle of the toolbar.
	 */
	children?: ReactNode
}

export { EditorToolbarProps }
