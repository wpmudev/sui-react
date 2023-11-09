import React, { Fragment, useCallback } from "react"

import { generateCN } from "@wpmudev/sui-utils"
import Icons from "@wpmudev/sui-icons"
import { Tag } from "@wpmudev/sui-tag"
import { IconProps } from "@wpmudev/sui-icon"
import { DashboardWidgetProps } from "./dashboard-widget.types"
import { Toggle } from "@wpmudev/sui-toggle"

/**
 * DashboardWidget component displays a widget with optional title, description,
 * icon, tag, and expand/collapse functionality.
 *
 * @param {DashboardWidgetProps} props - The component's props.
 */
const DashboardWidget: React.FC<DashboardWidgetProps> = ({
	title,
	description = "",
	icon,
	tag,
	tagProps,
	statusIcon,
	statusProps,
	isExpanded = true,
	isDisabled = false,
	canCollapse = false,
	onToggle = () => {},
	children = null,
	actions = null,
}) => {
	// Generate classnames for the dashboard widget
	const classNames: string = generateCN("sui-dashboard-widget", {
		expanded: isExpanded,
		disabled: isDisabled,
	})

	/**
	 * Callback function to toggle the widget's expand/collapse state.
	 */
	const onToggleState = useCallback(() => {
		if (onToggle) {
			onToggle(!isExpanded)
		}
	}, [isExpanded, onToggle])

	// Determine the icon component based on the 'icon' prop
	let IconTag: React.ComponentType<IconProps> | null = null
	if (icon) {
		IconTag = Icons[icon]
	}

	// Determine the statusIcon component based on the 'statusIcon' prop
	let StatusIcon: React.ComponentType<IconProps> | null = null
	if (statusIcon) {
		StatusIcon = Icons[statusIcon]
	}

	// Prepare attributes for the tag component
	const tagAttrs = {
		...tagProps,
	}

	return (
		<div className={classNames} data-testid="dashboard-widget">
			<div className="sui-dashboard-widget__header">
				<div className="sui-dashboard-widget__header-title">
					<div className="sui-dashboard-widget__header-info">
						{/* Display the icon if available */}
						{IconTag && <IconTag size="md" />}
						{/* Display the title and optional tag */}
						<h4 className="sui-heading--h4 sui-dashboard-widget__header-title">
							{title ?? "Title of Upsell"}
							{tag && (
								<Tag color="black" design="outlined" {...(tagAttrs ?? {})}>
									{tag}
								</Tag>
							)}
							{StatusIcon && <StatusIcon size="sm" {...(statusProps ?? {})} />}
						</h4>
					</div>
					{/* Display collapse/expand button if allowed */}
					{canCollapse && (
						<div
							className="sui-dashboard-widget__header-actions"
							data-testid="dashboard-widget-"
						>
							<Toggle
								isLabelHidden={true}
								label="Toggle Widget"
								defaultValue={isExpanded ?? false}
								onClick={onToggleState}
								isDisabled={isDisabled ?? false}
							/>
						</div>
					)}
				</div>
				{/* Display widget description */}
				{description && (
					<div className="sui-dashboard-widget__header-desc">{description}</div>
				)}
			</div>
			{/* Display widget content if expanded */}
			{isExpanded && (
				<Fragment>
					<div className="sui-dashboard-widget__body">{children}</div>
					{/* Display widget actions if available */}
					{actions && (
						<div className="sui-dashboard-widget__footer">{actions}</div>
					)}
				</Fragment>
			)}
		</div>
	)
}

DashboardWidget.displayName = "DashboardWidget"

export { DashboardWidget }
