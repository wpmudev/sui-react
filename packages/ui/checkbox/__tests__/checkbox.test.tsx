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
	it("Disabled state", () => {
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
	it("Passes a11y test", async () => {
		await a11yTest(<Checkbox />)
	})

	// Passing common props from CheckboxGroup to children checkboxes
	it("Common props in a group", async () => {
		// Render the checkbox group component
		const { container } = render(
			<CheckboxGroup
				title="Group 1 Label"
				commonCheckboxProps={{ name: "group-checkbox" }}
			>
				<Checkbox label="Checkbox Group Item 1" />
				<Checkbox label="Checkbox Group Item 2" />
			</CheckboxGroup>,
		)

		// Get the first Checkbox element
		const checkboxes = container.querySelectorAll(".sui-checkbox > input")

		// Expect to have two checkboxes
		expect(checkboxes).toHaveLength(3)

		// Expect all checkboxes to have the attribute "name" with the value "group-checkbox"
		checkboxes.forEach((checkbox) =>
			expect(checkbox).toHaveAttribute("name", "group-checkbox"),
		)
	})

	// Passing common props from ChecboxGroups
	it("Common props in a multigroup", async () => {
		// Render the checkbox group component
		const { container } = render(
			<CheckBoxGroups
				commonCheckboxProps={{
					// It will be passed to all checkbox items
					name: "groups-checkbox",
				}}
			>
				<CheckboxGroup title="Nested Group 1" hasSubItems={true}>
					<Checkbox label="Nested item 1" />
					<Checkbox label="Nested item 2" />
				</CheckboxGroup>
				<CheckboxGroup title="Nested Group 2" hasSubItems={true}>
					<Checkbox label="Nested item 1" />
					<Checkbox label="Nested item 2" />
				</CheckboxGroup>
			</CheckBoxGroups>,
		)

		const checkboxes = container.querySelectorAll(".sui-checkbox > input")

		// Expect to have six checkboxes
		expect(checkboxes).toHaveLength(6)

		// expect all checkboxes to have name "groups-checkbox"
		checkboxes.forEach((checkbox) =>
			expect(checkbox).toHaveAttribute("name", "groups-checkbox"),
		)
	})

	// Changing parent will change children
	it("Group check change", async () => {
		// Rendering the groups
		const { container } = render(
			<CheckBoxGroups
				commonCheckboxProps={{
					// It will be passed to all checkbox items
					name: "groups-checkbox",
				}}
			>
				<CheckboxGroup title="Nested Group 1" hasSubItems={true}>
					<Checkbox label="Nested item 1" />
					<Checkbox label="Nested item 2" />
				</CheckboxGroup>
			</CheckBoxGroups>,
		)

		// Getting the top most parent
		const checkboxes = container.querySelectorAll(".sui-checkbox")

		// The parent & children checkboxes
		const parentCheckbox = checkboxes[0]
		const firstChildCheckbox = checkboxes[1]
		const secondChildCheckbox = checkboxes[2]

		// Click on the parent checkbox to make it checked
		fireEvent.click(parentCheckbox)

		// Expect all elements to be checked
		checkboxes.forEach((checkbox) =>
			expect(checkbox).toHaveClass("sui-checkbox--checked"),
		)

		// Clicking on the checkbox again to make it unchecked
		fireEvent.click(parentCheckbox)

		// Expect all elements to be unchecked
		checkboxes.forEach((checkbox) =>
			expect(checkbox).not.toHaveClass("sui-checkbox--checked"),
		)

		// Checking all children will make parent checked
		fireEvent.click(firstChildCheckbox)
		fireEvent.click(secondChildCheckbox)

		// Expect the parent to be checked
		expect(parentCheckbox).toHaveClass("sui-checkbox--checked")
	})

	// Parent indeterminate state
	it("Indeterminate state", async () => {
		// Rendering the groups
		const { container } = render(
			<CheckBoxGroups
				commonCheckboxProps={{
					// It will be passed to all checkbox items
					name: "groups-checkbox",
				}}
			>
				<CheckboxGroup title="Nested Group 1" hasSubItems={true}>
					<Checkbox label="Nested item 1" />
					<Checkbox label="Nested item 2" />
				</CheckboxGroup>
			</CheckBoxGroups>,
		)

		// Get all checkboxes
		const checkboxes = container.querySelectorAll(".sui-checkbox")

		// Parent & child elements
		const parentElement = checkboxes[0]
		const childElement = checkboxes[1]

		// Click on the child element to make it checked
		fireEvent.click(childElement)

		// Expect the child to be checked
		expect(childElement).toHaveClass("sui-checkbox--checked")

		// Expect the parent to be indeterminate
		expect(parentElement).toHaveClass("sui-checkbox--indeterminate")

		// Clicking on the parent ( while in indeterminate state ) will make it checked with all children
		fireEvent.click(parentElement)

		// Expect all the children to be checked
		checkboxes.forEach((checkbox) =>
			expect(checkbox).toHaveClass("sui-checkbox--checked"),
		)
	})

	// Changing parent will change children
	it("Checkboxes with custom ids works as expected", async () => {
		// Rendering the groups
		const { container } = render(
			<CheckBoxGroups
				commonCheckboxProps={{
					// It will be passed to all checkbox items
					name: "groups-checkbox",
				}}
			>
				<CheckboxGroup title="Nested Group 1" hasSubItems={true}>
					<Checkbox id="1" label="Nested item 1" />
					<Checkbox id="2" label="Nested item 2" />
				</CheckboxGroup>
			</CheckBoxGroups>,
		)

		// Getting the top most parent
		const checkboxes = container.querySelectorAll(".sui-checkbox")

		// The parent & children checkboxes
		const parentCheckbox = checkboxes[0]

		// Click on the parent checkbox to make it checked
		fireEvent.click(parentCheckbox)

		// Expect all elements to be checked
		checkboxes.forEach((checkbox) =>
			expect(checkbox).toHaveClass("sui-checkbox--checked"),
		)
	})
})
