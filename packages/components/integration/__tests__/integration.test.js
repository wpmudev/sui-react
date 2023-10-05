import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { Integration } from "../src"

describe("@wpmudev/sui-integration", () => {
	it("renders correctly with default state", () => {
		// Render the Integration component with default props
		render(<Integration onSettingsClick={jest.fn()} onClick={jest.fn()} />)

		// Ensure that the Integration component is in the document
		expect(screen.getByTestId("integration")).toBeInTheDocument()

		// Verify that the settings button is not present when not active
		const settingBtn = document.querySelector(".sui-integration-setting-btn")
		expect(settingBtn).not.toBeInTheDocument()
	})

	it("renders title, description, and additionalInfo correctly", () => {
		// Define title, description, and additionalInfo
		const title = "__TITLE__"
		const description = "__DESC__"
		const additionalInfo = "__ADDITIONAL_INFO__"

		// Render the Integration component with specified props
		render(
			<Integration
				onSettingsClick={jest.fn()}
				onClick={jest.fn()}
				title={title}
				description={description}
				additionalInfo={additionalInfo}
			/>,
		)

		// Ensure that title, description, and additionalInfo are present
		expect(screen.getByText(title)).toBeInTheDocument()
		expect(screen.getByText(description)).toBeInTheDocument()
		expect(screen.getByText(additionalInfo)).toBeInTheDocument()
	})

	it("applies 'isPro' prop correctly", () => {
		// Render the Integration component with isPro prop set to true
		render(
			<Integration
				onSettingsClick={jest.fn()}
				onClick={jest.fn()}
				isPro={true}
			/>,
		)

		// Verify that the "PRO" label is present
		expect(screen.getByText("PRO")).toBeInTheDocument()
	})

	it("renders the toggle component", () => {
		// Render the Integration component with isPro prop set to true
		const { container } = render(
			<Integration
				onSettingsClick={jest.fn()}
				onClick={jest.fn()}
				isPro={true}
			/>,
		)

		// Verify that the toggle component is present in the container
		const toggle = container.getElementsByClassName("sui-toggle")
		expect(toggle[0]).toBeInTheDocument()
	})

	it("setting button appears and invokes 'onSettingsClick'", () => {
		// Define props with an 'onSettingClick' function
		const props = {
			onSettingClick: jest.fn(),
		}

		// Render the Integration component with 'active' set to true
		render(
			<Integration
				active={true}
				onSettingsClick={props.onSettingClick}
				onClick={jest.fn()}
			/>,
		)

		// Verify that the setting button is present
		const settingBtn = document.querySelector(".sui-integration-setting-btn")
		expect(settingBtn).toBeInTheDocument()

		// Click the setting button and verify that 'onSettingsClick' is called
		fireEvent.click(settingBtn)
		expect(props.onSettingClick).toHaveBeenCalled()
	})
})
