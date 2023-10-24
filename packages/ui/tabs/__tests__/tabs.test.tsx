import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import { TabNav, TabNavItem, TabPanel, TabPanelItem, Tabs } from "../src"

describe("@wpmuev/sui-tabs", () => {
	const tabTitle = "__TAB_TITLE__"
	const childContent = "__TAB_CHILDREN__"

	it("renders correctly", () => {
		render(
			<Tabs>
				<TabNav>
					<TabNavItem>{tabTitle}</TabNavItem>
				</TabNav>
				<TabPanel>
					<TabPanelItem>{childContent}</TabPanelItem>
				</TabPanel>
			</Tabs>,
		)

		// Ensure that the Tabs component is in the document
		expect(screen.getByTestId("tabs")).toBeInTheDocument()
	})

	it("applies isDisabled to TabNavItem correctly", () => {
		render(
			<Tabs>
				<TabNav>
					<TabNavItem isDisabled={true}>{tabTitle}</TabNavItem>
				</TabNav>
				<TabPanel>
					<TabPanelItem>{childContent}</TabPanelItem>
				</TabPanel>
			</Tabs>,
		)

		// Ensure that the TabNavItem has the 'sui-tab__nav-item--disabled' class
		expect(screen.getByRole("tab")).toHaveClass("sui-tab__nav-item--disabled")
	})
})
