import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Search, SearchProps } from "../src"

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
})
