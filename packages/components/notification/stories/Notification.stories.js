import React from "react"

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
export const Notification = ({ example, ...props }) => {
	const box = {
		margin: "0 0 20px",
		padding: "30px",
		border: "1px solid #E6E6E6",
		borderRadius: "4px",
		background: "#fff",
	}

	const notification = useNotifications()

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<NotificationRenderer />
			<div className="sui-layout__content">
				<div style={box}>
					<h2>Toast Notifications</h2>
					{demos.map((demo, index) => (
						<Button
							key={index}
							appearance="secondary"
							color="blue"
							isSmall={true}
							onClick={() => {
								notification.push(demo.options)
							}}
							{...demo.button}
						>
							{demo.title}
						</Button>
					))}
				</div>
				<div style={box}>
					<h2>Inline Notifications</h2>
					{demos.map((demo, index) => (
						<div>
							<h4>{demo.title}</h4>
							<SuiNotification {...demo.options} key={index} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

Notification.args = {
	example: "toast",
	title: "Toast title",
	children: "This is a toast message.",
	action: {
		label: "Action",
		href: "",
		target: "_blank",
		onClick: "",
	},
}

Notification.argTypes = {
	example: {
		name: "Example",
		control: {
			type: "select",
			options: {
				"Example: Toast": "toast",
				"Example: Inline Notice": "inline",
			},
		},
	},
	state: {
		name: "State",
		control: {
			type: "select",
			options: {
				Informative: "",
				Success: "success",
				Warning: "warning",
				Error: "error",
			},
		},
	},
	isInline: {
		table: {
			disable: true,
		},
	},
}
