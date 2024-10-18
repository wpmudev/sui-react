import React, { HTMLProps } from "react"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Defines the props for a BasicBox component.
 */
interface BasicBoxProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * The title of the BasicBox, which can contain React nodes.
	 */
	title?: React.ReactNode

	/**
	 * An optional description for the BasicBox, which can contain React nodes.
	 */
	description?: React.ReactNode

	/**
	 * Optional header actions to be displayed in the BasicBox header, which can contain React nodes.
	 */
	headerActions?: React.ReactNode

	/**
	 * Optional footer actions to be displayed in the BasicBox footer, which can contain React nodes.
	 */
	footerActions?: React.ReactNode[]

	/**
	 * Optional children elements or components to be placed inside the BasicBox, which can contain React nodes.
	 */
	children?: React.ReactNode

	/**
	 * Display "Pro" tag
	 */
	isPro?: boolean

	/**
	 * When set to "true", the block will have "100%" width.
	 */
	isFluid?: boolean

	/**
	 * An optional CSS class name to apply custom styling to the BasicBox.
	 * Should be a string.
	 */
	className?: string

	/**
	 * When set to "true" footer actions will be centered
	 */
	centerFooterActions?: boolean

	/**
	 * whether it has large radius or not
	 */
	hasLargeRadius?: boolean
}

export type { BasicBoxProps }
