import React from "react"

import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Select, SelectBaseProps } from "../src"

describe("@wpmudev/sui-select", () => {
	const props = {
		id: "standard-select",
		label: "Select",
		options: [
			{
				icon: "settings",
				id: "option-1",
				label: "Option 1 is the option.",
				isSelected: false,
			},
			{
				icon: "settings",
				id: "option-2",
				label: "Option 2",
				isSelected: false,
			},
		],
		isError: false,
		isDisabled: false,
		isSmall: false,
	}

	const Component = (propsList: SelectBaseProps) => {
		return <Select {...propsList} />
	}

	// Check if the component renders correctly
	it("renders correctly", () => {
		// Render the component
		render(<Component {...props} />)
		// Assert that the date picker element is in the document
		expect(screen.getByTestId("select")).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component {...props} />)
	})
})
