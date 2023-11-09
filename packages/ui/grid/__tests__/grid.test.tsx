import React from "react"
import "@testing-library/jest-dom"
import { Row, Col } from "../src"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"

describe("@wpmudev/sui-grid", () => {
	const Component = () => (
		<Row>
			<Col size="4">
				<p>Column 1</p>
			</Col>
			<Col size="4">
				<p>Column 2</p>
			</Col>
			<Col size="4">
				<p>Column 3</p>
			</Col>
		</Row>
	)
	// Test: Renders the Grid Component
	it("renders the grid component", () => {
		render(<Component />)
		expect(screen.getByTestId("grid")).toBeVisible()
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Component />)
	})
})
