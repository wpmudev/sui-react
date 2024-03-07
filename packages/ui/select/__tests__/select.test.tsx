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
				icon: "Settings",
				id: "option-1",
				label: "Option 1 is the option.",
				isSelected: false,
			},
			{
				icon: "Settings",
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

	// Dropdown open when clicked
	it("Gets opened when clicked", () => {
		// Render the component
		render(<Component {...props} />)

		// Get the "select" element
		const select = screen.getByTestId("select")

		// Expect the "select" element to be in the document
		expect(select).toBeInTheDocument()

		// Select header element
		const selectHeader = select.querySelector(".sui-accessible-cta")

		// Click on the select element header
		fireEvent.click(selectHeader as Element)

		// Expect the "select"  to be opened
		expect(select).toHaveClass("sui-select--open")
	})

	// multi-select variation test
	it("multi-select works as expected", () => {
		// Render the component
		render(<Component {...props} isMultiSelect={true} />)

		// Get the "select" element
		const select = screen.getByTestId("select")

		// Expect the type to be multi-select
		expect(select).toHaveClass("sui-select--multiselect")

		// Open the "select" element
		const selectHeader = select.querySelector(".sui-accessible-cta")
		fireEvent.click(selectHeader as Element)

		// Get options elements
		const options = select.querySelectorAll(".sui-select__dropdown--option")
		const selectAll = options[0]
		const firstOption = options[1]
		const secondOption = options[2]
		const firstOptionCta = firstOption.querySelector(".sui-accessible-cta")
		const secondOptionCta = secondOption.querySelector(".sui-accessible-cta")

		const firstOptionText = firstOption.textContent
		const secondOptionText = secondOption.textContent

		const selectAllCheckbox = selectAll.querySelector(".sui-checkbox")

		// Clicking on the first option to select it
		fireEvent.click(firstOptionCta as Element)

		// Expect selectAllCheckbox to be indeterminate
		expect(selectAllCheckbox).toHaveClass("sui-checkbox--indeterminate")

		// Clicking on the second option to select it
		fireEvent.click(secondOptionCta as Element)

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

	// Search variation test
	it("search variation works as expected", () => {
		// Render the component
		const { container } = render(<Component {...props} isSearchable={true} />)

		// Get the "select" element
		const select = screen.getByTestId("select")

		// Get the input element in the select
		const input = select.querySelector(".sui-input__input")

		// Simulate typing into the input field
		fireEvent.change(input as Element, {
			target: { value: "Option 1" },
		})

		// Expect only one option to be found
		expect(container.querySelectorAll(".sui-select__dropdown")).toHaveLength(1)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component {...props} />)
	})
})
