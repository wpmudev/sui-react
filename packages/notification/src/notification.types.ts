/*
 * Props for the Notification component.
 */
import React, { HTMLProps } from "react"

interface NotificationProps extends Pick<HTMLProps<HTMLDivElement>, "onClick"> {
	/**
	 * The unique identifier for the notification.
	 */
	id?: string
	/**
	 * The title of the notification.
	 */
	title?: string
	/**
	 * The action associated with the notification.
	 */
	action?: string
	/**
	 * The content of the notification.
	 */
	children?: React.ReactNode
	/**
	 * The state of the notification (e.g., success, error, warning).
	 */
	state?: string
	/**
	 * The time when the notification appears.
	 */
	timeIn: number
	/**
	 * The time when the notification disappears.
	 */
	timeOut: number
	/**
	 * Flag indicating if the notification should be small.
	 */
	isSmall?: boolean
	/**
	 * Flag indicating if the notification should be inline.
	 */
	isInline?: boolean
	/**
	 * Flag indicating if the notification is visible.
	 */
	isVisible: boolean
	/**
	 * Flag indicating if the notification should have a close button.
	 */
	isCloseButton?: boolean
}

export { NotificationProps }
