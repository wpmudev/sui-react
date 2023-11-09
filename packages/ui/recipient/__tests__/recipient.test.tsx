import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"

import { Recipient } from "../src"

describe("@wpmudev/sui-recipient", () => {
	// Define the props object for the Recipient component
	const props = {
		appearance: "primary",
		userName: "Recipient Name",
		userEmail: "example@email.com",
		status: "",
		isInvited: false,
	}

	// Common setup for rendering the Recipient component
	const renderRecipient = () => {
		render(<Recipient {...props} data-testid="recipients" />)
	}

	// Test case: Ensure that the Recipient component renders correctly
	it("renders correctly", () => {
		renderRecipient()
		// Check if the component with the specified data-testid exists in the DOM
		expect(screen.getByTestId("recipients")).toBeInTheDocument()
	})

	// Test case: Check if the avatar element renders correctly
	it("avatar renders correctly", () => {
		renderRecipient()
		// Check if the avatar element with the specified data-testid exists in the DOM
		expect(screen.getByTestId("avatar")).toBeInTheDocument()
	})

	// Test case: Verify if the props are rendered correctly
	it("props render correctly", () => {
		renderRecipient()
		// Check if the user name and email text are visible on the screen
		expect(screen.getByText(props.userName)).toBeVisible()
		expect(screen.getByText(props.userEmail)).toBeVisible()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Recipient {...props} data-testid="recipients" />)
	})
})
