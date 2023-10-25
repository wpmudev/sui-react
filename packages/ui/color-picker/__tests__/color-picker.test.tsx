import React, { useState } from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

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
})
