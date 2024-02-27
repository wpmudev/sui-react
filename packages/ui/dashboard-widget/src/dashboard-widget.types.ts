import { ReactNode } from "react"

import { TagProps } from "@wpmudev/sui-tag"

import { IconsNamesType } from "@wpmudev/sui-icons"
import { useStylesTypes } from "@wpmudev/sui-hooks"
import { SuiStyleType } from "@wpmudev/sui-utils"

/**
 * DashboardWidgetProps is the set of properties that can be passed to the DashboardWidget component.
 */
interface DashboardWidgetProps extends SuiStyleType {
	/** The title of the widget */
	title?: string

	/** The description of the widget */
	description?: ReactNode

	/** The name of the icon to display in the widget */
	icon?: IconsNamesType

	/** Additional content or actions to display in the widget's footer */
	actions?: ReactNode

	/** Whether the widget is initially expanded */
	isExpanded?: boolean

	/** Whether the widget is disabled */
	isDisabled?: boolean

	/**
	 * Callback function that is called when the widget's expand/collapse state is toggled.
	 *
	 * @param status - The new status of the widget (expanded or collapsed)
	 */
	onToggle?(status: boolean): void

	/** Whether the widget can be collapsed or expanded */
	canCollapse?: boolean

	/** A tag associated with the widget */
	tag?: string

	/** Additional props for the tag component */
	tagProps?: TagProps

	/** A status associated with the widget */
	statusIcon?: IconsNamesType

	/** A status color with the widget */
	statusProps?: object

	/** The content of the widget */
	children?: ReactNode
}

export type { DashboardWidgetProps }
