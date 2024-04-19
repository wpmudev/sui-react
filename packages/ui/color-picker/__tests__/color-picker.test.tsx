import React, { useState } from "react"
import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
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

		// Click the reset button
		fireEvent.click(screen.getByTestId("reset-button"))

		// Assert that the date picker element is in the document
		expect(screen.getByTestId("colorpicker-input")).toHaveValue("#ffffff")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component id="color-picker-1" />)
	})
})
