/*
 * Props for the Notification component.
 */
import React, { ReactNode } from "react"

// interface definition for the NotificationProps
interface NotificationProps {
	id: string // unique ID for the notification
	title?: ReactNode // title content of the notification (can be any valid React node)
	desc?: ReactNode // description content of the notification (can be any valid React node)
	action?: ReactNode // notification action
	icon?: ReactNode | string // icon to display with the notification (can be a React node or a string)
	isInline?: boolean // flag to indicate if the notification is displayed inline
	isDismissible?: boolean // make notification dismissible
	timeout?: number // make notification invisible
	size?: "sm" | "lg" // size variation for the notification (small or large)
	variation?: "info" | "success" | "warning" | "error" // variation type for the notification
}

export type { NotificationProps }
