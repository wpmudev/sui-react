import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
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

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
