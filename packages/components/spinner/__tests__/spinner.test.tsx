import React, { RefObject, useRef } from "react"
import "@testing-library/jest-dom"
import { render, screen, renderHook, waitFor } from "@testing-library/react"

import { Spinner, useSpinner } from "../src"

const mockUseRef = (obj: any) => () =>
	Object.defineProperty({}, "current", {
		get: () => obj,
		set: () => {},
	})

describe("@wpmudev/sui-spinner", () => {
	// Ensure the component renders correctly.
	it("Renders correctly", () => {
		// Render the Spinner component.
		render(<Spinner />)

		// Get the spinner element by its test ID.
		const spinner = screen.getByTestId("spinner")

		// Check that the spinner is in the document.
		expect(spinner).toBeInTheDocument()
	})

	// Test the behavior of the 'size' prop.
	it("size prop works well", () => {
		// Render the Spinner component with size set to "lg".
		render(<Spinner size="lg" />)

		// Get the spinner element by its test ID.
		const spinner = screen.getByTestId("spinner")

		// Check that the spinner has the expected CSS class for size.
		expect(spinner).toHaveClass("sui-spinner--lg")
	})

	// Test the behavior of the 'color' prop.
	it("color prop works well", () => {
		// Render the Spinner component with color set to "dark".
		render(<Spinner color="dark" />)

		// Get the spinner element by its test ID.
		const spinner = screen.getByTestId("spinner")

		// Check that the spinner has the expected CSS class for color.
		expect(spinner).toHaveClass("sui-spinner--dark")
	})

	// Test the behavior of the 'isAbsolute' prop.
	it("isAbsolute prop works well", () => {
		// Render the Spinner component with isAbsolute set to true.
		render(<Spinner isAbsolute={true} />)

		// Get the spinner element by its test ID.
		const spinner = screen.getByTestId("spinner")

		// Check that the spinner has the expected CSS class for absolute positioning.
		expect(spinner).toHaveClass("sui-spinner--absolute")
	})

	// it("useSpinner hook works well", async () => {
	// 	const boxRef = React.createRef<HTMLDivElement>()
	// 	const { isVisible } = await renderHook(() => useSpinner(boxRef, {}))
	//
	// 	render(<div ref={boxRef}>Lorem ipsum</div>)
	//
	// 	// expect(isVisible).toBeTruthy()
	// })
})
