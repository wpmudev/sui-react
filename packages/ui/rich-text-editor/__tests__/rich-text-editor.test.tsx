import React from "react"
import { RichTextEditor } from "../src"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
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

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<RichTextEditor />)
	})
})
