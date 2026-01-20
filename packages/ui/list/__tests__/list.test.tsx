import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { List, ListItem } from "@wpmudev/sui-list"

// can you write test for List component
describe("@wpmudev/sui-list", () => {
	// Renders with multiple items
	test("Renders with multiple items", () => {
		// Render the List component with multiple list items
		render(
			<List>
				<ListItem>Item 1</ListItem>
				<ListItem>Item 2</ListItem>
				<ListItem>Item 3</ListItem>
			</List>,
		)

		// Check if all list items are rendered correctly
		expect(screen.getByText("Item 1")).toBeInTheDocument()
		expect(screen.getByText("Item 2")).toBeInTheDocument()
		expect(screen.getByText("Item 3")).toBeInTheDocument()
	})

	// Renders pass onItemClick handler
	test("Renders with onItemClick handler", () => {
		// Mock the onClick function
		const handleClick = jest.fn()

		// Render the List component with an action item
		render(
			<List>
				<ListItem onItemClick={handleClick}>Action Item</ListItem>
			</List>,
		)

		// Find the action item and simulate a click event
		const actionItem = screen.getByText("Action Item")
		actionItem.click()

		// Check if the onClick handler was called
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	// Renders with onCLick handler
	test("Renders with onClick handler", () => {
		// Mock the onClick function
		const handleClick = jest.fn()

		// Render the List component with an item that has an onClick handler
		render(
			<List onClick={handleClick}>
				<ListItem>Clickable Item</ListItem>
			</List>,
		)

		// Find the clickable item and simulate a click event
		const clickableItem = screen.getByText("Clickable Item")
		clickableItem.click()

		// Check if the onClick handler was called
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	// Renders with diabled state
	test("Renders with disabled state", () => {
		// Render the List component with a disabled item
		render(
			<List>
				<ListItem isDisabled={true}>Disabled Item</ListItem>
			</List>,
		)
		// Check if the disabled item is rendered correctly
		const disabledItem = screen.getByText("Disabled Item")
		expect(disabledItem).toBeInTheDocument()
		expect(disabledItem).toHaveClass("sui-list__item--disabled")
	})

	// Renders with a Pro tag
	test("Renders with Pro tag", () => {
		// Render the List component with a Pro item
		render(
			<List>
				<ListItem isPro={true}>Pro Item</ListItem>
			</List>,
		)

		// Check if the Pro tag is rendered
		const proTag = screen.getByText("Pro")
		expect(proTag).toBeInTheDocument()
	})
})
