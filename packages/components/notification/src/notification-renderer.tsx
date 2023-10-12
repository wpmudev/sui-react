import React from "react"
import { useNotifications } from "./use-notification"
import { NotificationProps } from "./notification.types"
import { Notification } from "./notification"

const NotificationRenderer = () => {
	const { queue } = useNotifications()

	if (queue.length <= 0) {
		return null
	}

	return (
		<div className="sui-notification__renderer">
			{(queue ?? [])?.map((notification: any, index: number) => (
				<Notification {...notification} isInline={false} key={index} />
			))}
		</div>
	)
}

export { NotificationRenderer }
