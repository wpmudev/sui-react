import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import { ConfigTable } from "../src"
import { Configs } from "../stories/config-table.stories"

describe("@wpmudev/sui-config-table", () => {
	it("renders correctly", () => {
		render(<ConfigTable configs={Configs} />)
		expect(screen.getByTestId("config-table")).toBeInTheDocument()

		// config details works
		expect(screen.getByText(Configs[0].name)).toBeVisible()
		expect(screen.getByText(Configs[0].description)).toBeVisible()
	})

	it("className works", () => {
		render(<ConfigTable configs={Configs} className="__test-class__" />)
		expect(screen.getByTestId("config-table")).toHaveClass("__test-class__")
	})
})
