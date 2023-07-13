import React, { HTMLProps } from "react"
/**
 * Represents the properties for an alert component.
 */
interface AlertProps extends Pick<HTMLProps<HTMLDivElement>, "onClick"> {
	/**
	 * The unique identifier of the alert.
	 */
	id: string
	/**
	 * The title of the alert.
	 */
	title: string
	/**
	 * The action text for the alert.
	 */
	action: string
	/**
	 * The content of the alert.
	 */
	children?: React.ReactNode
	/**
	 * The state of the alert.
	 */
	state: string
	/**
	 * The duration (in milliseconds) for the alert to appear.
	 */
	timeIn: number
	/**
	 * The duration (in milliseconds) for the alert to disappear.
	 */
	timeOut: number
	/**
	 * Indicates whether the alert is visible or not.
	 */
	isVisible: boolean
}

export { AlertProps }
