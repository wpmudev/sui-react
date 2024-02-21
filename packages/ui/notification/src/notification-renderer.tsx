import React from "react"
import { useNotifications } from "./use-notification"
import { Notification } from "./notification"
import { useStyles, useStylesTypes } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

const NotificationRenderer = (props: useStylesTypes) => {
	const { suiInlineClassname } = useStyles(props)
	const { queue } = useNotifications()

	if (queue.length <= 0) {
		return null
	}

	return (
		<div
			className={generateCN(
				"sui-notification__renderer",
				{},
				suiInlineClassname + "sui-wp-overlay",
			)}
		>
			{(queue ?? [])?.map((notification: any, index: number) => (
				<Notification {...notification} isInline={false} key={index} />
			))}
		</div>
	)
}

export { NotificationRenderer }
