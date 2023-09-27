import React from "react"

import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import { Checkbox } from "../src"

describe("@wpmudev/sui-checkbox", () => {
	// Test case for rendering Checkbox component correctly
	it("Render correctly", () => {
		// Render the Checkbox component
		render(<Checkbox />)

		// Ensure that the Checkbox component is in the document
		expect(screen.getByTestId("checkbox")).toBeInTheDocument()
	})

	// Test case for testing the isDisabled prop
	it("isDisabled works fine", () => {
		// Render the Checkbox component with isDisabled set to true
		render(<Checkbox isDisabled={true} />)

		// Get the Checkbox element
		const checkboxEl = screen.getByTestId("checkbox")

		// Check if the Checkbox has the correct CSS class when disabled
		expect(checkboxEl).toHaveClass("sui-checkbox--disabled")
	})

	// Test case for testing the isIndeterminate prop
	it("isIndeterminate works fine", () => {
		// Render the Checkbox component with isIndeterminate set to true
		render(<Checkbox isIndeterminate={true} />)

		// Get the Checkbox element
		const checkboxEl = screen.getByTestId("checkbox")

		// Check if the Checkbox has the correct CSS class when indeterminate
		expect(checkboxEl).toHaveClass("sui-checkbox--indeterminate")
	})

	// Test case for testing the checked prop
	it("isChecked works fine", () => {
		// Render the Checkbox component with checked set to true
		render(<Checkbox isChecked={true} />)

		// Get the Checkbox element
		const checkboxEl = screen.getByTestId("checkbox")

		// Check if the Checkbox has the correct CSS class when checked
		expect(checkboxEl).toHaveClass("sui-checkbox--checked")
	})
})
