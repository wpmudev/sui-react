import React from "react"

import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react"

import { Select } from "../src"

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

	it("renders", () => {
		render(<Select id={props.id} options={props.options} />)
	})
})
