import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { AdvancedBanner } from "../src"

import { a11yTest } from "@wpmudev/sui-dev-utils"

describe("@wpmudev/sui-advanced-banner", () => {
	it("render correctly", () => {
		render(<AdvancedBanner variation="plugin">Test</AdvancedBanner>)
		expect(screen.getByTestId("advanced-banner")).toBeInTheDocument()
		expect(screen.getByTestId("advanced-banner-close")).toBeVisible()
	})

	it("variation works fine", () => {
		render(<AdvancedBanner variation="plugin">Test</AdvancedBanner>)
		expect(screen.getByTestId("advanced-banner")).toHaveClass(
			"sui-advanced-banner--plugin",
		)
	})

	it("title + description", () => {
		const title = "Advanced Banner title"
		const desc = "Advanced Banner description"

		render(
			<AdvancedBanner title={title} description={desc} variation="plugin">
				Test
			</AdvancedBanner>,
		)

		expect(screen.getByTestId("advanced-banner-title")).toBeVisible()
		expect(screen.getByTestId("advanced-banner-desc")).toBeVisible()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<AdvancedBanner variation="plugin">Test</AdvancedBanner>)
	})
})
