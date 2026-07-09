import React, { useState } from "react"
import "@testing-library/jest-dom"
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { ColorPicker, ColorPickerProps } from "../src"

describe("@wpmudev/sui-color-picker", () => {
	const Component = (propsList: ColorPickerProps) => {
		return <ColorPicker {...propsList} />
	}

	// Check if the component renders correctly
	it("renders correctly", () => {
		// Render the component
		render(<Component id="color-picker-1" />)
		// Assert that the date picker element is in the document
		expect(screen.getByTestId("color-picker")).toBeInTheDocument()
	})

	// check when we click the reset button in colorpicker it reverts the colorpicker value to default value.
	it("resets color picker value to default", () => {
		// Render the component
		render(<Component id="color-picker-2" color="#ffffff" />)

		const colorPickerInput = screen.getByTestId("colorpicker-input")

		fireEvent.click(colorPickerInput)

		const colorDropDownInput = document.getElementsByClassName(
			"sui-color-picker__fields--hex",
		)

		// Change the color value
		expect(colorDropDownInput[0]).toBeInTheDocument()
		fireEvent.change(colorDropDownInput[0], { target: { value: "#000000" } })

		// Reset the color
		const resetButton = screen.getByTestId("reset-button")
		expect(resetButton).toBeInTheDocument()
		fireEvent.click(resetButton)

		waitFor(() => {
			expect(colorPickerInput).toHaveValue("#ffffff")
		})
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component id="color-picker-1" />)
	})
})
