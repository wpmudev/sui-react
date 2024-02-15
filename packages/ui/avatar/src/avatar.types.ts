import { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"

/**
 * Represents the properties for an avatar component.
 */
interface AvatarProps
	extends Omit<
			HTMLProps<HTMLSpanElement>,
			"className" | "height" | "content" | "translate" | "width" | "color"
		>,
		useStylesTypes {
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
}

export type { AvatarProps }
