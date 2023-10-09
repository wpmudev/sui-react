import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import { FieldList, FieldListItem } from "../src"

describe("@wpmudev/sui-field-list", () => {
	// Common props for the FieldList component
	const props = {
		label: "__TITLE__",
		helper: "__HELPER_TEXT__",
	}

	describe("FieldList component", () => {
		it("renders correctly", () => {
			render(
				<FieldList {...props} onToggle={jest.fn()}>
					<FieldListItem id="field-1">Field 1</FieldListItem>
				</FieldList>,
			)

			// Verify that the FieldList component is rendered
			expect(screen.getByTestId("field-list")).toBeInTheDocument()
		})

		it("renders title and helper text", async () => {
			render(<FieldList {...props} onToggle={jest.fn()} />)

			// Verify that the label and helper text are visible
			expect(screen.getByText(props.label)).toBeVisible()
			expect(screen.getByText(props.helper)).toBeVisible()
		})

		it("renders field items correctly", async () => {
			render(
				<FieldList {...props} onToggle={jest.fn()}>
					<FieldListItem id="field-1">Field 1</FieldListItem>
					<FieldListItem id="field-2">Field 2</FieldListItem>
					<FieldListItem id="field-3" isDisabled={true}>
						Field 3
					</FieldListItem>
				</FieldList>,
			)

			const fieldItems = await screen.findAllByTestId("field-list-item")

			// Verify that all field items are rendered
			expect(fieldItems).toHaveLength(3)

			// Verify that the third field item has the "disabled" class
			expect(fieldItems[2]).toHaveClass("sui-field-list__item--disabled")
		})
	})
})
