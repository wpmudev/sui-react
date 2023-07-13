import React, { HTMLProps } from "react"

/**
 * Represents the properties for an announcement component.
 */
interface AnnouncementProps extends Pick<HTMLProps<HTMLDivElement>, "onClick"> {
	/**
	 * The unique identifier of the announcement.
	 */
	id: string
	/**
	 * The content of the announcement.
	 */
	children?: React.ReactNode
	/**
	 * The duration (in milliseconds) for the announcement to appear.
	 */
	timeIn: number
	/**
	 * The duration (in milliseconds) for the announcement to disappear.
	 */
	timeOut: number
	/**
	 * Indicates whether the announcement has a dark theme or not.
	 */
	isDark: boolean
	/**
	 * Indicates whether the announcement is visible or not.
	 */
	isVisible: boolean
}

export type { AnnouncementProps }
