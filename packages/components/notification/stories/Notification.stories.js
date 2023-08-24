import React, { Fragment } from "react"

// Import required component(s)
import { Notification as SuiNotification, NotificationRenderer } from "../src"

// Import documentation main page
import docs from "./Notification.mdx"
import { Button } from "@wpmudev/sui-button"
import { useNotifications } from "../src/use-notification"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Notification",
	component: SuiNotification,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const demos = [
	{
		title: "Default",
		button: {},
		options: {
			title: "Notification Title",
			desc: "This is notification message.",
			icon: "CheckAlt",
		},
	},
	{
		title: "Informative",
		button: {},
		options: {
			title: "Notification Title",
			desc: "This is notification message.",
			icon: "InfoAlt",
			variation: "info",
		},
	},
	{
		title: "Success",
		button: {},
		options: {
			title: "Notification Title",
			desc: "This is notification message.",
			action: (
				<Button
					className="csb-banner__cta"
					appearance="secondary"
					color="blue"
					isSmall={true}
				>
					Action
				</Button>
			),
			variation: "success",
			icon: "CheckAlt",
		},
	},
	{
		title: "Warning",
		button: {},
		options: {
			title: "Notification Title",
			desc: "This is notification message.",
			action: (
				<Button
					className="csb-banner__cta"
					appearance="secondary"
					color="blue"
					isSmall={true}
				>
					Action
				</Button>
			),
			variation: "warning",
			icon: "CheckAlt",
		},
	},
	{
		title: "Error",
		button: {},
		options: {
			title: "Notification Title",
			desc: "This is notification message.",
			action: (
				<Button
					className="csb-banner__cta"
					appearance="secondary"
					color="blue"
					isSmall={true}
				>
					Action
				</Button>
			),
			variation: "error",
			icon: "InfoAlt",
		},
	},
	{
		title: "Dismissible",
		button: {},
		options: {
			title: "Notification Title",
			desc: "This is notification message.",
			action: (
				<Button
					className="csb-banner__cta"
					appearance="secondary"
					color="blue"
					isSmall={true}
				>
					Action
				</Button>
			),
			variation: "info",
			icon: "InfoAlt",
			isDismissible: true,
		},
	},
	{
		title: "Large + Dismissible",
		button: {},
		options: {
			title: "Notification Title",
			desc: "This is notification message.",
			action: (
				<Button
					className="csb-banner__cta"
					appearance="secondary"
					color="blue"
					isSmall={true}
				>
					Action
				</Button>
			),
			icon: "InfoAlt",
			variation: "info",
			isDismissible: true,
			size: "lg",
		},
	},
]

// Build story
export const Notification = ({
	example,
	title,
	message,
	action,
	isInline = false,
	size,
	isDismissible,
	icon,
	variation,
	...props
}) => {
	const box = {
		margin: "0 0 20px",
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		background: "#fff",
	}

	const options = {
		title,
		message,
		action,
		size,
		isDismissible,
		icon,
		variation,
	}

	const notification = useNotifications()

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<NotificationRenderer />
			<div className="sui-layout__content">
				<div style={box}>
					{!isInline ? (
						<Fragment>
							<h2 style={{ marginTop: 0 }}>Toast Notifications</h2>
							<div>
								<Button
									appearance="secondary"
									color="blue"
									isSmall={true}
									onClick={() => {
										notification.push(options)
									}}
								>
									Open
								</Button>
							</div>
						</Fragment>
					) : (
						<Fragment>
							<h2 style={{ marginTop: 0 }}>Inline Notifications</h2>
							<div>
								<SuiNotification {...options} />
							</div>
						</Fragment>
					)}
				</div>
			</div>
		</div>
	)
}

Notification.args = {
	variation: "",
	title: "Toast title",
	message: "This is a toast message.",
	isInline: false,
	isDismissible: true,
	size: "lg",
	icon: "InfoAlt",
	action: (
		<Button
			className="csb-banner__cta"
			appearance="secondary"
			color="blue"
			isSmall={true}
		>
			Action
		</Button>
	),
}

Notification.argTypes = {
	variation: {
		name: "Variation",
		options: ["", "info", "success", "warning", "error"],
		control: {
			type: "select",
			labels: {
				"": "Variation: Default",
				info: "Variation: Informative",
				success: "Variation: Success",
				warning: "Variation: Warning",
				error: "Variation: Error",
			},
		},
	},
	icon: {
		name: "Icon",
		control: {
			type: "text",
		},
	},
	isInline: {
		name: "Inline Notifications",
		control: {
			type: "boolean",
		},
	},
	isDismissible: {
		name: "Dismissible",
		control: {
			type: "boolean",
		},
	},
	size: {
		name: "Size",
		options: ["", "lg"],
		control: {
			type: "select",
			labels: {
				"": "Default",
				lg: "Large",
			},
		},
	},
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	message: {
		name: "Message",
		control: {
			type: "text",
		},
	},
}
