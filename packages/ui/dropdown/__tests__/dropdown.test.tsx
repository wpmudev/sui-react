import React, { useRef } from "react"
import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { Dropdown, DropdownRefProps } from "../src"
import { MenuGroupProps, MenuItemProps } from "../src/dropdown.types"

describe("@wpmudev/sui-dropdown", () => {
	// Common props for the Dropdown component
	const props = {
		label: "__MENU_BUTTON__",
		isSmall: false,
		iconOnly: false,
		onMenuClick: jest.fn(),
		children: "__BODY_CONTENT__",
		menu: [
			{
				id: "plugin-variants",
				label: "Plugin Variations",
				menus: [
					{
						id: "menu-ivt",
						label: "IVT",
						props: {
							icon: "PluginIvt",
							variation: "ivt",
						},
					},
				],
			},
		] as Array<MenuItemProps | MenuGroupProps>,
	}

	it("renders correctly", () => {
		render(<Dropdown {...props} />)

		// Verify that the Dropdown component is in the document
		expect(screen.getByTestId("dropdown")).toBeInTheDocument()
	})

	it("custom trigger button works correctly", () => {
		const openBtnTitle = "__OPEN_BTN_TITLE__"

		const DropdownWithTrigger = () => {
			const ref = useRef<DropdownRefProps | null>(null)
			return (
				<Dropdown
					{...props}
					ref={ref}
					trigger={
						<Button
							onClick={() => {
								ref?.current?.toggle()
							}}
						>
							{openBtnTitle}
						</Button>
					}
				/>
			)
		}

		render(<DropdownWithTrigger />)
		const btn = screen.getByText(openBtnTitle)
		const openClassName = "sui-dropdown--open"

		// The dropdown should not be open by default
		expect(screen.getByTestId("dropdown")).not.toHaveClass(openClassName)

		// Open the dropdown
		fireEvent.click(btn)
		expect(screen.getByTestId("dropdown")).toHaveClass(openClassName)

		// Close the dropdown
		fireEvent.click(btn)
		expect(screen.getByTestId("dropdown")).not.toHaveClass(openClassName)
	})

	it("applies 'isSmall' class when isSmall prop is true", () => {
		render(<Dropdown {...props} isSmall={true} />)

		// Verify that the 'isSmall' class is applied to the Dropdown
		expect(screen.getByTestId("dropdown")).toHaveClass("sui-dropdown--sm")
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Dropdown {...props} />)
	})
})
