import React, { HTMLProps } from "react"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { InteractionTypes, useStylesTypes } from "@wpmudev/sui-hooks"
import {
	OmitNestedKey,
	SuiHTMLAttributes,
	SuiStyleType,
} from "@wpmudev/sui-utils"

/**
 * Represents the properties for a button component.
 */
interface ButtonProps
	extends OmitNestedKey<
			SuiHTMLAttributes<
				HTMLProps<HTMLButtonElement | HTMLAnchorElement | HTMLInputElement>
			>,
			"htmlProps",
			"id" | "className" | "href" | "target" | "htmlFor"
		>,
		SuiStyleType,
		InteractionTypes {
	id?: string
	/**
	 * Optional CSS class name for the button.
	 */
	className?: string
	/**
	 * Link URL for the button.
	 */
	href?: string
	/**
	 * Optional target window or frame to open the link.
	 */
	target?: "_blank" | "_self" | "_parent" | "_top" | string
	/**
	 * Optional associated form element for the button.
	 */
	htmlFor?: string
	/**
	 * Type style of the button.
	 */
	type?: "primary" | "secondary" | "tertiary"
	/**
	 * Color of the button.
	 */
	colorScheme?: "blue" | "black" | "red" | "navy" | "white"
	/**
	 * Optional flag to make the button small.
	 */
	isSmall?: boolean
	/**
	 * Optional flag to make the button full width.
	 */
	isFullWidth?: boolean
	/**
	 * Optional flag to disable the button.
	 */
	isDisabled?: boolean
	/**
	 * Optional flag to unwrap the button from its container.
	 */
	isUnwrapped?: boolean
	/**
	 * Optional icon to be displayed.
	 */
	icon?: IconsNamesType
	/**
	 * Optional icon to be displayed.
	 */
	startIcon?: IconsNamesType
	/**
	 * Optional icon to be displayed.
	 */
	endIcon?: IconsNamesType
	/**
	 * Optional icon size to be displayed.
	 */
	iconSize?: "sm" | "md" | "lg"
	/**
	 * The content of the button (e.g., text or other React components).
	 */
	children?: React.ReactNode
	/**
	 * Optional button with icon only
	 */
	iconOnly?: boolean
	/**
	 * Optional: handle responsive when true
	 */
	isResponsive?: boolean
	/**
	 * Whether the Button is Loading or not
	 */
	isLoading?: boolean
	/**
	 * Button onClick
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type { ButtonProps }
