import React, { useState } from "react"

import "@testing-library/jest-dom"
import { screen, render, fireEvent, prettyDOM } from "@testing-library/react"

import { Checkbox, CheckboxGroup, CheckBoxGroups } from "../src"
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

	// Passing common props from CheckboxGroup to children checkboxes
	it("Passes common props from group", async () => {
		// Render the checkbox group component
		const { container } = render(
			<CheckboxGroup
				title="Group 1 Label"
				commonCheckboxProps={{ name: "group-checkbox" }}
			>
				<Checkbox id="checkbox-1" label="Checkbox Group Item 1" />
				<Checkbox id="checkbox-2" label="Checkbox Group Item 2" />
			</CheckboxGroup>,
		)

		// Get the first Checkbox element
		const checkboxFirstEl = container.querySelector("#checkbox-1")

		// Get the second Checkbox element
		const checkboxSecondEl = container.querySelector("#checkbox-2")

		// Check if the Checkboxs has the "name" prop
		expect(checkboxFirstEl).toHaveAttribute("name", "group-checkbox")
		expect(checkboxSecondEl).toHaveAttribute("name", "group-checkbox")
	})

	// Passing common props from ChecboxGroups
	it("Passes common props in multigroup structure", async () => {
		// Render the checkbox group component
		const { container } = render(
			<CheckBoxGroups
				commonCheckboxProps={{
					// it will be passed to all checkbox items
					name: "groups-checkbox",
				}}
			>
				<CheckboxGroup title="Nested Group 1" hasSubItems={true}>
					<Checkbox id="checkbox-1" label="Nested item 1" />
					<Checkbox id="checkbox-2" label="Nested item 2" />
				</CheckboxGroup>
				<CheckboxGroup title="Nested Group 2" hasSubItems={true}>
					<Checkbox id="checkbox-3" label="Nested item 1" />
					<Checkbox id="checkbox-4" label="Nested item 2" />
				</CheckboxGroup>
			</CheckBoxGroups>,
		)

		// Get the first Checkbox element
		const checkboxFirstEl = container.querySelector("#checkbox-1")

		// Get the second Checkbox element
		const checkboxSecondEl = container.querySelector("#checkbox-2")

		// Get the third Checkbox element
		const checkboxThirdEl = container.querySelector("#checkbox-3")

		// Get the fourth Checkbox element
		const checkboxFourthEl = container.querySelector("#checkbox-4")

		// Check if the Checkboxes has the "name" prop
		expect(checkboxFirstEl).toHaveAttribute("name", "groups-checkbox")
		expect(checkboxSecondEl).toHaveAttribute("name", "groups-checkbox")
		expect(checkboxThirdEl).toHaveAttribute("name", "groups-checkbox")
		expect(checkboxFourthEl).toHaveAttribute("name", "groups-checkbox")
	})
})
