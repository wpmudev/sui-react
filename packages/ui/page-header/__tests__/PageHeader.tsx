import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { PageHeader } from "../src"

describe("@wpmudev/sui-page-header", () => {
	// Renders correctly
	test("Renders correctly", () => {
		// Render the Page Header component with a sample title
		render(<PageHeader title="Example Page Title" />)

		// Find the rendered Link element by its text content
		const pageHeaderElement = screen.getByText("Example Page Title")

		// Check if the Page Header element has the correct text content
		expect(pageHeaderElement).toHaveTextContent("Example Page Title")
	})
})
