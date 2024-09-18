import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"

import { AlertBanner } from "../src"

describe("@wpmudev/sui-alert-banner", () => {
	// Test case to check if the AlertBanner renders correctly
	it("renders correctly", () => {
		render(
			<AlertBanner>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</AlertBanner>,
		)

		// Verify that the AlertBanner is in the document
		expect(screen.getByTestId("alert-banner")).toBeInTheDocument()
	})

	// Test case to check if the AlertBanner without an icon
	it("renders without icon", () => {
		render(
			<AlertBanner displayIcon={false}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</AlertBanner>,
		)

		// Verify that the AlertBanner icon is in the document
		expect(screen.queryByTestId("alert-banner-icon")).not.toBeInTheDocument()
	})

	// Test case to check if the AlertBanner with a specific variation
	it("renders with a variation", () => {
		render(
			<AlertBanner variation="informative">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</AlertBanner>,
		)

		// Verify that the AlertBanner has the appropriate CSS class
		expect(screen.getByTestId("alert-banner")).toHaveClass(
			"sui-alert-banner--informative",
		)
	})

	// Test case to check if the AlertBanner is dismissible
	it("not dismissible", () => {
		render(
			<AlertBanner isDismissible={false}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</AlertBanner>,
		)

		// Verify that the AlertBanner has the close button
		expect(screen.queryByTestId("alert-banner-close")).not.toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<AlertBanner />)
	})
})
