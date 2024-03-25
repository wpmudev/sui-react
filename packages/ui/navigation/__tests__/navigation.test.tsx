import React, { Fragment } from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Navigation } from "../src"

describe("@wpmudev/sui-navigation", () => {
	const Component = () => (
		<Navigation
			actions={[<div key={0}>ACTIONS list</div>]}
			brand={{
				title: "Smush Pro",
				description: "Description for Smush Pro",
			}}
			user={{
				user: {
					image: "https://avatars.githubusercontent.com/u/14994452?v=4",
					name: "John doe",
					email: "john.doe@incsub.com",
				},
				menu: [
					{
						id: "the-hub",
						label: "The Hub",
						props: {
							icon: "PluginDefender",
						},
					},
					{
						id: "product-roadmap",
						label: "Product Roadmap",
						props: {
							icon: "PluginSmush",
						},
					},
					{
						id: "product-roadmap",
						label: "Unlock Pro features",
						props: {
							icon: "PluginSmush",
							variation: "smush",
						},
					},
				],
			}}
		>
			CUSTOM CONTENT
		</Navigation>
	)

	beforeEach(() => {
		render(<Component />)
	})

	it("renders correctly", () => {
		expect(screen.getByTestId("navigation")).toBeInTheDocument()
	})

	it("brand prop renders correctly", () => {
		expect(screen.getByText("Smush Pro")).toBeVisible()
		expect(screen.getByText("Description for Smush Pro")).toBeVisible()
	})

	it("user prop renders correctly", () => {
		expect(screen.getByText("John doe")).toBeVisible()
		expect(screen.getByText("john.doe@incsub.com")).toBeVisible()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
