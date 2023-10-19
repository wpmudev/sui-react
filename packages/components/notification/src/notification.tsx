import React, { useState, useEffect, useId, useCallback } from "react"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"

import { Button } from "@wpmudev/sui-button"
import { NotificationProps } from "./notification.types"

import * as Icons from "@wpmudev/sui-icons"
import { useNotifications } from "./use-notification"

const Notification: React.FC<NotificationProps> = ({
	id,
	title,
	message,
	action,
	icon,
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
		[size as string]: !isEmpty(size ?? ""),
		[variation as string]: ["success", "warning", "error", "info"].includes(
			variation ?? "",
		),
	})

	// Get SVG Icon
	/*eslint import/namespace: ['error', { allowComputed: true }]*/
	// @ts-ignore
	// WE NEED TO WRITE TYPE FOR SUI-ICONS PACKAGE
	const Icon = Icons?.[icon]

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
					icon="close"
					appearance="tertiary"
					color="black"
					isSmall={true}
					iconOnly={true}
					onClick={onClose}
					data-testid="notification-dismiss"
				/>
			)}
		</div>
	)
}

Notification.displayName = "Notification"

export { Notification }
