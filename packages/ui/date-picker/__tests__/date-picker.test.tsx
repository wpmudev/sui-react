import React from "react"
import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react"
import { DatePicker, DatePickerProps } from "../src"
import { a11yTest } from "@wpmudev/sui-utils"

describe("@wpmudev/sui-date-picker", () => {
	const Component = (propsList: DatePickerProps) => {
		return <DatePicker {...propsList} />
	}

	// Check if the component renders correctly
	it("renders correctly", () => {
		// Render the component
		render(<Component />)
		// Assert that the date picker element is in the document
		expect(screen.getByTestId("date-picker")).toBeInTheDocument()
	})

	// Check if isDisabled prop works
	it("isDisabled prop works correctly", () => {
		// Render the component
		render(<Component isDisabled={true} />)

		// Find the input container
		const inputContainer = screen.getByTestId("date-picker-input-container")
		expect(inputContainer).toHaveClass("sui-date-picker__input--disabled")
	})

	// Check if the range component works correctly
	it("checks if range component works correctly", () => {
		// Render the component with the "range" prop
		const { container } = render(<Component type="range" />)

		// Find all month blocks within the component
		const monthBlocks = container.querySelectorAll(
			".sui-date-picker__calendar-month",
		)

		// Assert that there are exactly two month blocks
		expect(monthBlocks).toHaveLength(2)
	})

	// Check if the popover opens when clicking the field
	it("popover opens when clicking the field", () => {
		// Render the component
		const { container } = render(<Component />)

		// Find the popover element
		const popover = screen.queryByTestId("date-picker-popover")

		// Find all month blocks within the component
		const monthBlocks = container.querySelectorAll(
			".sui-date-picker__calendar-month",
		)

		// Assert that the popover is initially closed
		expect(popover).not.toHaveClass("sui-date-picker__popover--open")

		// Assert that there is only one month block
		expect(monthBlocks).toHaveLength(1)

		// Find the input container
		const inputContainer = screen.getByTestId("date-picker-input-container")

		// Simulate a click on the input container
		fireEvent.click(inputContainer)

		// Assert that the popover is now open
		expect(popover).toHaveClass("sui-date-picker__popover--open")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
