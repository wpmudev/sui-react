import React from "react"

import "@testing-library/jest-dom"
import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Select, SelectBaseProps } from "../src"
import { setupServer } from "msw/node"
import { rest } from "msw"

const AsyncSelect = () => {
	const perPage = 10

	return (
		<Select
			_dropdownProps={{
				type: "select",
				isAsync: true,
				allowSearch: true,
				searchPlaceholder: "Search...",
				asyncOptions: {
					perPage,
				},
				getOptions: async (
					search: string,
					{ page }: any,
					prevLoadedItems = [],
				) => {
					// calculate how many items to skip
					const skip = page * perPage - 10
					// store all menu items here
					const items: SelectBaseProps["options"] = []
					const baseAPI = `https://dummyjson.com/products/search`
					let total = 0

					// fetch data from API
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
				},
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

describe("@wpmudev/sui-select", () => {
	const props: SelectBaseProps = {
		id: "standard-select",
		label: "Select",
		options: [
			{
				icon: "Settings",
				id: "option-1",
				label: "Option 1 is the option.",
				isSelected: false,
			},
			{
				icon: "Settings",
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

		// Expect the select element to be in the document
		expect(screen.getByTestId("select")).toBeInTheDocument()
	})

	// Dropdown open when clicked
	it("Gets opened when clicked", () => {
		// Render the component
		render(<Component {...props} />)

		// Get the "select" element
		const select = screen.getByTestId("select")

		// Expect the "select" element to be in the document
		expect(select).toBeInTheDocument()

		// Select header element
		const selectHeader = select.querySelector(".sui-accessible-cta")

		// Click on the select element header
		fireEvent.click(selectHeader as Element)

		// Expect the "select"  to be opened
		expect(select).toHaveClass("sui-select--open")
	})

	// multi-select variation test
	it("multi-select works as expected", () => {
		// Render the component
		render(<Component {...props} isMultiSelect={true} />)

		// Get the "select" element
		const select = screen.getByTestId("select")

		// Expect the type to be multi-select
		expect(select).toHaveClass("sui-select--multiselect")

		// Open the "select" element
		const selectHeader = select.querySelector(".sui-accessible-cta")
		fireEvent.click(selectHeader as Element)

		// Get options elements
		const options = select.querySelectorAll(".sui-dropdown__menu-item")
		const selectAll = options[0]
		const firstOption = options[1]
		const secondOption = options[2]
		const firstOptionCta = firstOption.querySelector(".sui-accessible-cta")
		const secondOptionCta = secondOption.querySelector(".sui-accessible-cta")

		const firstOptionText = firstOption.textContent
		const secondOptionText = secondOption.textContent

		const selectAllCheckbox = selectAll.querySelector(".sui-checkbox")

		// Clicking on the first option to select it
		fireEvent.click(firstOptionCta as Element)

		// Expect selectAllCheckbox to be indeterminate
		expect(selectAllCheckbox).toHaveClass("sui-checkbox--indeterminate")

		// Clicking on the second option to select it
		fireEvent.click(secondOptionCta as Element)

		// Expect selectAllCheckbox to be selected as all options are selected
		expect(selectAllCheckbox).toHaveClass("sui-checkbox--checked")

		// Two elements will appear for the selected options
		const selectedOptions = select.querySelectorAll(
			".sui-select__selected-options",
		)

		// Expect the same options to be selected
		expect((selectedOptions[0] as Element).textContent).toBe(firstOptionText)
		expect((selectedOptions[1] as Element).textContent).toBe(secondOptionText)

		// Deselect all elements
		fireEvent.click(selectAllCheckbox as Element)

		// Expect no element to be selected
		expect(
			select.querySelectorAll(".sui-select__selected-options"),
		).toHaveLength(0)

		expect(selectAllCheckbox).not.toHaveClass("sui-checkbox--checked")

		expect(firstOption.querySelector(".sui-checkbox")).not.toHaveClass(
			"sui-checkbox--checked",
		)
		expect(secondOption.querySelector(".sui-checkbox")).not.toHaveClass(
			"sui-checkbox--checked",
		)
	})

	// Search variation test
	it("search variation works as expected", () => {
		// Render the component
		const { container } = render(<Component {...props} isSearchable={true} />)

		// Get the "select" element
		const select = screen.getByTestId("select")

		// Get the input element in the select
		const input = select.querySelector(".sui-input__input")

		// Simulate typing into the input field
		fireEvent.change(input as Element, {
			target: { value: "Option 1" },
		})

		// Expect only one option to be found
		expect(container.querySelectorAll(".sui-select__dropdown")).toHaveLength(1)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component {...props} />)
	})

	// Async features works correctly
	describe("Async features works correctly", () => {
		// Renders correctly
		it("Async variation renders correctly", () => {
			render(<AsyncSelect />)

			// Verify that the Dropdown component is in the document
			expect(screen.getByTestId("select")).toBeInTheDocument()
		})

		// Displays asynchronous options
		it("Should display asynchronous options", async () => {
			const { container } = render(<AsyncSelect />)

			// Click to open the select
			const select = container.querySelector(".sui-accessible-cta")
			fireEvent.click(select as Element)

			await waitFor(() => {
				expect(screen.getByText("iPhone 13 Pro Max")).toBeInTheDocument()
				expect(screen.getByText("Galaxy S21 Ultra")).toBeInTheDocument()
				expect(screen.getByText("Pixel 6 Pro")).toBeInTheDocument()
			})
		})

		// Search works correctly
		it("Search feature works correctly", async () => {
			const { container } = render(<AsyncSelect />)

			// Click to open the select
			const select = container.querySelector(".sui-accessible-cta")
			fireEvent.click(select as Element)

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
