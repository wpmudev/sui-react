import { HTMLProps } from "react"
import { AvatarProps } from "@wpmudev/sui-avatar"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Interface representing the properties of the recipient component component.
 */
interface RecipientProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Unique identifier for the recipient.
	 */
	id?: string
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
