import React, { useState } from "react"

import "@testing-library/jest-dom"
import { screen, render, fireEvent, prettyDOM } from "@testing-library/react"

import { Checkbox, CheckboxGroup } from "../src"
import { a11yTest } from "@wpmudev/sui-utils"

describe("@wpmudev/sui-checkbox", () => {
	// Test case for rendering Checkbox component correctly
	it("Render correctly", () => {
		// Render the Checkbox component
		render(<Checkbox />)

		// Ensure that the Checkbox component is in the document
		expect(screen.getByTestId("checkbox")).toBeInTheDocument()
	})

	// Test case for testing the isDisabled prop
	it("disabled state", () => {
		const Component = () => {
			const [checked, setChecked] = useState<boolean>(false)

			return (
				<Checkbox
					isDisabled={true}
					isChecked={checked}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setChecked(e.target.checked)
					}}
				/>
			)
		}

		// Render the Checkbox component with isDisabled set to true
		render(<Component />)

		// Get the Checkbox element
		const input = screen.getByTestId("checkbox-input")

		fireEvent.click(input)
		expect(input).not.toHaveAttribute("checked")
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

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Checkbox />)
	})

	// Passing common props from group
	// it("Passes props from group to checkboxes", async () => {
	// 	// Render the checkbox group component
	// 	const { container } = render(
	// 		<CheckboxGroup
	// 			title="Group 1 Label"
	// 			commonCheckboxProps={{ name: "ggggggg" }}
	// 		>
	// 			<Checkbox id="checkbox-1" label="Checkbox Group Item 1" />
	// 			<Checkbox id="checkbox-2" label="Checkbox Group Item 2" />
	// 		</CheckboxGroup>,
	// 	)

	// 	// Get the first Checkbox element
	// 	const checkboxFirstEl = container.querySelector("#checkbox")

	// 	console.log(prettyDOM(container))

	// 	expect(checkboxFirstEl).toBeInTheDocument()
	// })
})
