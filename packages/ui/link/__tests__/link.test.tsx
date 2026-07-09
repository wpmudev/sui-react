import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { Link } from "@wpmudev/sui-link"

describe("@wpmudev/sui-link", () => {
	// Renders correctly
	test("Renders correctly", () => {
		// Render the Link component with a sample link and title
		render(<Link href="https://example.com">Example Link Title</Link>)

		// Find the rendered Link element by its text content
		const linkElement = screen.getByText("Example Link Title")

		// Check if the Link element has the correct text content
		expect(linkElement).toHaveTextContent("Example Link Title")
	})

	// Test case: Renders as span
	test("Renders as span", () => {
		// Render the Link component as a span with a sample link and title
		render(
			<Link as="span" href="https://example.com">
				Example Link Title
			</Link>,
		)

		// Find the rendered Link element by its text content and check if it's wrapped in a span
		const linkElement = screen.getByText("Example Link Title")
		const closestSpan = linkElement.closest("span")

		// Check if the Link element is wrapped in a span
		expect(closestSpan).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Link href="https://example.com">Example Link Title</Link>)
	})
})
