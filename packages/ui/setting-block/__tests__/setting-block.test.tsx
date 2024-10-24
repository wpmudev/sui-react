import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { SettingBlock } from "../src"

describe("@wpmudev/sui-setting-block", () => {
	// Define constants for title, description, and body content
	const title = "__TITLE__"
	const desc = "__DESC__"
	const body = "__BODY_CONTENT__"

	// Test case: Ensure that SettingBlock renders correctly
	it("renders correctly", () => {
		render(<SettingBlock title={title}>{body}</SettingBlock>)
		// Use screen.getByTestId to locate the SettingBlock component and check its existence
		expect(screen.getByTestId("setting-block")).toBeVisible()
	})

	// Test case: Check if title, description, and children props work correctly
	it("title, description, and children props work correctly", () => {
		render(
			<SettingBlock title={title} description={desc}>
				{body}
			</SettingBlock>,
		)

		// Check if the title, description, and body content are visible on the screen
		expect(screen.getByText(title)).toBeVisible()
		expect(screen.getByText(desc)).toBeVisible()
		expect(screen.getByText(body)).toBeVisible()
	})

	// Test case: Verify if the "isPro" prop works as expected
	it("isPro prop works", () => {
		render(
			<SettingBlock title={title} isPro={true}>
				{body}
			</SettingBlock>,
		)

		// Check if the "tag" element and "Pro" text are visible when the "isPro" prop is true
		expect(screen.getByTestId("tag")).toBeVisible()
		expect(screen.getByText("Pro")).toBeVisible()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<SettingBlock title={title}>{body}</SettingBlock>)
	})
})
