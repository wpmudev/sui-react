import React from "react"
import "@testing-library/jest-dom"

import { screen, render } from "@testing-library/react"

import { Input } from "../src"

describe("@wpmudev/sui-input", () => {
	// Test case for rendering Input component correctly
	it("Render correctly", () => {
		// Render the Input component with a unique id
		render(<Input id="first-name" />)
		// Ensure that the Input component is in the document
		expect(screen.getByTestId("input")).toBeInTheDocument()
	})

	// Test case for testing the isDisabled prop
	it("isDisabled prop works fine", () => {
		// Render the Input component with isDisabled set to true
		render(<Input id="disabled-check" isDisabled={true} />)
		// Check if the Input has the correct CSS class when disabled
		expect(screen.getByTestId("input")).toHaveClass("sui-input--disabled")
	})

	// Test case for testing the isError prop
	it("isError prop works fine", () => {
		// Render the Input component with isError set to true
		render(<Input id="error-state-check" isError={true} />)
		// Check if the Input has the correct CSS class when in error state
		expect(screen.getByTestId("input")).toHaveClass("sui-input--error")
	})

	// Test case for testing the allowClear prop
	it("allowClear prop works fine", () => {
		// Render the Input component with allowClear set to true and a value
		render(
			<Input id="allow-clear-check" allowClear={true} value="Hello World" />,
		)

		// Check if the "Clear" text is present in the document
		expect(screen.getByText("Clear")).toBeInTheDocument()
	})

	// Test case for testing the icon and iconPosition props
	it("icon + iconPosition works fine", () => {
		// Render the Input component with an icon at the start
		const { rerender } = render(
			<Input id="icon" icon="bell" iconPosition="start" />,
		)
		// Check if the start icon is present in the document
		expect(screen.getByTestId("input-icon-start")).toBeInTheDocument()
		// Rerender the Input with an icon at the end
		rerender(<Input id="icon" icon="bell" iconPosition="end" />)
		// Check if the end icon is present in the document
		expect(screen.getByTestId("input-icon-end")).toBeInTheDocument()
	})
})
