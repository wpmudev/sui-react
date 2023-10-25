import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { Toggle } from "../src"

describe("@wpmudev/sui-toggle", () => {
	it("Render correctly", () => {
		render(<Toggle label="Toggle Label" description="Lorem" />)

		expect(screen.getByTestId("toggle")).toBeInTheDocument()
		expect(screen.getByTestId("toggle-label")).toBeInTheDocument()
		expect(screen.getByTestId("toggle-description")).toBeInTheDocument()
	})
})
