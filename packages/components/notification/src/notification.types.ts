/*
 * Props for the Notification component.
 */
import React, { HTMLProps, ReactNode } from "react"

// interface definition for the NotificationProps
interface NotificationProps {
	id: string // unique ID for the notification
	title?: ReactNode // title content of the notification (can be any valid React node)
	desc?: ReactNode // description content of the notification (can be any valid React node)
	action?: ReactNode // notification action
	icon?: ReactNode | string // icon to display with the notification (can be a React node or a string)
	iconState?: string | never // icon state (unused in the current implementation)
	isInline?: boolean // flag to indicate if the notification is displayed inline
	isDismissible?: boolean // make notification dismissible
	timeout?: number // make notification invisible
	size?: "sm" | "lg" // size variation for the notification (small or large)
	variation?: "info" | "success" | "warning" | "error" // variation type for the notification
}

interface NotificationProps1
	extends Pick<HTMLProps<HTMLDivElement>, "onClick"> {
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
