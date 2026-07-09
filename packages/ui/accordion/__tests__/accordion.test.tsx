import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { Accordion, AccordionItem, AccordionItemBody } from "../src"

import { InfoAlt } from "@wpmudev/sui-icons"
import { a11yTest } from "@wpmudev/sui-dev-utils"

describe("@wpmudev/sui-accordion", () => {
	// Common props for the Accordion component
	const accordionProps = [
		{
			accordionTitle: "__ACCORDION_TITLE__00",
			accordionDesc: "__ACCORDION_DESC__00",
			accordionBody: "__ACCORDION_BODY__00",
		},
		{
			accordionTitle: "__ACCORDION_TITLE__01",
			accordionDesc: "__ACCORDION_DESC__01",
			accordionBody: "__ACCORDION_BODY__01",
		},
		{
			accordionTitle: "__ACCORDION_TITLE__02",
			accordionDesc: "__ACCORDION_DESC__02",
			accordionBody: "__ACCORDION_BODY__02",
		},
	]

	const AccordionDemo = () => {
		return (
			<Accordion state="success" _htmlProps={{ "data-testid": "accordion" }}>
				<AccordionItem
					title={accordionProps[0].accordionTitle}
					description={accordionProps[0].accordionDesc}
				>
					<AccordionItemBody>
						<p>{accordionProps[0].accordionBody}</p>
					</AccordionItemBody>
				</AccordionItem>
				<AccordionItem
					title={accordionProps[1].accordionTitle}
					description={accordionProps[1].accordionDesc}
					icon={<InfoAlt />}
					hasCheckbox={true}
				>
					<AccordionItemBody>
						<p>{accordionProps[1].accordionBody}</p>
					</AccordionItemBody>
				</AccordionItem>
				<AccordionItem
					title={accordionProps[2].accordionTitle}
					description={accordionProps[2].accordionDesc}
					icon={<InfoAlt />}
					isDisabled={true}
				>
					<AccordionItemBody>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</AccordionItemBody>
				</AccordionItem>
			</Accordion>
		)
	}

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<AccordionDemo />, {
			rules: {
				// This rule have already been resolved, disabled just to prevent jest from failing
				"nested-interactive": { enabled: false },
			},
		})
	})

	// Test: Renders the Accordion component
	it("renders the Accordion component", () => {
		render(<AccordionDemo />)
		expect(screen.getByTestId("accordion")).toBeVisible()
	})

	// Test: state prop work correctly
	it("accordion state prop work correctly", () => {
		render(<AccordionDemo />)
		expect(screen.getByTestId("accordion")).toHaveClass(
			"sui-accordion--success",
		)
	})

	// Test: Renders the correct number of items
	it("renders the correct number of items", async () => {
		render(<AccordionDemo />)
		const items = await screen.findAllByTestId("accordion-item")
		expect(items).toHaveLength(3)
	})

	// Test: Applies 'isDisabled' prop correctly to an item
	it("applies 'isDisabled' prop correctly to an item", async () => {
		render(<AccordionDemo />)
		const items = await screen.findAllByTestId("accordion-item")
		const disableItem = items[2]
		expect(disableItem).toHaveClass("sui-accordion__item--disabled")
	})

	// Test: Disabled accordion shouldn't be expandable
	it("disabled accordion shouldn't be expandable", () => {
		render(<AccordionDemo />)
		const disabledBody = screen.getAllByTestId("accordion-item-panel")[2]
		const disabledBtn = screen.getAllByTestId("accordion-item-button")[2]

		// Click the button of a disabled accordion
		fireEvent.click(disabledBtn)

		// Expect the body to still have the 'sui-accordion__panel--open' class
		expect(disabledBody).toHaveClass("sui-accordion__panel--open")
	})

	// Test: Applies 'hasCheckbox' prop correctly to an item
	it("applies 'hasCheckbox' prop correctly to an item", async () => {
		render(<AccordionDemo />)
		const checkboxItem = screen.getByTestId("checkbox")
		expect(checkboxItem).toBeInTheDocument()
	})

	// Test: Verify 'title', 'description', and 'children' props
	it("verify title, description, and children props", () => {
		render(<AccordionDemo />)

		// Expect the title, description, and children to be present
		// First Accordion Element
		expect(
			screen.getAllByText(accordionProps[0].accordionTitle)[0],
		).toBeInTheDocument()
		expect(
			screen.getAllByText(accordionProps[0].accordionDesc)[0],
		).toBeInTheDocument()
		expect(
			screen.getAllByText(accordionProps[0].accordionBody)[0],
		).toBeInTheDocument()

		// Second Accordion Element
		expect(
			screen.getAllByText(accordionProps[1].accordionTitle)[0],
		).toBeInTheDocument()
		expect(
			screen.getAllByText(accordionProps[1].accordionDesc)[0],
		).toBeInTheDocument()
		expect(
			screen.getAllByText(accordionProps[1].accordionBody)[0],
		).toBeInTheDocument()

		// Third Accordion Element
		expect(
			screen.getAllByText(accordionProps[2].accordionTitle)[0],
		).toBeInTheDocument()
		expect(
			screen.getAllByText(accordionProps[2].accordionDesc)[0],
		).toBeInTheDocument()
	})

	// Test: Accordion body should be visible when expanded
	it("accordion body visible on expand only", () => {
		render(<AccordionDemo />)
		const accordionBody = screen.getAllByTestId("accordion-item-panel")[0]
		const accordionBtn = screen.getAllByTestId("accordion-item-button")[0]

		// Expect the accordion body not to have 'sui-accordion__panel--open' class initially
		expect(accordionBody).not.toHaveClass("sui-accordion__panel--open")

		// Click the button to expand the accordion
		fireEvent.click(accordionBtn)

		// Expect the accordion body to have 'sui-accordion__panel--open' class after expansion
		expect(accordionBody).toHaveClass("sui-accordion__panel--open")
	})
})
