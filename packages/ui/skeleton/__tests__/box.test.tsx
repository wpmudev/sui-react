import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Box, BoxGroup } from "../src"
import { a11yTest } from "@wpmudev/sui-utils"
import { IconsNamesType } from "@wpmudev/sui-icons"

describe("@wpmudev/box", () => {
	// Define the props for the BoxComponent
	const props: {
		title: string
		icon: IconsNamesType
		headerLeft: string
		headerRight: string
	} = {
		title: "__BOX_LABEL__", // Set the title
		icon: "PluginThc", // Set the icon
		headerLeft: "__HEADER_LEFT__", // Set the headerLeft content
		headerRight: "__HEADER_RIGHT__", // Set the headerRight content
	}

	// Define the content for the BoxComponent
	const boxContent = "__BODY__"

	// Define the BoxComponent as a functional component
	const BoxComponent = () => {
		return (
			<Box
				{...props}
				_htmlProps={{
					"data-testid": "box",
				}}
			>
				<BoxGroup>{boxContent}</BoxGroup>
			</Box>
		)
	}

	// Test case: Ensure that the BoxComponent renders correctly
	it("renders correctly", async () => {
		render(<BoxComponent />)
		expect(screen.getByTestId("box")).toBeInTheDocument()

		// Find all elements with the "box-group" data-testid
		const boxGroup = await screen.findAllByTestId("box-group")
		expect(boxGroup[0]).toBeInTheDocument()
	})

	// Test case: Ensure that the content within the BoxGroup renders correctly
	it("box group content renders correctly", () => {
		render(<BoxComponent />)
		expect(screen.getByText(boxContent)).toBeInTheDocument()
	})

	// Test case: Ensure that title, headerLeft, and headerRight render correctly
	it("title, headerLeft, and headerRight render correctly", () => {
		render(<BoxComponent />)

		// Check if the title, headerLeft, and headerRight elements are in the document
		expect(screen.getByText(props.title)).toBeInTheDocument()
		expect(screen.getByText(props.headerLeft)).toBeInTheDocument()
		expect(screen.getByText(props.headerRight)).toBeInTheDocument()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(
			<Box
				{...props}
				_htmlProps={{
					"data-testid": "box",
				}}
			>
				<BoxGroup>{boxContent}</BoxGroup>
			</Box>,
		)
	})
})
