import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { Accordion, AccordionItem, AccordionItemBody } from "../src"
import { InfoAlt } from "@wpmudev/sui-icons"

describe("@wpmudev/sui-accordion", () => {
	// Common props for the Accordion component
	const props = {
		accordionTitle: "__ACCORDION_TITLE__",
		accordionDesc: "__ACCORDION_DESC__",
		accordionBody: "__ACCORDION_BODY__",
	}

	const AccordionDemo = () => {
		return (
			<Accordion state="success" data-testid="accordion">
				<AccordionItem
					title={props.accordionTitle}
					description={props.accordionDesc}
				>
					<AccordionItemBody>
						<p>{props.accordionBody}</p>
					</AccordionItemBody>
				</AccordionItem>
				<AccordionItem
					title={props.accordionTitle}
					description={props.accordionDesc}
					icon={<InfoAlt />}
					hasCheckbox={true}
				>
					<AccordionItemBody>
						<p>{props.accordionBody}</p>
					</AccordionItemBody>
				</AccordionItem>
				<AccordionItem
					title={props.accordionTitle}
					description={props.accordionDesc}
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
		expect(screen.getAllByText(props.accordionTitle)[0]).toBeInTheDocument()
		expect(screen.getAllByText(props.accordionDesc)[0]).toBeInTheDocument()
		expect(screen.getAllByText(props.accordionBody)[0]).toBeInTheDocument()
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
