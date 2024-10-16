import {
	SuiHTMLAttributes,
	SuiStyleType,
	PluginsSlug,
	PluginIconTypes,
} from "@wpmudev/sui-utils"
import { DropdownProps } from "@wpmudev/sui-dropdown"
import { ReactNode, RefObject } from "react"
import {
	DrawerActions,
	DrawerHeaderTypes,
	DrawerTypes,
} from "@wpmudev/sui-drawer"

/**
 * Represents a plugin's details.
 */
type Plugin = {
	plugin: PluginsSlug
	title: string
	description: string
	link: string
	props?: SuiHTMLAttributes
}

/**
 * Represents the properties for a WPMUDEV button props.
 */
interface WPMUDEVButtonProps extends DropdownProps, SuiStyleType {
	title?: string
	plugins?: Plugin[]
	upsell?: {
		link: string
		title: string
		description: string
		props?: SuiHTMLAttributes
	}
	filter?: PluginsSlug[]
}

/**
 * Represents the properties for a WPMUDEV help.
 */
interface WPMUDEVHelpProps extends DropdownProps, SuiStyleType {
	label?: string
	title?: string
	isPro?: boolean
	content: Array<{
		link: string
		label: string
	}>
	resources?: {
		title: string
		content: Array<{
			icon: PluginIconTypes
			title: string
			description: string
			link: string
		}>
	}
	support?: {
		icon: PluginIconTypes
		title: string
		description: string
		message: string
	}
}

/**
 * Represents the properties for a WPMUDEV notification.
 */
interface WPMUDEVNotificationProps extends DropdownProps, SuiStyleType {
	title?: string
	label?: string
	notifications: Array<{
		version: string
		time: string
		title: string
		actions: Array<ReactNode>
	}>
	footerActions?: Array<ReactNode>
}

/**
 * Represents the properties for a WPMUDEV notification.
 */
interface WPMUDEVDrawerProps extends DrawerTypes, SuiStyleType {
	title?: string
	toggleRef: RefObject<DrawerActions | null>
	footer?: ReactNode
	placement?: "left" | "right"
	className?: string
	children: ReactNode
	back?: DrawerHeaderTypes["back"]
}

export type {
	WPMUDEVButtonProps,
	WPMUDEVHelpProps,
	WPMUDEVNotificationProps,
	WPMUDEVDrawerProps,
}
