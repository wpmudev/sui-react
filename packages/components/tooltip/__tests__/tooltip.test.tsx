import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { Tooltip } from "../src"

describe("@wpmudev/sui-tooltip", () => {
	const label = "Tooltip Label"
	const description = "Tooltip Description"

	it("Render correctly", () => {
		render(<Tooltip label={label}>{description}</Tooltip>)

		expect(screen.getByText(label)).toBeInTheDocument()
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	it("position prop works fine", () => {
		render(
			<Tooltip label={label} position="bottom">
				{description}
			</Tooltip>,
		)

		const tooltipEl = screen.getByTestId("tooltip")

		expect(tooltipEl).toHaveClass("sui-tooltip--bottom")
		expect(screen.getByText(description)).toBeInTheDocument()
	})
})
