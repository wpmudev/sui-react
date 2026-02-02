import React, { createRef, useRef, useId } from "react"
import { Dropdown, DropdownRefProps } from "@wpmudev/sui-dropdown"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { WPMUDEVNotificationProps } from "../navigation-wpmudev.types"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Link } from "@wpmudev/sui-link"

const NotificationWPMUDEV: React.FC<WPMUDEVNotificationProps> = ({
	id,
	label = "What’s new on Smush?",
	title = "What's new",
	notifications = [],
	footerActions = [
		<Link key="read" href="#">
			Mark all as read
		</Link>,
	],
	className = "",
	tooltipProps = {},
	_htmlProps = {},
	_style = {},
	...props
}) => {
	const generatedId = useId()
	const wpmudevNotificationId = id || `sui-wpmudev-notification-${generatedId}`
	// Create a ref for the user dropdown button
	const notificationRef = useRef<DropdownRefProps | null>(null)

	const classNames = generateCN(
		"sui-wpmudev",
		{},
		`sui-wpmudev__notifications ${className}`,
	)

	return (
		<>
			<Dropdown
				id={wpmudevNotificationId}
				ref={notificationRef}
				label={label}
				placement="left"
				buttonIcon="Logo"
				trigger={
					<Tooltip
						placement="top-right"
						buttonProps={{
							type: "tertiary",
							colorScheme: "black",
							icon: "Bell",
							iconOnly: true,
						}}
						onClick={() => {
							notificationRef?.current?.toggle()
						}}
						{...tooltipProps}
					>
						{title}
					</Tooltip>
				}
				arrow={false}
				menuCustomWidth={360}
				className={classNames}
				{..._renderHTMLPropsSafely(_htmlProps)}
				{...props}
			>
				{label && (
					<div
						id={`${wpmudevNotificationId}-header`}
						className="sui-wpmudev__notifications--header"
					>
						<h4 className="sui-heading--h5">{label}</h4>
					</div>
				)}
				<NotificationWPMUDEVContent
					id={`${wpmudevNotificationId}-content`}
					notifications={notifications}
				/>
				{footerActions && (
					<div
						id={`${wpmudevNotificationId}-footer`}
						className="sui-wpmudev__notifications--footer"
					>
						{footerActions.map((action, index) => action)}
					</div>
				)}
			</Dropdown>
		</>
	)
}

const NotificationWPMUDEVContent: React.FC<WPMUDEVNotificationProps> = ({
	id,
	notifications = [],
	className = "",
	_htmlProps = {},
	_style = {},
	...props
}) => {
	const classNames = generateCN(
		"sui-wpmudev__notifications--list",
		{},
		className,
	)

	return (
		<div
			id={id}
			className={classNames}
			{..._renderHTMLPropsSafely(_htmlProps)}
			{...props}
		>
			{notifications.map((notification, index) => (
				<div key={index} className="sui-wpmudev__notifications--item">
					<div className="sui-wpmudev__notifications--item-meta">
						<span className="sui-wpmudev__notifications--version">
							v{notification.version}
						</span>
						<span className="sui-wpmudev__notifications--time">
							{notification.time}
						</span>
					</div>
					<p className="sui-wpmudev__notifications--item-title">
						{notification.title}
					</p>
					<div className="sui-wpmudev__notifications--item-actions">
						{notification.actions?.map((action, actionIndex) => (
							<div
								key={actionIndex}
								className="sui-wpmudev__notifications--item-action"
							>
								{action}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

// Export the MoreFromWPMUDEV component
export { NotificationWPMUDEV, NotificationWPMUDEVContent }
