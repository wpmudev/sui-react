import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Upsell } from "../src"

describe("@wpmudev/sui-upsell", () => {
	it("Render correctly", () => {
		render(<Upsell />)
		expect(screen.getByTestId("upsell")).toBeInTheDocument()
	})

	it("render title and description", () => {
		const title = "Upsell Title"
		const description = "Upsell description"

		render(<Upsell title={title} description={description} />)

		expect(screen.getByText(title)).toBeInTheDocument()
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	it("renders variation", () => {
		render(<Upsell variation="hummingbird" />)
		expect(screen.getByTestId("upsell")).toHaveClass("sui-upsell--hummingbird")
	})

	it("renders features", () => {
		render(
			<Upsell
				features={[
					"Performance Test Reporting",
					"Uptime monitoring",
					"Enhanced file minification with CDN",
					"Database Cleanup notifications",
				]}
			/>,
		)

		expect(screen.getByTestId("features")).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Upsell />)
	})
})
