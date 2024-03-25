import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { SetupBanner } from "../src"

describe("@wpmudev/sui-setup-banner", () => {
	// Test case for rendering the SetupBanner component
	it("renders correctly", () => {
		// Prepare the data for rendering
		const title = "Setup banner title"
		const description = "Setup banner description"

		// Render the SetupBanner component with the provided data
		render(<SetupBanner type="smush" title={title} description={description} />)

		// Check if the expected elements are in the document
		expect(screen.getByTestId("setup-banner")).toBeInTheDocument()
		expect(screen.getByTestId("setup-banner-bg")).toBeInTheDocument()

		// Additional assertion: Check if title and description are rendered properly
		expect(screen.getByText(title)).toBeInTheDocument()
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	// Test case for checking if the 'type' prop works as expected
	it("type prop works fine", () => {
		// Render the SetupBanner component with a specific 'type' prop
		render(
			<SetupBanner
				type="defender"
				description="This is a sample description"
			/>,
		)

		// Check if the SetupBanner icon is in the document
		expect(screen.getByTestId("setup-banner-icon")).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(
			<SetupBanner
				type="defender"
				description="This is a sample description"
			/>,
		)
	})
})
