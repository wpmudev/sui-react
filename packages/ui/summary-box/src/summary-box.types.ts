import React, { HTMLProps, ReactNode } from "react"
import { TagProps } from "@wpmudev/sui-tag"
import { IconProps } from "@wpmudev/sui-icon"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * SummaryBoxProps Interface
 *
 * Represents the props for the SummaryBox component.
 */
interface SummaryBoxProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * The title of the summary box (required).
	 */
	title?: string
	/**
	 * The icon of the summary box (optional).
	 */
	icon?: IconsNamesType
	/**
	 * Whether to hide the icon on mobile or not
	 */
	hideMobileIcon?: boolean
	/**
	 * Primary actions to be displayed in the header left (optional).
	 * It can be either an array of objects or a string.
	 */
	primaryActions?: React.ReactNode
	/**
	 * Secondary actions to be displayed in the header right (optional).
	 * It can be either an array of objects or a string.
	 */
	secondaryActions?: React.ReactNode
	/**
	 * Additional CSS class names for the summary box element (optional).
	 */
	className?: string
	/**
	 * Content of the Summary Box
	 */
	children?: ReactNode
}

/**
 * SummaryBoxBodyProps Interface
 *
 * Represents the props for the SummaryBoxBody component.
 */
interface SummaryBoxBodyProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Additional CSS class names for the summary box body element (optional).
	 */
	className?: string
	/**
	 * A list of summary items to be displayed in the summary box body (optional).
	 */
	summaryItems?: React.ReactNode[]
	/**
	 * If true, reverses the order of columns, with summary items column first (optional).
	 */
	reverseBlocks?: boolean
	/**
	 * Additional content to be displayed inside the summary box body (optional).
	 */
	children?: React.ReactNode
}

/**
 * SummaryBoxItemProps Interface
 *
 * Represents the props for the SummaryBoxItem component.
 */
interface SummaryBoxItemProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * The title of the summary item (optional).
	 */
	title?: string
	/**
	 * The URL to link the title of the summary item (optional).
	 */
	titleUrl?: string
	/**
	 * The description of the summary item (optional).
	 */
	description?: string
	/**
	 * The title of the action associated with the summary item (optional).
	 */
	tagTitle?: string
	/**
	 * Tag color
	 */
	tagColor?: TagProps["colorScheme"]
	/**
	 * The item action icon
	 */
	actionIcon?: IconsNamesType
	/**
	 * Action icon color
	 */
	actionIconColor?: IconProps["colorScheme"]
	/**
	 * Additional CSS class names for the summary item element (optional).
	 */
	className?: string
	/**
	 * Additional props to be passed to the Tag component (optional).
	 */
	tagProps?: Partial<TagProps>

	/**
	 * Additional props to be passed to the link element (if titleUrl is provided).
	 */
	linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

/**
 * SummaryFooterBodyProps Interface
 *
 * Represents the props for the SummaryFooterBody component.
 */
interface SummaryFooterBodyProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Additional CSS class names for the summary box footer element (optional).
	 */
	className?: string
	/**
	 * Content to be displayed inside the summary box footer (optional).
	 */
	children?: React.ReactNode
}

/**
 * SummaryBoxContentProps Interface
 *
 * Represents the props for the SummaryBox component.
 */
interface SummaryBoxContentProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Additional CSS class names for the summary box content
	 */
	className?: string
	/**
	 * Content to be displayed inside the summary box content
	 */
	children?: React.ReactNode
	/**
	 * Whether for the content box to have full width or half
	 */
	span?: "half" | "full"
	/**
	 * Padding size of the Box
	 */
	padding?: "sm" | "md" | "lg"
}

/**
 * SummaryBoxContentProps Interface
 *
 * Represents the props for the SummaryBox component.
 */
interface SummaryBoxRowProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * Additional CSS class names for the summary box row
	 */
	className?: string
	/**
	 * Content to be displayed inside the summary box row
	 */
	children?: React.ReactNode
}

export type {
	SummaryBoxProps,
	SummaryBoxBodyProps,
	SummaryBoxItemProps,
	SummaryFooterBodyProps,
	SummaryBoxContentProps,
	SummaryBoxRowProps,
}
