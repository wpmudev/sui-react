import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Icon } from "../src"

describe("@wpmudev/sui-icon", () => {
	it("renders correctly", () => {
		render(<Icon />)

		// Verify that the Dropdown component is in the document
		expect(screen.getByTestId("svg-icon")).toBeInTheDocument()
	})
})
