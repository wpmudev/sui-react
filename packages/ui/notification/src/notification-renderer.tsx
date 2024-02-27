import React from "react"
import { useNotifications } from "./use-notification"
import { Notification } from "./notification"
import { useStyles } from "@wpmudev/sui-hooks"
import { generateCN, SuiStyleType } from "@wpmudev/sui-utils"

const NotificationRenderer = ({ _style }: SuiStyleType) => {
	const { suiInlineClassname } = useStyles(_style)
	const { queue } = useNotifications()

	if (queue.length <= 0) {
		return null
	}

	return (
		<div
			className={generateCN(
				"sui-notification__renderer",
				{},
				suiInlineClassname + " sui-wp-overlay",
			)}
		>
			{(queue ?? [])?.map((notification: any, index: number) => (
				<Notification {...notification} isInline={false} key={index} />
			))}
		</div>
	)
}

export { NotificationRenderer }
