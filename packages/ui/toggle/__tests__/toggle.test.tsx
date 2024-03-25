import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Toggle } from "../src"

describe("@wpmudev/sui-toggle", () => {
	const Component = () => <Toggle label="Toggle Label" description="Lorem" />

	it("Render correctly", () => {
		render(<Component />)

		expect(screen.getByTestId("toggle")).toBeInTheDocument()
		expect(screen.getByTestId("toggle-label")).toBeInTheDocument()
		expect(screen.getByTestId("toggle-description")).toBeInTheDocument()
	})

	it("State change works correctly", () => {
		render(<Component />)

		const toggle = screen.getByTestId("toggle")

		fireEvent.click(toggle)

		expect(toggle).toHaveClass("sui-toggle--checked")

		fireEvent.click(toggle)

		expect(toggle).not.toHaveClass("sui-toggle--checked")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
