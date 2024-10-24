import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"

import { Footer } from "../src"

describe("@wpmudev/footer", () => {
	it("renders fine", () => {
		render(<Footer />)
		expect(screen.getByTestId("footer")).toBeInTheDocument()
	})

	it("links works", () => {
		render(
			<Footer
				links={[
					{
						url: "#",
						title: "Free Plugins",
					},
					{
						url: "#",
						title: "Membership",
					},
				]}
			/>,
		)

		expect(screen.getByTestId("footer-links")).toBeInTheDocument()
	})

	it("socialLinks works", () => {
		render(
			<Footer
				socialLinks={[
					{
						url: "#",
						type: "instagram",
					},
					{
						url: "#",
						type: "twitter",
					},
				]}
			/>,
		)

		expect(screen.getByTestId("footer-social-links")).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Footer />)
	})
})
