import React, { useState, useEffect, useId, useCallback } from "react"
import { generateCN, isEmpty } from "@wpmudev/react-utils"

import { Button } from "@wpmudev/react-button"
import { NotificationProps } from "./notification.types"

import * as Icons from "@wpmudev/sui-icons"
import { useNotifications } from "./use-notification"

const Notification: React.FC<NotificationProps> = ({
	id,
	title,
	desc,
	action,
	icon,
	iconState,
	isInline = true,
	isDismissible,
	size,
	variation,
	timeout = 5000,
}) => {
	const [isVisible, setIsVisible] = useState(true)
	const notifications = useNotifications()

	// Create notification ID
	const uniqueId = useId()
	const notificationId = `sui-notification-${uniqueId}`

	useEffect(() => {
		if (!isInline && !isDismissible) {
			setTimeout(() => {
				notifications.remove(id)
			}, timeout ?? 5000)
		}
	}, [id, isInline, notifications, timeout])

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

	// do not render
	if (!isVisible) return null

	// generate classnames
	const classNames = generateCN("sui-notification", {
		inline: isInline,
		[size]: !isEmpty(size ?? ""),
		[variation]: ["success", "warning", "error", "info"].includes(
			variation ?? "",
		),
	})

	// Get SVG Icon
	const Icon = Icons?.[icon]

	return (
		<div
			id={notificationId}
			className={classNames}
			role="alert"
			aria-labelledby={`${notificationId}-title`}
			aria-describedby={`${notificationId}-desc`}
		>
			{!!Icon && (
				<Icon size="md" color={iconState} className="sui-notification__icon" />
			)}
			<div className="sui-notification__content">
				{!!title && (
					<span
						className="sui-notification__title"
						id={`${notificationId}-title`}
					>
						{title}
					</span>
				)}
				{!!desc && (
					<span
						className="sui-notification__message"
						id={`${notificationId}-desc`}
					>
						{desc}
					</span>
				)}
				{!!action && <div className="sui-notification__action">{action}</div>}
			</div>
			{isDismissible && (
				<Button
					className="sui-modal__header-actions-close"
					icon="close"
					isSmall={true}
					iconOnly={true}
					onClick={onClose}
				/>
			)}
		</div>
	)
}

Notification.displayName = "Notification"

export { Notification }
