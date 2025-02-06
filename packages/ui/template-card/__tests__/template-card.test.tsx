import React from "react"
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import { TemplateCard, TemplateCardInput, TemplateCardGroup } from "../src"
import { Button } from "@wpmudev/sui-button"

describe("@wpmudev/sui-template-card", () => {
	// Test case to check if TemplateCard renders with correct title and description
	it("Renders TemplateCard with title and description", () => {
		render(
			<TemplateCard
				title="Test Template Card"
				description="This is a description of the template card."
			/>,
		)

		expect(screen.getByText("Test Template Card")).toBeInTheDocument()
		expect(
			screen.getByText("This is a description of the template card."),
		).toBeInTheDocument()
	})

	// Test case to check if TemplateCardGroup renders with correct input values
	it("Renders TemplateCardGroup with TemplateCardInput", () => {
		render(
			<TemplateCardGroup name="test-group" defaultValue="Card 1">
				<TemplateCardInput
					value="Card 1"
					title="Card 1 Title"
					description="Card 1 Description"
				/>
				<TemplateCardInput
					value="Card 2"
					title="Card 2 Title"
					description="Card 2 Description"
				/>
			</TemplateCardGroup>,
		)

		expect(screen.getByLabelText("Card 1 Title")).toBeInTheDocument()
		expect(screen.getByLabelText("Card 2 Title")).toBeInTheDocument()
		expect(screen.getByText("Card 1 Description")).toBeInTheDocument()
		expect(screen.getByText("Card 2 Description")).toBeInTheDocument()
	})

	// Test case to check if the TemplateCardInput component fires an onChange event
	it("TemplateCardInput fires onChange event when radio option is clicked", () => {
		const handleChange = jest.fn()

		render(
			<TemplateCardGroup
				name="test-group"
				defaultValue="Card 1"
				onChange={handleChange}
			>
				<TemplateCardInput value="Card 1" title="Card 1" />
				<TemplateCardInput
					value="Card 2"
					title="Card 2 Title"
					description="Card 2 Description"
				/>
			</TemplateCardGroup>,
		)

		// Find the second radio button by its title or label text
		const card2RadioButton = screen.getByLabelText("Card 2 Title")

		// Simulate a click event on the second radio button
		fireEvent.click(card2RadioButton)

		// Check if the onChange handler was called
		expect(handleChange).toHaveBeenCalledTimes(1)
		expect(handleChange).toHaveBeenCalledWith("Card 2")
	})

	// Test case to check if the actions are rendered inside the TemplateCard
	it("Renders actions inside TemplateCard", () => {
		const actions = [
			<Button key="key-1" colorScheme="blue" type="primary" isSmall={true}>
				Preview
			</Button>,
			<Button key="key-2" colorScheme="white" type="secondary" isSmall={true}>
				Create form
			</Button>,
		]

		const props = {
			actions,
		}

		render(
			<TemplateCard
				title="Test Template Card"
				description="This is a description of the template card."
				{...props}
			/>,
		)

		expect(screen.getByText("Preview")).toBeInTheDocument()
		expect(screen.getByText("Create form")).toBeInTheDocument()
	})

	it("TemplateCardGroup uses defaultValue correctly", () => {
		render(
			<TemplateCardGroup name="test-group" defaultValue="Card 1">
				<TemplateCardInput value="Card 1" title="Card 1" />
				<TemplateCardInput value="Card 2" title="Card 2" />
			</TemplateCardGroup>,
		)

		// Check if the radio button with value="Card 1" is selected by default
		const card1Input = screen.getByDisplayValue("Card 1")
		expect(card1Input).toBeChecked()

		// Ensure that the radio button with value="Card 2" is not selected
		const card2Input = screen.getByDisplayValue("Card 2")
		expect(card2Input).not.toBeChecked()
	})
})
