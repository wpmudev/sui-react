import React from "react"
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"

import { Selector } from "../src"

describe("@wpmudev/sui-selector", () => {
	// Ensure the component renders correctly.
	it("Renders correctly", () => {
		// Render the Selector component with specific props.
		render(<Selector name="options" label="Option label" value="option-1" />)

		// Get the selector element by its test ID.
		const selector = screen.getByTestId("selector")
		// Check that the selector is in the document.
		expect(selector).toBeInTheDocument()
	})

	// Test the behavior of the 'disabled' prop.
	it("Disabled prop works correctly", () => {
		// Render the Selector component with isDisabled set to true.
		render(
			<Selector
				name="options"
				label="Option label"
				value="option-1"
				isDisabled={true}
			/>,
		)

		// Get the selector element by its test ID.
		const selectorInput = screen.getByTestId("selector")

		// Check that the selector has the expected CSS class when disabled.
		expect(selectorInput).toHaveClass("sui-selector--disabled")
	})

	// Test the behavior of the 'iconOrBrandUrl' prop.
	it("iconOrBrandUrl prop works correctly", () => {
		// Render the Selector component with iconOrBrandUrl set to "Bell".
		render(
			<Selector
				iconOrBrandUrl="Bell"
				name="options"
				label="Option label"
				value="option-1"
				isDisabled={true}
			/>,
		)

		// Get the selector icon element by its test ID.
		const selectorIcon = screen.getByTestId("selector-icon")

		// Check that the selector icon is in the document.
		expect(selectorIcon).toBeInTheDocument()
	})

	// Test the behavior of the 'allowRemove' prop.
	it("allowRemove prop works correctly", () => {
		// Render the Selector component with allowRemove set to true.
		render(
			<Selector
				iconOrBrandUrl="Bell"
				name="options"
				label="Option label"
				value="option-1"
				isDisabled={true}
				allowRemove={true}
			/>,
		)

		// Simulate a mouse hover event on the selector option.
		fireEvent.mouseEnter(screen.getByTestId("selector-option"))

		// Check that the remove element is in the document.
		expect(screen.getByTestId("selector-remove")).toBeInTheDocument()
	})
})
