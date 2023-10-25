import React from "react"
import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react"

import { Pagination } from "../src"

const itemList = [
	{ id: 1, title: "Item1" },
	{ id: 2, title: "Item2" },
	{ id: 3, title: "Item3" },
	{ id: 4, title: "Item4" },
	{ id: 5, title: "Item5" },
	{ id: 6, title: "Item6" },
]

describe("@wpmudev/sui-pagination", () => {
	// Define props to be reused in test cases
	const props = {
		limit: 2,
		skip: false,
		numberOfItems: itemList.length, // Assuming itemList is defined elsewhere
		onChange: jest.fn(), // Mocked onChange function
	}

	// Test case: Check if the Pagination component renders correctly
	it("renders correctly", () => {
		render(<Pagination {...props} />)
		expect(screen.getByTestId("pagination")).toBeInTheDocument()
	})

	// Test case: Check if direct jump on a page works
	it("direct jump on page works", async () => {
		render(<Pagination {...props} />)
		const pageButtons = await screen.getAllByTestId("pagination-item")

		// Click on the second page button
		fireEvent.click(pageButtons[1])
		// Verify that onChange was called with the expected page number
		expect(props.onChange).toHaveBeenCalledWith(2)
	})

	// Test case: Check if prev and next buttons work correctly
	it("prev and next buttons work correctly", () => {
		render(<Pagination {...props} />)
		const prevButton = screen.getByTestId("pagination-prev-page")
		const nextButton = screen.getByTestId("pagination-next-page")

		// Go to the next page
		fireEvent.click(nextButton)
		expect(props.onChange).toHaveBeenCalledWith(2)

		// Go to the previous page
		fireEvent.click(prevButton)
		expect(props.onChange).toHaveBeenCalledWith(1)
	})
})
