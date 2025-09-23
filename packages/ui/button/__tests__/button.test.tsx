import React from "react"
import "@testing-library/jest-dom" // This is still needed to extend Jest's expect
import { within } from "@testing-library/dom"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { render, screen } from "@testing-library/react"
import { Button } from "@wpmudev/sui-button"

describe("@wpmudev/sui-button", () => {
	test("Renders correctly", () => {
		// Render the button component
		render(<Button>Submit</Button>)

		// Get the button element by its test ID and assert its presence
		const buttonEl = screen.getByTestId("button")
		expect(buttonEl).toBeInTheDocument()
	})

	test("Renders icon + text correctly", () => {
		// Render the button component with an icon and text
		render(<Button icon="Close">Button with Icon</Button>)

		// Render text within the button component
		const { getByText } = within(screen.getByTestId("button"))

		// Assert the presence of the text and the icon
		expect(getByText("Button with Icon")).toBeInTheDocument()
		expect(screen.getByTestId("button-icon")).toBeInTheDocument()
	})

	test("Renders icon only", () => {
		// Render the button component with only an icon
		render(
			<Button icon="Close" iconOnly={true}>
				Button label
			</Button>,
		)

		// Assert that the text is not present and the icon is present
		expect(screen.queryByTestId("button-label")).not.toBeInTheDocument()
		expect(screen.getByTestId("button-icon")).toBeInTheDocument()
	})

	test("Type + colorScheme", () => {
		// Render the button component with a specific type and colorScheme
		render(
			<Button type="primary" colorScheme="red">
				ERROR
			</Button>,
		)

		// Assert the presence of the button label and its class
		expect(screen.getByTestId("button-label")).toBeInTheDocument()
		expect(screen.getByTestId("button")).toHaveClass("sui-button--primary-red")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Button>Button</Button>)
	})
})
