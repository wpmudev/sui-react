import React, { useId, Fragment, useCallback } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import Icons from "@wpmudev/sui-icons"
import { Tag } from "@wpmudev/sui-tag"
import { IconProps } from "@wpmudev/sui-icon"
import { DashboardWidgetProps } from "./dashboard-widget.types"
import { Toggle } from "@wpmudev/sui-toggle"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

/**
 * DashboardWidget component displays a widget with optional title, description,
 * icon, tag, and expand/collapse functionality.
 *
 * @param {DashboardWidgetProps} props - The component's props.
 */
const DashboardWidget: React.FC<DashboardWidgetProps> = ({
	id,
	title = "Widget Title",
	description = "Widget Description",
	icon,
	tag,
	tagProps,
	statusIcon,
	statusProps,
	isExpanded = true,
	isDisabled = false,
	isFullWidth = false,
	canCollapse = false,
	onToggle = () => {},
	children,
	actions,
	_htmlProps,
	_style = {},
}: DashboardWidgetProps) => {
	const generatedId = useId()
	const dashboardWidgetId = id || `sui-dashboard-widget-${generatedId}`
	const { suiInlineClassname } = useStyles(_style)

	// Generate classnames for the dashboard widget
	const classNames: string = generateCN(
		"sui-dashboard-widget",
		{
			expanded: isExpanded,
			disabled: isDisabled,
			full: isFullWidth,
		},
		suiInlineClassname,
	)

	// Default children content
	children = useDefaultChildren(children)

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
		<div
			id={dashboardWidgetId}
			className={classNames}
			data-testid="dashboard-widget"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div
				id={`${dashboardWidgetId}-header`}
				className="sui-dashboard-widget__header"
			>
				<div
					id={`${dashboardWidgetId}-header_title`}
					className="sui-dashboard-widget__header-title"
				>
					<div
						id={`${dashboardWidgetId}-header_info`}
						className="sui-dashboard-widget__header-info"
					>
						{/* Display the icon if available */}
						{IconTag && <IconTag id={`${dashboardWidgetId}-icon`} size="md" />}
						{/* Display the title and optional tag */}
						<h4
							id={`${dashboardWidgetId}-title`}
							className="sui-heading--h4 sui-dashboard-widget__header-title"
						>
							{title}
							{tag && (
								<Tag
									id={`${dashboardWidgetId}-tag`}
									colorScheme="black"
									design="outlined"
									{...(tagAttrs ?? {})}
								>
									{tag}
								</Tag>
							)}
							{StatusIcon && (
								<StatusIcon
									id={`${dashboardWidgetId}-status_icon`}
									size="sm"
									{...(statusProps ?? {})}
								/>
							)}
						</h4>
					</div>
					{/* Display collapse/expand button if allowed */}
					{canCollapse && (
						<div
							id={`${dashboardWidgetId}-header_actions`}
							className="sui-dashboard-widget__header-actions"
							data-testid="dashboard-widget-"
						>
							<Toggle
								id={`${dashboardWidgetId}-toggle`}
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
					<div
						id={`${dashboardWidgetId}-description`}
						className="sui-dashboard-widget__header-desc"
					>
						{description}
					</div>
				)}
			</div>
			{/* Display widget content if expanded */}
			{isExpanded && (
				<Fragment>
					{children && (
						<div
							id={`${dashboardWidgetId}-body`}
							className="sui-dashboard-widget__body"
						>
							{children}
						</div>
					)}
					{/* Display widget actions if available */}
					{actions && (
						<div
							id={`${dashboardWidgetId}-footer`}
							className="sui-dashboard-widget__footer"
						>
							{actions}
						</div>
					)}
				</Fragment>
			)}
		</div>
	)
}

DashboardWidget.displayName = "DashboardWidget"

export { DashboardWidget }
