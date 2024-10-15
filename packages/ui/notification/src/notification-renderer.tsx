import React from "react"
import { useNotifications } from "./use-notification"
import { Notification } from "./notification"
import { useStyles } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"
import { NotificationRendererProps } from "./notification.types"

const NotificationRenderer: React.FC<NotificationRendererProps> = ({
	className = "",
	_style,
}) => {
	const { suiInlineClassname } = useStyles(_style, className)
	const { queue } = useNotifications()

	if (queue.length <= 0) {
		return null
	}

	return (
		<div
			className={generateCN(
				"sui-notification__renderer",
				{},
				"sui-wp-overlay " + suiInlineClassname,
			)}
		>
			{(queue ?? [])?.map((notification: any, index: number) => (
				<Notification {...notification} isInline={false} key={index} />
			))}
		</div>
	)
}

export { NotificationRenderer }
