import React from "react"
import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { RadioGroup, Radio, RadioGroupProps } from "../src"

describe("@wpmudev/sui-radio", () => {
	const label = "This is an example label"
	const description = "This is a description"

	const Component = ({
		isDisabled,
		defaultValue = "",
		asBlock = false,
	}: Pick<RadioGroupProps, "isDisabled" | "defaultValue" | "asBlock">) => {
		return (
			<RadioGroup
				defaultValue={defaultValue}
				name="country"
				isDisabled={isDisabled ?? false}
				asBlock={asBlock ?? false}
			>
				<Radio value="in" tag="Pro" label={label} description={description} />
				<Radio value="usa" />
			</RadioGroup>
		)
	}

	it("renders + check work fine", () => {
		render(<Component />)

		const radioGroup = screen.getByTestId("radio-group")
		const input = screen.getAllByTestId("radio-input")

		expect(input[0]).not.toBeChecked()
		expect(radioGroup).toBeInTheDocument()

		fireEvent.click(input[0])
		expect(input[0]).toBeChecked()
	})

	it("defaultValue", () => {
		render(<Component defaultValue="usa" />)

		const input = screen.getAllByTestId("radio-input")
		expect(input[1]).toBeChecked()

		// check other option
		fireEvent.click(input[0])
		expect(input[0]).toBeChecked()
	})

	it("isDisabled", () => {
		render(<Component isDisabled={false} />)

		const radioGroup = screen.getByTestId("radio-group")
		expect(radioGroup).toBeInTheDocument()

		const input = screen.getAllByTestId("radio-input")
		fireEvent.click(input[0])
		expect(input[0]).not.toHaveAttribute("checked")
	})

	it("displays as block", () => {
		render(<Component asBlock={true} />)

		const input = screen.getAllByTestId("radio")
		expect(input[0]).toHaveClass("sui-radio--block")
	})

	it("hover and focus", () => {
		render(<Component />)
		const input = screen.getAllByTestId("radio")[0]

		expect(input).not.toHaveClass("sui-radio--hover")
		expect(input).not.toHaveClass("sui-radio--focus")

		fireEvent.mouseEnter(input)
		expect(input).toHaveClass("sui-radio--hover")

		// focus radio button
		fireEvent.focus(input)
		expect(input).toHaveClass("sui-radio--focus")
	})

	it("tag", () => {
		render(<Component />)
		expect(screen.getByText("Pro")).toBeInTheDocument()
	})

	it("label + description", () => {
		render(<Component />)

		const labelEl = screen.getByText(label)
		const descriptionEl = screen.getByText(description)

		expect(labelEl).toBeInTheDocument()
		expect(descriptionEl).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
