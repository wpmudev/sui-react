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
		render(<Component {...props} />)

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

	// multi-select works as expected
	it("multi-select works as expected", () => {
		// Render the component
		render(<Component {...props} isMultiSelect={true} />)

		// Get the "select" element
		const select = screen.getByTestId("select")

		// Expect the type to be multi-select
		expect(select).toHaveClass("sui-select--multiselect")

		// Open the "select" element
		const selectHeader = select.querySelector(".sui-select__control")
		fireEvent.click(selectHeader as Element)

		// Get options elements
		const options = select.querySelectorAll(".sui-select__dropdown--option")
		const selectAll = options[0]
		const firstOption = options[1]
		const secondOption = options[2]

		const firstOptionText = firstOption.textContent
		const secondOptionText = secondOption.textContent

		const selectAllCheckbox = selectAll.querySelector(".sui-checkbox")

		// Clicking on the first option to select it
		fireEvent.click(firstOption)

		// Expect selectAllCheckbox to be indeterminate
		expect(selectAllCheckbox).toHaveClass("sui-checkbox--indeterminate")

		// Clicking on the second option to select it
		fireEvent.click(secondOption)

		// Expect selectAllCheckbox to be selected as all options are selected
		expect(selectAllCheckbox).toHaveClass("sui-checkbox--checked")

		// Two elements will appear for the selected options
		const selectedOptions = select.querySelectorAll(
			".sui-select__selected-options",
		)

		// Expect the same options to be selected
		expect((selectedOptions[0] as Element).textContent).toBe(firstOptionText)
		expect((selectedOptions[1] as Element).textContent).toBe(secondOptionText)

		// Deselect all elements
		fireEvent.click(selectAllCheckbox as Element)

		// Expect no element to be selected
		expect(
			select.querySelectorAll(".sui-select__selected-options"),
		).toHaveLength(0)

		expect(selectAllCheckbox).not.toHaveClass("sui-checkbox--checked")

		expect(firstOption.querySelector(".sui-checkbox")).not.toHaveClass(
			"sui-checkbox--checked",
		)
		expect(secondOption.querySelector(".sui-checkbox")).not.toHaveClass(
			"sui-checkbox--checked",
		)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component {...props} />)
	})
})
