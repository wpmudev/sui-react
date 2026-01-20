import React, { useState, useEffect, useId, useCallback } from "react"
import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"

import { Button } from "@wpmudev/sui-button"
import { NotificationProps } from "./notification.types"
import { IconProps } from "@wpmudev/sui-icon"
import Icons from "@wpmudev/sui-icons"
import { useNotifications } from "./use-notification"
import { useStyles } from "@wpmudev/sui-hooks"

const Notification: React.FC<NotificationProps> = ({
	id,
	title,
	message = "message",
	action,
	icon = "Info",
	className = "",
	isInline = true,
	isFluid = false,
	isDismissible = false,
	size,
	variation,
	timeout = 5000,
	_htmlProps,
	_style,
}) => {
	const [isVisible, setIsVisible] = useState(true)
	const notifications = useNotifications()

	// Create notification ID
	const uniqueId = useId()
	const notificationId = id ? id : `sui-notification-${uniqueId}`

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

	const { suiInlineClassname } = useStyles(_style, className)

	// do not render
	if (!isVisible) return null

	// Generate classnames
	const classNames = generateCN(
		"sui-notification",
		{
			inline: isInline,
			fluid: isFluid,
			[size as string]: !isEmpty(size ?? ""),
			[variation as string]: ["success", "warning", "error", "info"].includes(
				variation ?? "",
			),
		},
		suiInlineClassname,
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
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{!!Icon && (
				<Icon
					id={`${notificationId}-icon`}
					size="md"
					className="sui-notification__icon"
				/>
			)}
			<div
				id={`${notificationId}-content`}
				className="sui-notification__content"
			>
				{!!title && (
					<span
						id={`${notificationId}-title`}
						className="sui-notification__title"
					>
						{title}
					</span>
				)}
				{!!message && (
					<span
						id={`${notificationId}-message`}
						className="sui-notification__message"
					>
						{message}
					</span>
				)}
				{!!action && (
					<div
						id={`${notificationId}-action`}
						className="sui-notification__action"
					>
						{action}
					</div>
				)}
			</div>
			{isDismissible && (
				<Button
					id={`${notificationId}-dismiss`}
					className="sui-modal__header-actions-close"
					icon="Close"
					type="tertiary"
					colorScheme="black"
					isSmall={true}
					iconOnly={true}
					onClick={onClose}
					_htmlProps={{
						"data-testid": "notification-dismiss",
					}}
				>
					Close notification
				</Button>
			)}
		</div>
	)
}

Notification.displayName = "Notification"

export { Notification }
