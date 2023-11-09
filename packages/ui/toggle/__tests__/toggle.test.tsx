import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Toggle } from "../src"

describe("@wpmudev/sui-toggle", () => {
	const Component = () => <Toggle label="Toggle Label" description="Lorem" />

	it("Render correctly", () => {
		render(<Component />)

		expect(screen.getByTestId("toggle")).toBeInTheDocument()
		expect(screen.getByTestId("toggle-label")).toBeInTheDocument()
		expect(screen.getByTestId("toggle-description")).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
