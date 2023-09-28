import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { Tag } from "../src"

describe("@wpmudev/sui-tag", () => {
	// Ensure the component renders correctly.
	it("Render correctly", () => {
		// Render the Tag component with the text "Pro".
		render(<Tag>Pro</Tag>)

		// Get the tag element by its test ID.
		const tag = screen.getByTestId("tag")

		// Check that the tag is in the document.
		expect(tag).toBeInTheDocument()
	})

	// Test the behavior of the 'design' and 'color' props.
	it("Design and color props work fine", () => {
		// Render the Tag component with design "outlined" and color "blue".
		render(
			<Tag design="outlined" color="blue">
				Pro
			</Tag>,
		)

		// Get the tag element by its test ID.
		const tag = screen.getByTestId("tag")

		// Check that the tag has the expected CSS classes for design and color.
		expect(tag).toHaveClass("sui-tag--outlined-blue")
	})

	// Test the behavior of the 'isDisabled' prop.
	it("isDisabled prop works fine", () => {
		// Render the Tag component with isDisabled set to true.
		render(<Tag isDisabled={true}>Pro</Tag>)

		// Get the tag element by its test ID.
		const tag = screen.getByTestId("tag")

		// Check that the tag has the expected CSS class for disabled state.
		expect(tag).toHaveClass("sui-tag--disabled")
	})
})
