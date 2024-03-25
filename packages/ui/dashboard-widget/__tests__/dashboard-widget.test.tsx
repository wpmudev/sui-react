import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { DashboardWidget } from "../src"

describe("@wpmudev/sui-dashboard-widget", () => {
	it("renders correctly with custom content and action buttons", () => {
		// Define the action buttons and custom content
		const actions = "__ACTION_BUTTONS__"
		const customContent = "__CUSTOM_CONTENT__"

		// Render the DashboardWidget component with specified props
		render(
			<DashboardWidget actions={[actions]}>{customContent}</DashboardWidget>,
		)

		// Ensure that the DashboardWidget component is in the document
		expect(screen.getByTestId("dashboard-widget")).toBeInTheDocument()
		// Ensure that the action buttons are visible
		expect(screen.getByText(actions)).toBeVisible()
		// Ensure that the custom content is visible
		expect(screen.getByText(customContent)).toBeVisible()
	})

	it("renders title and description correctly", () => {
		// Define the title and description
		const title = "__TITLE__"
		const desc = "__DESC__"

		// Render the DashboardWidget component with title and description
		render(<DashboardWidget title={title} description={desc} />)

		// Ensure that the title is visible
		expect(screen.getByText(title)).toBeVisible()
		// Ensure that the description is visible
		expect(screen.getByText(desc)).toBeVisible()
	})

	it("applies 'isExpanded' prop correctly", () => {
		// Render the DashboardWidget component with the isExpanded prop set to true
		render(<DashboardWidget isExpanded={true} />)

		// Ensure that the DashboardWidget has the 'sui-dashboard-widget--expanded' class
		expect(screen.getByTestId("dashboard-widget")).toHaveClass(
			"sui-dashboard-widget--expanded",
		)
	})

	it("applies 'isDisabled' prop correctly", () => {
		// Render the DashboardWidget component with the isDisabled prop set to true
		render(<DashboardWidget isDisabled={true} />)

		// Ensure that the DashboardWidget has the 'sui-dashboard-widget--disabled' class
		expect(screen.getByTestId("dashboard-widget")).toHaveClass(
			"sui-dashboard-widget--disabled",
		)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<DashboardWidget />)
	})
})
