import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import { EmptyState } from "../src"

describe("@wpmudev/sui-empty-state", () => {
	// Common props for the EmptyState component
	const props = {
		logo: "https://placehold.co/600x400/EEE/31343C",
		className: "__CLASSNAME__",
		children: "__BODY__",
		"data-testid": "empty-state",
	}

	describe("EmptyState component", () => {
		it("renders correctly", () => {
			render(<EmptyState {...props} />)

			// Verify that the EmptyState component is in the document
			expect(screen.getByTestId("empty-state")).toBeInTheDocument()
		})

		it("applies className prop correctly", () => {
			render(<EmptyState {...props} />)

			// Verify that the component has the specified className
			const component = screen.getByTestId("empty-state")
			expect(component).toHaveClass(props.className)
		})

		it("displays the logo with alt text 'LOGO'", () => {
			render(<EmptyState {...props} />)

			// Verify that the logo is visible and has the alt text "LOGO"
			expect(screen.getByAltText("LOGO")).toBeVisible()
		})
	})
})