import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { Tooltip } from "../src"

describe("@wpmudev/sui-tooltip", () => {
	const label = "Tooltip Label"
	const description = "Tooltip Description"

	// Test case to check if the Tooltip renders correctly
	it("Renders correctly", () => {
		// Render the Tooltip component with the provided label and description
		render(<Tooltip label={label}>{description}</Tooltip>)

		// Use assertions to check if the label and description are present in the rendered content
		expect(screen.getByText(label)).toBeInTheDocument()
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	// Test case to check if the position prop works as expected
	it("Position prop works correctly", () => {
		// Render the Tooltip component with the provided label, description, and position="bottom"
		render(
			<Tooltip label={label} position="bottom">
				{description}
			</Tooltip>,
		)

		// Get the tooltip element by its data-testid attribute
		const tooltipEl = screen.getByTestId("tooltip")

		// Use assertions to check if the tooltip element has the expected CSS class
		expect(tooltipEl).toHaveClass("sui-tooltip--bottom")

		// Use an assertion to check if the description is present in the rendered content
		expect(screen.getByText(description)).toBeInTheDocument()
	})
})
