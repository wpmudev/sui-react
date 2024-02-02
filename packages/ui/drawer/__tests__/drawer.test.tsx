import React from "react"
import "@testing-library/jest-dom"
// import { screen, render } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from "../src"

describe("@wpmudev/sui-drawer", () => {
	// @todo: needs test

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(<Drawer />)
	})
})
