import React, { ReactNode } from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { EditorToolbar } from "../src"

describe("@wpmudev/sui-editor-toolbar", () => {
	const props = {
		title: "__TITLE__",
		children: "__BODY__",
		actions: (content: ReactNode) => ["__ACTION_1__", "__ACTION_2__", content],
		allowBack: false,
		alignCenter: false,
		onBackClick: jest.fn(),
		onSettingClick: jest.fn(),
	}

	it("render correctly", () => {
		render(<EditorToolbar {...props} />)
		expect(screen.getByTestId("editor-toolbar")).toBeVisible()
		expect(
			screen.queryByTestId("editor-toolbar-back-btn"),
		).not.toBeInTheDocument()
	})

	it("title and children renders correctly", () => {
		render(<EditorToolbar {...props} />)
		expect(screen.getByText(props.title)).toBeVisible()
		expect(screen.getByText(props.children)).toBeVisible()
	})

	it("allowBack prop work correctly", () => {
		render(<EditorToolbar {...props} allowBack={true} />)
		expect(screen.getByTestId("editor-toolbar-back-btn")).toBeVisible()
	})

	it("alignCenter prop work correctly", () => {
		render(<EditorToolbar {...props} alignCenter={true} />)
		expect(screen.getByTestId("editor-toolbar")).toHaveClass(
			"sui-editor-toolbar--center",
		)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<EditorToolbar {...props} />)
	})
})
