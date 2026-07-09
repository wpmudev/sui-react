import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { Score } from "../src"

describe("@wpmudev/sui-score", () => {
	// Test to ensure that the component renders correctly
	test("Render correctly", () => {
		// Render the Score component with a value of 50 and a bar of 50.
		render(<Score value={50} bar={50} />)

		// Check if an element with the data-testid "score" is in the document.
		// Ensure that the "score" element is in the document.
		expect(screen.getByTestId("score")).toBeInTheDocument()
	})

	// Test to check if screen reader text is rendered correctly
	test("Renders screen reader text", () => {
		// Render the Score component with a value of 50 and a bar of 50.
		render(<Score value={50} bar={50} />)

		// Check if an element with the text "Score 50 out of 100" is in the document.
		// Ensure that the text is present in the document.
		expect(screen.getByText("Score 50 out of 100")).toBeInTheDocument()
	})

	// Test to check if the component renders correctly with a variation
	test("Renders variation", () => {
		// Render the Score component with a value of 50, a bar of 50, and the "success" state.
		render(<Score value={50} bar={50} state="success" />)

		// Check if an element with the data-testid "score" has the "sui-score--success" class.
		// Ensure that the "score" element has the "sui-score--success" class.
		expect(screen.getByTestId("score")).toHaveClass("sui-score--success")
	})

	// Test the score bar length
	test("score has the right value and bar length", () => {
		// Render the score component with a value of 70, a bar of 70, and the "success" state.
		render(<Score value={70} bar={70} />)

		// Get the score element
		const scoreElement = screen.getByTestId("score")

		// Get all circles elements
		const circles = scoreElement.querySelectorAll(".sui-score__circle")

		// The second circle is the score bar element
		const bar = circles[1]

		// Get the computed styles of the bar
		const styles = window.getComputedStyle(bar)

		// Check if the "sui70" animation is part of the animation property
		expect(styles.animation).toMatch("sui70")

		// Content element
		const content = scoreElement.querySelector(".sui-score--content")

		// Expect the value to be "70%"
		expect(content?.textContent).toContain("70%")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Score value={50} bar={50} />)
	})
})
