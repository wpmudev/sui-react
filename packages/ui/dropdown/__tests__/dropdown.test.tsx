import React, { useRef } from "react"
import "@testing-library/jest-dom"
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { Dropdown, DropdownRefProps } from "../src"
import { MenuGroupProps, MenuItemProps } from "../src/dropdown.types"
import { setupServer } from "msw/node"
import { rest } from "msw"

// The AsyncDropdown to test
const AsyncDropdown = () => {
	const perPage = 10

	return (
		<Dropdown
			type="select"
			isAsync={true}
			label="Async Options"
			allowSearch={true}
			searchPlaceholder="Search..."
			asyncOptions={{
				perPage,
			}}
			getOptions={async (
				search: string,
				{ page }: any,
				prevLoadedItems = [],
			) => {
				const skip = page * perPage - 10
				const items: any = []
				const baseAPI = `https://dummyjson.com/products/search`
				let total = 0

				await fetch(
					`${baseAPI}?limit=${perPage}&skip=${skip}&total=50&q=${search}`,
				)
					.then((res) => res.json())
					.then((result) => {
						total = result.total

						result.products.forEach((item: any) => {
							items.push({
								id: item?.id,
								label: item?.title,
								isSelected: false,
							})
						})
					})

				return {
					items,
					hasMore: [...items, ...prevLoadedItems].length < 100,
				}
			}}
		/>
	)
}

// Mocking the server response
const server = setupServer(
	rest.get("https://dummyjson.com/products/search", (req, res, ctx) => {
		const search = req.url.searchParams.get("q")
		const products = [
			{ id: 1, title: "iPhone 13 Pro Max" },
			{ id: 2, title: "Galaxy S21 Ultra" },
			{ id: 3, title: "Pixel 6 Pro" },
		]

		const filteredProducts = products.filter((product) =>
			search
				? product.title.toLowerCase().includes(search.toLowerCase())
				: true,
		)

		return res(
			ctx.json({
				total: filteredProducts.length,
				products: filteredProducts,
			}),
		)
	}),
)

beforeAll(() => server.listen())
afterAll(() => server.close())
beforeEach(() => server.resetHandlers())

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

	describe("Async features works correctly", () => {
		// Renders correctly
		it("Async variation renders correctly", () => {
			render(<AsyncDropdown />)

			// Verify that the Dropdown component is in the document
			expect(screen.getByTestId("dropdown")).toBeInTheDocument()
		})

		// Displays asynchronous options
		it("Should display asynchronous options", async () => {
			render(<AsyncDropdown />)

			// Click to open the dropdown
			const dropdown = screen.getByTestId("button")
			fireEvent.click(dropdown)

			await waitFor(() => {
				expect(screen.getByText("iPhone 13 Pro Max")).toBeInTheDocument()
				expect(screen.getByText("Galaxy S21 Ultra")).toBeInTheDocument()
				expect(screen.getByText("Pixel 6 Pro")).toBeInTheDocument()
			})
		})

		// Search works correctly
		it("Search feature works correctly", async () => {
			render(<AsyncDropdown />)

			// Click to open the dropdown
			const dropdown = screen.getByTestId("button")
			fireEvent.click(dropdown)

			// Type in search input
			const searchInput = screen.getByPlaceholderText("Search...")
			fireEvent.change(searchInput, { target: { value: "Galaxy" } })

			await waitFor(() => {
				// Only "Galaxy S21 Ultra" should be displayed
				expect(screen.queryByText("iPhone 13 Pro Max")).not.toBeInTheDocument()
				expect(screen.getByText("Galaxy S21 Ultra")).toBeInTheDocument()
				expect(screen.queryByText("Pixel 6 Pro")).not.toBeInTheDocument()
			})
		})
	})
})
