import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import { CodeEditor, CodeEditorProps } from "../src"

describe("@wpmudev/code-editor", () => {
	const Component = (propsList: CodeEditorProps) => {
		return <CodeEditor {...propsList} />
	}

	// Check if the component renders correctly
	it("renders correctly", () => {
		// Render the component
		render(<Component />)
		// Assert that the date picker element is in the document
		expect(screen.getByTestId("code-editor")).toBeInTheDocument()
	})
})