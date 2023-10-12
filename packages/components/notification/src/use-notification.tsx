import { useSyncExternalStore } from "react"
import { NotificationProps } from "./notification.types"

// counter to generate unique IDs for notifications
let id: number = 1
// array to store the notifications
let notifications: Record<string, any>[] = []
// array to store the notification store change listeners
let listeners: Function[] = []

// notification store object
const notificationStore = {
	// function to push a new notification to the store
	push: (options: NotificationProps) => {
		notifications = [...notifications, { ...options, id: id++ }]
		emitChange()
	},
	// function to remove a notification from the store based on its ID
	remove: (idStr: string | undefined) => {
		notifications = notifications.filter(
			(alert: any) => alert?.id !== (idStr ?? ""),
		)
		emitChange()
	},
	// function to subscribe a listener to the notification store changes
	subscribe: (listener: any) => {
		listeners = [...listeners, listener]
		return () => {
			listeners = listeners.filter((l: any) => l !== listener)
		}
	},
	// function to get the current snapshot of notifications
	getSnapshot: () => notifications,
}

// function to emit change to all registered listeners
const emitChange = () => {
	for (const listener of listeners) {
		listener()
	}
}

// hook to use the notification store
const useNotifications = () => {
	const queue = useSyncExternalStore(
		notificationStore.subscribe,
		notificationStore.getSnapshot,
	)

	return {
		push: notificationStore.push,
		remove: notificationStore.remove,
		queue,
	}
}

// export the custom hook and the notificationStore
export { useNotifications, notificationStore }
