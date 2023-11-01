import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom" // This is still needed to extend Jest's expect
import { a11yTest } from "@wpmudev/sui-utils"
import { Avatar } from "../src"

describe("@wpmudev/sui-avatar", () => {
	// Test if the Avatar component renders
	test("Component renders", () => {
		render(<Avatar />)
		const avatarElement = screen.getByTestId("avatar")
		expect(avatarElement).toBeInTheDocument()
	})

	// Test if the status is rendered when a status is provided
	test("Renders status", () => {
		render(<Avatar status="confirmed" />)
		const statusElement = screen.getByTestId("avatar-status")
		expect(statusElement).toBeInTheDocument()
	})

	// Test if the image avatar and alt text are rendered correctly
	test("Renders image avatar", () => {
		const imageUrl = "https://placehold.co/400"
		const altText = "This is an example alt"
		render(<Avatar image={{ src: imageUrl, alt: altText }} />)

		// Image element
		const avatarImgElement = screen.getByTestId("avatar-image")
		expect(avatarImgElement).toBeInTheDocument()

		// Image description
		const altTextElement = screen.getByTestId("avatar-image-alt")
		expect(altTextElement.textContent).toEqual(altText)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Avatar />)
	})
})
