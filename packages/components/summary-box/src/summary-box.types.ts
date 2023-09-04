import React, { HTMLProps } from "react"
import { TagProps } from "@wpmudev/sui-tag"
import { IconProps } from "@wpmudev/sui-icon"

/**
 * SummaryBoxProps Interface
 *
 * Represents the props for the SummaryBox component.
 */
interface SummaryBoxProps {
	/**
	 * The title of the summary box (required).
	 */
	title: string
	/**
	 * The icon of the summary box (optional).
	 */
	icon?: string
	/**
	 * Primary actions to be displayed in the header left (optional).
	 * It can be either an array of objects or a string.
	 */
	primaryActions?: Record<string, any>[] | string
	/**
	 * Secondary actions to be displayed in the header right (optional).
	 * It can be either an array of objects or a string.
	 */
	secondaryActions?: Record<string, any>[] | string
	/**
	 * Additional CSS class names for the summary box element (optional).
	 */
	className?: string
}

/**
 * SummaryBoxBodyProps Interface
 *
 * Represents the props for the SummaryBoxBody component.
 */
interface SummaryBoxBodyProps {
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
interface SummaryBoxItemProps extends HTMLProps<HTMLDivElement> {
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
	actionTitle?: string
	/**
	 * The state/color of the action associated with the summary item (optional).
	 * It can be either an object with the `color` property (for TagProps) or an object with the `color` property (for IconProps).
	 */
	actionState?: Pick<TagProps, "color"> | Pick<IconProps, "color">
	/**
	 * Additional CSS class names for the summary item element (optional).
	 */
	className?: string
}

/**
 * SummaryFooterBodyProps Interface
 *
 * Represents the props for the SummaryFooterBody component.
 */
interface SummaryFooterBodyProps {
	/**
	 * Additional CSS class names for the summary box footer element (optional).
	 */
	className?: string
	/**
	 * Content to be displayed inside the summary box footer (optional).
	 */
	children?: React.ReactNode
}

export {
	SummaryBoxProps,
	SummaryBoxBodyProps,
	SummaryBoxItemProps,
	SummaryFooterBodyProps,
}
