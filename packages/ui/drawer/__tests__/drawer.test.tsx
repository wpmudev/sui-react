import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
// import { a11yTest } from "@wpmudev/sui-dev-utils"
import {
	Drawer,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	DrawerTypes,
} from "../src"
import { a11yTest } from "@wpmudev/sui-dev-utils"

describe("@wpmudev/sui-drawer", () => {
	const Component = (propsList: DrawerTypes) => {
		return <Drawer {...propsList} />
	}

	// Check if the component renders correctly
	it("renders correctly", () => {
		// Render the component
		render(<Component>Drawer Children</Component>)
		// Assert that the date picker element is in the document
		expect(screen.getByTestId("drawer")).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component>Drawer Children</Component>)
	})
})
