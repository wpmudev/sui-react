import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import { Uploader, UploaderProps } from "../src"

describe("@wpmudev/sui-uploader", () => {
	const Component = (propsList: UploaderProps) => {
		return <Uploader {...propsList} />
	}

	// Check if the component renders correctly
	it("renders correctly", () => {
		// Render the component
		render(<Component />)
		// Assert that the uploader element is in the document
		expect(screen.getByTestId("uploader")).toBeInTheDocument()
	})
})
