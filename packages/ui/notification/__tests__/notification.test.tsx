import React, { Fragment } from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "@wpmudev/sui-button"
import { a11yTest } from "@wpmudev/sui-utils"
import { Notification, NotificationRenderer, NotificationProps } from "../src"
import { useNotifications } from "../src/use-notification"

describe("@wpmudev/sui-notification", () => {
	// Define common props that can be reused in multiple test cases
	const commonProps: NotificationProps = {
		id: "fake-id",
		variation: "success",
		title: "__NOTIFICATION_TITLE__",
		message: "__NOTIFICATION_MESSAGE__",
		isInline: true,
		isDismissible: false,
		size: "lg",
		icon: "InfoAlt",
		action: "__ACTIONS__",
	}

	// Test case: Check if the Notification component renders correctly with a different size
	it("renders correctly with a different size", () => {
		render(<Notification {...commonProps} size="sm" />)

		// Verify that the notification is visible in the document
		expect(screen.getByTestId("notification")).toBeVisible()
	})

	// Test case: Check if the dismiss button works when isDismissible is true
	it("dismiss button works when isDismissible is true", () => {
		render(<Notification {...commonProps} isDismissible={true} />)

		const notification = screen.getByTestId("notification")
		const dismissBtn = screen.getByTestId("notification-dismiss")

		// Verify that the dismiss button is visible
		expect(dismissBtn).toBeVisible()

		// Simulate a click on the dismiss button
		fireEvent.click(dismissBtn)

		// Verify that the notification is no longer visible
		expect(notification).not.toBeVisible()
	})

	// Test case: Check if title, message, and action are visible when isDismissible is true
	it("title, message, and action are visible when isDismissible is true", () => {
		render(<Notification {...commonProps} isDismissible={true} />)

		// Verify that the title, message, and action are visible in the document
		expect(screen.getByText(commonProps.title as string)).toBeVisible()
		expect(screen.getByText(commonProps.message as string)).toBeVisible()
		expect(screen.getByText(commonProps.action as string)).toBeVisible()
	})

	// Test case: Check if size and variation props work
	it("size and variation props work", () => {
		render(<Notification {...commonProps} isDismissible={true} />)
		const notification = screen.getByTestId("notification")

		// Verify that the notification has the expected CSS classes based on size and variation
		expect(notification).toHaveClass("sui-notification--lg")
		expect(notification).toHaveClass("sui-notification--success")
	})

	// Test case: Check if toast notification works when a button is clicked
	it("toast notification works when a button is clicked", () => {
		const buttonTitle = "__TRIGGER_TOAST_NOTIFICATION__"

		// Define a component that triggers the notification when a button is clicked
		const Component = () => {
			const notification = useNotifications()

			return (
				<Fragment>
					<NotificationRenderer />
					<Button
						appearance="secondary"
						color="blue"
						isSmall={true}
						onClick={() => {
							notification.push(commonProps) // Use commonProps for consistency
						}}
					>
						{buttonTitle}
					</Button>
				</Fragment>
			)
		}

		// Render the Component
		render(<Component />)
		const triggerBtn = screen.getByText(buttonTitle)

		// Simulate a click on the trigger button
		fireEvent.click(triggerBtn)

		// Verify that the notification is visible in the document
		expect(screen.getByTestId("notification")).toBeVisible()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Notification {...commonProps} size="sm" />)
	})
})
