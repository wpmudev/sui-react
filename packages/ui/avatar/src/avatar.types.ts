import { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"
import { IconsNamesType } from "@wpmudev/sui-icons"

/**
 * Represents the properties for an avatar component.
 */
interface AvatarProps
	extends SuiHTMLAttributes<HTMLProps<HTMLSpanElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the avatar.
	 */
	id?: string
	/**
	 * The image source for the avatar.
	 */
	image?: {
		alt: string
		src: string
	}
	/**
	 * The status of the avatar.
	 */
	status?: "none" | "confirmed" | "awaiting" | "not-accepted" | "not-connected"
	/**
	 * Indicates whether the avatar should be displayed as small or not.
	 */
	isSmall?: boolean
	/**
	 * The CSS class name for the avatar.
	 */
	className?: string

	/**
	 * The icon for the avatar.
	 */
	icon?: IconsNamesType
	/**
	 * Callback function when click on avatar
	 */
	onClick?(): void
}

export type { AvatarProps }
