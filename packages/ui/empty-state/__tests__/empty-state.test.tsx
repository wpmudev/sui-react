import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { EmptyState, EmptyStateProps } from "../src"

describe("@wpmudev/sui-empty-state", () => {
	// Common props for the EmptyState component
	const props: EmptyStateProps = {
		logo: "https://placehold.co/600x400/EEE/31343C",
		className: "__CLASSNAME__",
		children: "__BODY__",
		htmlProps: {
			"data-testid": "empty-state",
		},
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
			expect(component).toHaveClass(props?.className as string)
		})

		it("displays the logo with alt text 'LOGO'", () => {
			render(<EmptyState {...props} />)

			// Verify that the logo is visible and has the alt text "LOGO"
			expect(screen.getByAltText("LOGO")).toBeVisible()
		})
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<EmptyState {...props} />)
	})
})
