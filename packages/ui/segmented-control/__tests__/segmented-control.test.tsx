import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import {
	SegmentedControl,
	SegmentedControlButton,
} from "@wpmudev/sui-segmented-control"

describe("@wpmudev/sui-segmented-control", () => {
	// Test for rendering the SegmentedControl component
	test("Renders correctly", () => {
		// Render the SegmentedControl component with two SegmentedControlButton options
		render(
			<SegmentedControl name="country" data-testid="segmented-control">
				<SegmentedControlButton value="icon-only" icon="Filter" />
				<SegmentedControlButton value="India">India</SegmentedControlButton>
			</SegmentedControl>,
		)

		// Check if the SegmentedControl is rendered
		expect(screen.getByTestId("segmented-control")).toBeInTheDocument()
	})

	// Test for rendering a disabled SegmentedControlButton option
	test("Renders disabled radio option", () => {
		// Render the SegmentedControl component with a disabled SegmentedControlButton
		render(
			<SegmentedControl name="country">
				<SegmentedControlButton value="China" isDisabled={true}>
					China
				</SegmentedControlButton>
			</SegmentedControl>,
		)

		// Check if the SegmentedControl label is rendered
		expect(screen.getByTestId("segmented-control-label")).toBeInTheDocument()
	})

	// Test for rendering a SegmentedControlButton with aria-label
	test("Renders option aria-label", () => {
		// Render the SegmentedControl component with a SegmentedControlButton
		// that has an aria-label
		render(
			<SegmentedControl name="country">
				<SegmentedControlButton
					value="India"
					ariaLabel="Aria-label Sample text"
				>
					India
				</SegmentedControlButton>
			</SegmentedControl>,
		)

		// Check if the specified aria-label text is rendered
		expect(screen.queryByText("Aria-label Sample text")).toBeInTheDocument()
	})
})
