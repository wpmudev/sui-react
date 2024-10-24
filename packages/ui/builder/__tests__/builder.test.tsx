import React from "react"
import "@testing-library/jest-dom"
import { within } from "@testing-library/dom"
import { screen, render, fireEvent } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { Builder, BuilderField, BuilderProps, BuilderWrapper } from "../src"

describe("@wpmudev/sui-builder", () => {
	const args = {
		action: "__ACTIONS__",
		customContent: "__CUSTOM_CONTENT__",
		accordionTitle: "__ACCORDION_TITLE__",
		accordionBody: "__ACCORDION_BODY__",
	}

	const Component = (propsList: BuilderProps) => {
		return (
			<Builder {...(propsList as BuilderProps)}>
				<BuilderWrapper>
					<BuilderField
						columnSize={4}
						action={args.action}
						title="Field title"
						subTitle="Field text"
						icon="Desktop"
					/>
					<BuilderField
						columnSize={4}
						action={args.action}
						allowDrag={false}
						title="No Drag"
						icon="Desktop"
					/>
					<BuilderField
						columnSize={4}
						action={args.action}
						title="Image Field"
						imgUrl="https://placehold.co/40x40/EEE/31343C"
						icon="Desktop"
					/>
				</BuilderWrapper>
				<BuilderWrapper>
					<BuilderField
						action={args.action}
						title="Error Block"
						hasError={true}
						icon="Bell"
					/>
				</BuilderWrapper>
				<BuilderWrapper>
					<BuilderField
						action={args.action}
						title="Block 3"
						icon="Desktop"
						customContent={args.customContent}
					/>
				</BuilderWrapper>
				<BuilderWrapper>
					<BuilderField
						action={args.action}
						title={args.accordionTitle}
						icon="Desktop"
					>
						{args.accordionBody}
					</BuilderField>
				</BuilderWrapper>
			</Builder>
		)
	}

	// Renders the Component correctly
	it("render correctly", () => {
		render(<Component />)
		expect(screen.getByTestId("builder")).toBeInTheDocument()
		// All wrapper elements should be rendered
		expect(screen.getAllByTestId("builder-wrapper")).toHaveLength(4)
		// All field elements should be rendered
		expect(screen.getAllByTestId("builder-field")).toHaveLength(6)
	})

	// Checks if 'hasNoFields' prop works correctly
	it("hasNoFields prop works correctly", () => {
		render(<Component hasNoFields={true} />)
		expect(screen.getByTestId("builder-empty")).toBeInTheDocument()
	})

	// Checks if 'allowAddFields' prop works correctly
	it("allowAddFields prop works correctly", () => {
		render(<Component allowAddFields={true} />)
		expect(screen.getByTestId("builder-add-more")).toBeInTheDocument()
	})

	// Checks if text builder field works correctly
	it("text builder field works correctly", () => {
		render(<Component />)
		const builderField = screen.getAllByTestId("builder-field")[0]
		expect(within(builderField).getByText("Field title")).toBeInTheDocument()
		expect(within(builderField).getByText("Field text")).toBeInTheDocument()
		expect(
			within(builderField).getByTestId("builder-field-drag"),
		).toBeInTheDocument()
	})

	// Checks if a field with no drag works correctly
	it("field with no drag works correctly", async () => {
		render(<Component />)
		const builderField = screen.getAllByTestId("builder-field")[1]
		expect(within(builderField).getByText("No Drag")).toBeInTheDocument()
		expect(
			await within(builderField).queryByTestId("builder-field-drag"),
		).not.toBeInTheDocument()
	})

	// Checks if a field with an image works correctly
	it("field with image works correctly", async () => {
		render(<Component />)
		const builderField = screen.getAllByTestId("builder-field")[2]
		expect(within(builderField).getByText("Image Field")).toBeInTheDocument()
		expect(
			within(builderField).queryByAltText("Field Preview"),
		).toBeInTheDocument()
	})

	// Checks if a field with an error block works correctly
	it("field with error block works correctly", async () => {
		render(<Component />)
		const builderField = screen.getAllByTestId("builder-field")[3]
		expect(within(builderField).getByText("Error Block")).toBeInTheDocument()
		expect(builderField).toHaveClass("sui-builder__field--error")
	})

	// Checks if a field with custom content works correctly
	it("field with custom content works correctly", async () => {
		render(<Component />)
		const builderField = screen.getAllByTestId("builder-field")[4]
		expect(
			within(builderField).queryByText(args.customContent),
		).toBeInTheDocument()
	})

	// Checks if a field as an accordion works correctly
	it("field as accordion works correctly", async () => {
		const { container } = render(<Component />)
		const builderField = screen.getAllByTestId("builder-field")[5]
		const accordionBody = container.querySelector(".sui-builder__field-body")
		expect(builderField).not.toHaveClass("sui-builder__field-expanded")
		expect(accordionBody).toBeInTheDocument()
		const accordionBtn = await within(builderField).findByTestId(
			"builder-field-toggle",
		)
		fireEvent.click(accordionBtn)
		expect(builderField).toHaveClass("sui-builder__field--expanded")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
