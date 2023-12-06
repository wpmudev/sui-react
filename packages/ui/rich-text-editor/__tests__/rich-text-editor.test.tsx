import React from "react"
import { RichTextEditor } from "../src"
import "@testing-library/jest-dom"
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"

declare global {
	interface Window {
		tinymce: any
	}
}

// Mocking TinyMce as we don't need to test third party libraries
beforeEach(() => {
	window.tinymce = {
		init: jest.fn().mockImplementation(() => {
			return null
		}),
		get: jest.fn().mockImplementation(() => {
			return null
		}),
	}
})

describe("@wpmudev/sui-rich-text-editor", () => {
	// Test: Renders the Accordion component
	it("renders the Rich Text Editor Component", () => {
		render(<RichTextEditor />)
		expect(screen.getByTestId("rich-text-editor")).toBeVisible()
	})

	// Switching Code Types
	it("Switch Editor Type Works Fine", () => {
		const { container } = render(<RichTextEditor />)

		const codeButton = container.querySelectorAll(
			".sui-segmented-control__label",
		)[1]
		const visualButton = container.querySelectorAll(
			".sui-segmented-control__label",
		)[0]

		// Switching to code editor
		fireEvent.click(codeButton as Element)

		// Expect the code editor to be in the page
		expect(
			container.querySelector("#sui-rich-text-editor-input-code"),
		).toBeInTheDocument()

		// Switching back to visual editor
		fireEvent.click(visualButton as Element)

		// Expect the visual editor to be in the page
		expect(
			container.querySelector("#sui-rich-text-editor-input"),
		).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<RichTextEditor />)
	})
})
