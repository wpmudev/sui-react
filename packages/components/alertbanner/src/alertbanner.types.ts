import React, { HTMLProps } from "react"
/**
 * Represents the properties for an alert component.
 */
interface AlertProps {
	/**
	 * The title of the alert.
	 */
	title?: string
	/**
	 * The action text for the alert.
	 */
	action?: {
		label?: string
		href?: Pick<HTMLProps<HTMLAnchorElement>, "href">
		target?: Pick<HTMLProps<HTMLAnchorElement>, "target">
		onClick?: () => unknown
	}
	/**
	 * The content of the alert.
	 */
	children?: React.ReactNode
	/**
	 * The state of the alert.
	 */
	state?: "success" | "warning" | "error" | "info"
	/**
	 * The duration (in milliseconds) for the alert to appear.
	 */
	timeIn?: number
	/**
	 * The duration (in milliseconds) for the alert to disappear.
	 */
	timeOut?: number
	/**
	 * Indicates whether the alert is visible or not.
	 */
	isVisible: boolean
	/**
	 * Callback function when the alert gets closed
	 */
	onClose?: (e: React.MouseEvent<HTMLButtonElement>) => unknown
}

export type { AlertProps }
