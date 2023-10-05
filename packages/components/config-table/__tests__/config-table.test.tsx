import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import { ConfigTable } from "../src"
import { Configs } from "../stories/config-table.stories"

describe("@wpmudev/sui-config-table", () => {
	it("renders correctly", () => {
		// Render the ConfigTable component with the provided configurations
		render(<ConfigTable configs={Configs} />)
		// Ensure that the ConfigTable component is in the document
		expect(screen.getByTestId("config-table")).toBeInTheDocument()
		// Verify that the details of the first configuration are visible
		expect(screen.getByText(Configs[0].name)).toBeVisible()
		expect(screen.getByText(Configs[0].description)).toBeVisible()
	})

	it("applies custom className correctly", () => {
		// Render the ConfigTable component with a custom className
		render(<ConfigTable configs={Configs} className="__test-class__" />)
		// Verify that the ConfigTable component has the custom className
		expect(screen.getByTestId("config-table")).toHaveClass("__test-class__")
	})
})
