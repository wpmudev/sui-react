import { HTMLProps } from "react"

/**
 * Interface representing the properties of the recipient component component.
 */
interface RecipientProps extends HTMLProps<HTMLDivElement> {
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
	userImage?: string
	/**
	 * Reflects if the user is confirmed
	 */
	userConfirmed?: boolean
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
