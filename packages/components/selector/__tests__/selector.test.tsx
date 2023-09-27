import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { Selector as SuiSelector, Selector } from "../src"

describe("@wpmudev/sui-selector", () => {
	test("Renders correctly", () => {
		render(
			<Selector
				label="option-1"
				name="options"
				value="option-1"
				isChecked={false}
				allowRemove={false}
			/>,
		)
	})
})
