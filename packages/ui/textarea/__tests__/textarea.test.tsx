import React from "react"
import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Textarea } from "../src"

describe("@wpmudev/sui-textarea", () => {
	it("render correctly", () => {
		render(<Textarea />)
		expect(screen.getByTestId("textarea")).toBeInTheDocument()
	})

	it("disabled state", () => {
		render(<Textarea isDisabled={true} />)
		expect(screen.getByTestId("textarea")).toHaveClass("sui-textarea--disabled")
	})

	it("error state", () => {
		render(<Textarea isError={true} />)
		expect(screen.getByTestId("textarea")).toHaveClass("sui-textarea--error")
	})

	it("hover and focus", () => {
		render(<Textarea />)
		const textareaEl = screen.getByTestId("textarea")
		const textareaInputEl = screen.getByTestId("textarea-input")

		// hover test
		fireEvent.mouseEnter(textareaInputEl)
		expect(textareaEl).toHaveClass("sui-textarea--hover")

		// focus test
		fireEvent.focus(textareaInputEl)
		expect(textareaEl).toHaveClass("sui-textarea--focus")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Textarea />)
	})
})
