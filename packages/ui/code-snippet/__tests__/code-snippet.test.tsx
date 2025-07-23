import React from "react"
import "@testing-library/jest-dom"
import { userEvent } from "@testing-library/user-event"
import { screen, render, fireEvent } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { CodeSnippet, CodeSnippetProps } from "../src"

describe("@wpmudev/sui-code-snippet", () => {
	const code = "__CODE_SNIPPET__"

	const Component = (props: CodeSnippetProps) => {
		return <CodeSnippet {...props}>{code}</CodeSnippet>
	}

	// Test for rendering the component.
	it("renders correctly", () => {
		render(<Component />)
		expect(screen.getByTestId("code-snippet")).toBeInTheDocument()
	})

	// Test for rendering the code correctly.
	it("code renders correctly", () => {
		render(<Component />)
		expect(screen.getByText(code)).toBeInTheDocument()
	})

	// Test for copying the code correctly.
	it("copy button works correctly", async () => {
		// Setup userEvent.
		userEvent.setup()

		render(<Component />)
		const copyBtn = await screen.findByTestId("code-snippet-copy-btn")

		// Ensure the copy button is present.
		expect(copyBtn).toBeInTheDocument()

		// Simulate a click event on the copy button.
		fireEvent.click(copyBtn)

		// Read the clipboard contents and assert that it matches the code.
		const clipboardText = await navigator.clipboard.readText()
		expect(clipboardText).toBe(code)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
