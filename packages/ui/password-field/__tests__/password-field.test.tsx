import React from "react"
import { PasswordField } from "../src"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"

describe("@wpmudev/sui-password-field", () => {
	const Component = () => <PasswordField id="password-field-1" />

	// Test case: Ensure that the PasswordFiled renders correctly
	it("renders correctly", async () => {
		render(<Component />)
		expect(screen.getByTestId("password-field")).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
