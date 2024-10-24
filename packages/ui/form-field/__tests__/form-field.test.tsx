import React from "react"
import "@testing-library/jest-dom"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { render, screen } from "@testing-library/react"
import { FormField } from "../src"

describe("@wpmudev/sui-form-field", () => {
	// Test case for rendering FormField without errors
	it("Render correctly", () => {
		// Render the FormField component with a unique id and label
		render(<FormField id="field-1" label="Test label" />)

		// Ensure that the FormField component is in the document
		expect(screen.getByTestId("form-field")).toBeInTheDocument()
	})

	// Test case for rendering FormField with label and helper text
	it("Renders label and helpers", () => {
		// Define label and helper text
		const label = "Test label"
		const helper = "This is helper text"

		// Render the FormField component with label and helper
		render(<FormField id="test" label={label} helper={helper} />)

		// Check if label and helper text are present in the document
		expect(screen.getByText(label)).toBeInTheDocument()
		expect(screen.getByText(helper)).toBeInTheDocument()
	})

	// Test case for rendering FormField with an error message
	it("Renders error message", () => {
		// Define an error message
		const errorMsg = "Something went wrong"

		// Render the FormField component with an error message
		render(<FormField id="test" label="Test error message" error={errorMsg} />)

		// Check if the error message is present in the document
		expect(screen.getByText(errorMsg)).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<FormField id="field-1" label="Test label" />)
	})
})
