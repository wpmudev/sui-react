import React, { useState, useEffect, useId, useCallback } from "react"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import { Button } from "@wpmudev/sui-button"
import { NotificationProps } from "./notification.types"
import { IconProps } from "@wpmudev/sui-icon"
import Icons from "@wpmudev/sui-icons"
import { useNotifications } from "./use-notification"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const Notification: React.FC<NotificationProps> = ({
	id,
	title,
	message = "message",
	action,
	icon = "Info",
	isInline = true,
	isDismissible = false,
	size,
	variation,
	timeout = 5000,
	...props
}) => {
	const [isVisible, setIsVisible] = useState(true)
	const notifications = useNotifications()

	// Create notification ID
	const uniqueId = useId()
	if (!id) {
		id = uniqueId
	}
	const notificationId = `sui-notification-${uniqueId}`

	useEffect(() => {
		if (!isInline && !isDismissible) {
			setTimeout(() => {
				notifications.remove(id)
			}, timeout ?? 5000)
		}
	}, [id, isInline, notifications, timeout, isDismissible])

	/**
	 * Hide notification when click on dismiss button
	 *
	 * @type {() => void}
	 */
	const onClose = useCallback(() => {
		if (isInline) {
			setIsVisible(false)
		} else {
			notifications.remove(id)
		}
	}, [id, isInline, notifications])

	const { cssCN } = useStyles(props)

	// do not render
	if (!isVisible) return null

	// Generate classnames
	const classNames = generateCN(
		"sui-notification",
		{
			inline: isInline,
			[size as string]: !isEmpty(size ?? ""),
			[variation as string]: ["success", "warning", "error", "info"].includes(
				variation ?? "",
			),
		},
		cssCN,
	)

	// Get SVG Icon
	let Icon: React.ComponentType<IconProps> | null = null

	if (icon) {
		Icon = Icons?.[icon]
	}

	return (
		<div
			id={notificationId}
			className={classNames}
			role="alert"
			aria-labelledby={`${notificationId}-title`}
			aria-describedby={`${notificationId}-message`}
			data-testid="notification"
		>
			{!!Icon && <Icon size="md" className="sui-notification__icon" />}
			<div className="sui-notification__content">
				{!!title && (
					<span
						className="sui-notification__title"
						id={`${notificationId}-title`}
					>
						{title}
					</span>
				)}
				{!!message && (
					<span
						className="sui-notification__message"
						id={`${notificationId}-message`}
					>
						{message}
					</span>
				)}
				{!!action && <div className="sui-notification__action">{action}</div>}
			</div>
			{isDismissible && (
				<Button
					className="sui-modal__header-actions-close"
					icon="Close"
					appearance="tertiary"
					color="black"
					isSmall={true}
					iconOnly={true}
					onClick={onClose}
					data-testid="notification-dismiss"
				>
					Close notification
				</Button>
			)}
		</div>
	)
}

Notification.displayName = "Notification"

export { Notification }
