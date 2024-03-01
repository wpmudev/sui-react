/*
 * Props for the Notification component.
 */
import { ReactNode } from "react"

import { IconsNamesType } from "@wpmudev/sui-icons"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiStyleType } from "@wpmudev/sui-utils"

// interface definition for the NotificationProps
interface NotificationProps extends SuiStyleType {
	id?: string // unique ID for the notification
	title?: ReactNode // title content of the notification (can be any valid React node)
	message?: ReactNode // message content of the notification (can be any valid React node)
	action?: ReactNode // notification action
	icon?: IconsNamesType // icon to display with the notification (can be a React node or a string)
	iconState?: string | never // icon state (unused in the current implementation)
	isInline?: boolean // flag to indicate if the notification is displayed inline
	isFluid?: boolean // flag to indicate if the notification is displayed inline
	isDismissible?: boolean // make notification dismissible
	timeout?: number // make notification invisible
	size?: "sm" | "lg" | "fluid" | string // size variation for the notification (small, large, or fluid)
	variation?: "info" | "success" | "warning" | "error" | string // variation type for the notification
}

export type { NotificationProps }
