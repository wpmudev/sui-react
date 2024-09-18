/*
 * Props for the Notification component.
 */
import { ReactNode, HTMLProps } from "react"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

// interface definition for the Alert Banner
interface AlertBannerProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * Alert Banner content
	 */
	children?: ReactNode

	/**
	 * Alert banner actions
	 */
	actions?: ReactNode

	/**
	 * Display icon when true
	 */
	displayIcon?: boolean

	/**
	 * Whether make alert banner dismissible or not
	 */
	isDismissible?: boolean

	/**
	 * Callback function when dismiss the banner
	 */
	onDismiss?(): void

	/**
	 * Alert Banner variations
	 */
	variation?:
		| "informative"
		| "success"
		| "warning"
		| "critical"
		| "plugin-upsell"
		| "hub-upsell"

	/**
	 * Whether to center the banner text or not
	 */
	isCenter?: boolean
}

export type { AlertBannerProps }
