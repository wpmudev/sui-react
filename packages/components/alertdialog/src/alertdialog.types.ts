import React from "react"

/**
 * Represents the properties for an alert dialog component.
 */
interface AlertDialogProps {
	/**
	 * The content of the modal in the alert dialog.
	 */
	modalContent: React.ReactNode
	/**
	 * The duration (in milliseconds) for the trigger to appear.
	 */
	triggerTimer: number
	/**
	 * The content of the trigger in the alert dialog.
	 */
	triggerContent: React.ReactNode
	/**
	 * Additional props for the alert dialog component.
	 */
	[props: string]: any
}

export type { AlertDialogProps }
