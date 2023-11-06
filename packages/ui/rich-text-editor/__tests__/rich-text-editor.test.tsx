import React from "react"
import { RichTextEditor } from "../src"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

describe("@wpmudev/sui-rich-text-editor", () => {
	// Test: Renders the Accordion component
	it("renders the Rich Text Editor Component", () => {
		render(<RichTextEditor />)
		expect(screen.getByTestId("rich-text-editor")).toBeVisible()
	})
})
