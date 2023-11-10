import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { UpsellNotice } from "../src"

describe("@wpmudev/sui-upsell-notice", () => {
	it("Render correctly", () => {
		render(<UpsellNotice />)
		expect(screen.getByTestId("upsell-notice")).toBeInTheDocument()
	})

	it("render title and description", () => {
		const title = "Upsell Title"
		const description = "Upsell description"

		render(<UpsellNotice title={title} description={description} />)

		expect(screen.getByText(title)).toBeInTheDocument()
		expect(screen.getByText(description)).toBeInTheDocument()
	})

	it("renders variation", () => {
		render(<UpsellNotice variation="hummingbird" />)
		expect(screen.getByTestId("upsell-notice")).toHaveClass(
			"sui-upsell-notice--hummingbird",
		)
	})

	it("tagTitle works", () => {
		render(<UpsellNotice tagTitle="PRO" />)
		expect(screen.getByTestId("tag")).toBeInTheDocument()
	})

	it("renders features", () => {
		render(
			<UpsellNotice
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
		await a11yTest(<UpsellNotice />)
	})
})
