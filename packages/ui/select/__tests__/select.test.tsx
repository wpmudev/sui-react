import React from "react"

import "@testing-library/jest-dom"
import { screen, render, fireEvent, prettyDOM } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Select, SelectBaseProps } from "../src"

describe("@wpmudev/sui-select", () => {
	const props = {
		id: "standard-select",
		label: "Select",
		options: [
			{
				icon: "settings",
				id: "option-1",
				label: "Option 1 is the option.",
				isSelected: false,
			},
			{
				icon: "settings",
				id: "option-2",
				label: "Option 2",
				isSelected: false,
			},
		],
		isError: false,
		isDisabled: false,
		isSmall: false,
	}

	const Component = (propsList: SelectBaseProps) => {
		return <Select {...propsList} />
	}

	// Check if the component renders correctly
	it("renders correctly", () => {
		// Render the component
		render(<Component {...props} />)

		// Expect the select element to be in the document
		expect(screen.getByTestId("select")).toBeInTheDocument()
	})

	// The "select" opens when clicked
	it("Gets open when it's clicked", () => {
		// Render the component
		const { container } = render(<Component {...props} />)

		// Get the "select" element
		const select = screen.getByTestId("select")

		// Expect the "select" element to be in the document
		expect(select).toBeInTheDocument()

		// Select header element
		const selectHeader = select.querySelector(".sui-select__control")

		// Click on the select element header
		fireEvent.click(selectHeader as Element)

		// Expect the "select"  to be opened
		expect(select).toHaveClass("sui-select--open")
	})

	// // multi-select works as expected
	// it("multi-select works as expected", () => {
	// 	// Render the component
	// 	render(<Component {...props} isMultiSelect={true} />)

	// 	// Get the "select" element
	// 	const select = screen.getByTestId("select")

	// 	// Expect that the select element has the "multi-select" type
	// 	expect(select).toHaveClass("sui-select--multiselect")

	// 	// Select multiple options
	// 	fireEvent.click(select)
	// })

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component {...props} />)
	})
})
