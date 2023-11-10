import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { ProgressBar } from "../src"

describe("@wpmudev/sui-progress-bar", () => {
	// Test case: Check if the ProgressBar component renders correctly with a value of 50 and size "sm"
	it("renders correctly", () => {
		render(<ProgressBar value={50} size="sm" />) // Render the ProgressBar component
		expect(screen.getByTestId("progress-bar")).toBeInTheDocument() // Check if the ProgressBar is in the document
	})

	// Test case: Check if the allowCancel prop works
	it("allowCancel prop works", () => {
		render(<ProgressBar allowCancel={true} />) // Render the ProgressBar component with allowCancel set to true
		expect(screen.getByText("Cancel")).toBeVisible() // Check if the "Cancel" text is visible in the rendered component
	})

	// Test case: Check if the label prop works
	it("label prop works", () => {
		const label = "__LABEL__" // Define a label to use in the test
		render(<ProgressBar label={label} />) // Render the ProgressBar component with the defined label
		expect(screen.getByText(label)).toBeVisible() // Check if the label text is visible in the rendered component
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<ProgressBar value={50} size="sm" />)
	})
})
