import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Popover } from "../src"

describe("@wpmudev/sui-popover", () => {
	const label = "Popover Title"
	const description = "Popover Content"

	// Test case to check if the Popover renders correctly
	it("Renders correctly", () => {
		// Render the Popover component with the provided label and description
		render(<Popover header={label}>{description}</Popover>)

		// Use assertions to check if the label and description are present in the rendered content
		expect(screen.getByText(label)).toBeInTheDocument()
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	// Test case to check if the Popover renders correctly
	it("image renders properly", () => {
		const imgUrl = "https://placehold.co/600x400/EEE/31343C"

		// Render the Popover component with the provided label and description
		const { container } = render(
			<Popover header="Popup is opened by default" image={imgUrl}>
				{description}
			</Popover>,
		)

		// Find all month blocks within the component
		const imgEL = container.querySelector(".sui-popover__popup-image")
		expect(imgEL).toBeInTheDocument()
	})

	// Test case to check if the position prop works as expected
	it("Position prop works correctly", () => {
		// Render the Popover component with the provided label, description, and position="bottom"
		render(
			<Popover header={label} position="bottom" trigger="Test Button">
				{description}
			</Popover>,
		)

		// Get the popover element by its data-testid attribute
		const popoverEl = screen.getByTestId("popover")

		// Use assertions to check if the popover element has the expected CSS class
		expect(popoverEl).toHaveClass("sui-popover--bottom")

		// Use an assertion to check if the description is present in the rendered content
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(
			<Popover label={label} trigger="Test Button" position="top">
				{description}
			</Popover>,
		)
	})
})
