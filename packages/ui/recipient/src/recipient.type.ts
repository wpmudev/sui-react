import { HTMLProps } from "react"
import { AvatarProps } from "@wpmudev/sui-avatar"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes } from "@wpmudev/sui-utils"

/**
 * Interface representing the properties of the recipient component component.
 */
interface RecipientProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		Omit<useStylesTypes, "appearance"> {
	/**
	 * Name of the receipient
	 */
	userName?: string
	/**
	 * Email of the receipient
	 */
	userEmail?: string
	/**
	 * Profile image or avatar
	 */
	userImage?: {
		alt: string
		src: string
	}
	/**
	 * Reflects if the user is confirmed
	 */
	status?: AvatarProps["status"]
	/**
	 * Reflects whether the user is invited or not.
	 */
	isInvited?: boolean
	/**
	 * Theme of the recipient.
	 */
	appearance?: string
}

export type { RecipientProps }
