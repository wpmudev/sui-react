import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"

import { Sidebar, SidebarItem, SidebarItemProps } from "../src"

describe("@wpmudev/sui-sidebar", () => {
	const Items: SidebarItemProps[] = [
		{ title: "General", url: "#", icon: "Settings" },
		{ title: "Integrations", url: "#", icon: "Link" },
		{ title: "Configs", icon: "Config", url: "#" },
		{
			title: "Data",
			url: "#",
			icon: "Refresh",
			isDisabled: true,
		},
	]

	// Test to ensure that the Sidebar component renders correctly
	it("renders correctly", () => {
		render(<Sidebar />)

		// Assert that the sidebar is visible
		expect(screen.getByTestId("sidebar")).toBeVisible()
	})

	// Test to ensure that all SidebarItems are rendered correctly
	it("renders all SidebarItem correctly", async () => {
		// Create an array of SidebarItems to render
		const itemsToRender = Items.map(
			({ title, url, icon, isDisabled }, index) => (
				<SidebarItem
					key={index}
					title={title}
					url={url}
					isActive={index === 0}
					onClick={(option: string) => jest.fn()}
					icon={icon}
					action={null}
					isDisabled={isDisabled}
				/>
			),
		)

		render(<Sidebar>{itemsToRender}</Sidebar>)

		// Find all SidebarItems by their test id
		const itemCounts = await screen.findAllByTestId("sidebar-item")

		// Assert that the correct number of SidebarItems were rendered
		expect(itemCounts).toHaveLength(itemsToRender.length)
	})

	it("SidebarItem props work well", async () => {
		// Create an array of SidebarItems to render
		const itemsToRender = Items.map(
			({ title, url, icon, isDisabled }, index) => (
				<SidebarItem
					key={index}
					title={title}
					url={url}
					isActive={index === 0}
					onClick={(option: string) => jest.fn()}
					icon={icon}
					action={null}
					isDisabled={isDisabled}
				/>
			),
		)

		render(<Sidebar>{itemsToRender}</Sidebar>)

		const sidebarItems = await screen.findAllByTestId("sidebar-item")
		// active
		const activeItem = sidebarItems[0]
		expect(activeItem).toBeInTheDocument()
		expect(activeItem).toHaveClass("sui-sidebar__item--active")

		// not active
		const notActiveItem = sidebarItems[1]
		expect(notActiveItem).not.toHaveClass("sui-sidebar__item--active")

		// disabled item
		const disabledItem = sidebarItems[3]
		expect(disabledItem).toHaveClass("sui-sidebar__item--disabled")

		// Check if the text of the first item matches the title in the Items array
		expect(screen.getByText(Items[0].title)).toBeInTheDocument()
	})
})
