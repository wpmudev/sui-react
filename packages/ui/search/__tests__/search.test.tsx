import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Search, SearchProps } from "../src"
import { a11yTest } from "@wpmudev/sui-utils"

describe("@wpmudev/sui-search", () => {
	const Component = (propsList: SearchProps) => {
		return <Search {...propsList} />
	}

	// Check if the component renders correctly
	it("renders correctly", () => {
		// Render the component
		render(<Component />)
		// Assert that the date picker element is in the document
		expect(screen.getByTestId("search")).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
