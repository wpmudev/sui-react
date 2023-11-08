import React from "react"
import "@testing-library/jest-dom"
import { a11yTest } from "@wpmudev/sui-utils"
import { screen, render, fireEvent } from "@testing-library/react"
import { BasicBox } from "../src"

describe("@wpmudev/sui-basic-box", () => {
	it("renders correctly", () => {
		// Render the BasicBox component with the "Test" content
		render(<BasicBox>Test</BasicBox>)

		// Verify that the BasicBox component is in the document
		expect(screen.getByTestId("basic-box")).toBeInTheDocument()
	})

	it("isPro", () => {
		// Render the BasicBox component with the "isPro" prop set to true
		render(<BasicBox isPro={true}>Test</BasicBox>)

		// Get the BasicBox element
		const boxEl = screen.getByTestId("basic-box")

		// Verify that the 'sui-basic-box--pro' class is applied
		expect(boxEl).toHaveClass("sui-basic-box--pro")
	})

	it("displays title, description, and body elements", () => {
		// Render the BasicBox component with title and description
		render(
			<BasicBox title="Box title" description="Box description">
				Test
			</BasicBox>,
		)

		// Verify that the title, description, and body elements are in the document
		expect(screen.getByTestId("basic-box-title")).toBeInTheDocument()
		expect(screen.getByTestId("basic-box-description")).toBeInTheDocument()
		expect(screen.getByTestId("basic-box-body")).toBeInTheDocument()
	})

	it("applies classes on hover and focus", () => {
		// Render the BasicBox component
		render(<BasicBox>Test</BasicBox>)

		// Get the BasicBox element
		const boxEl = screen.getByTestId("basic-box")

		// Simulate mouse hover on the BasicBox
		fireEvent.mouseEnter(boxEl)

		// Verify that the 'sui-basic-box--hover' class is applied on hover
		expect(boxEl).toHaveClass("sui-basic-box--hover")

		// Simulate focus on the BasicBox
		fireEvent.focus(boxEl)

		// Verify that the 'sui-basic-box--focus' class is applied on focus
		expect(boxEl).toHaveClass("sui-basic-box--focus")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<BasicBox />)
	})
})
