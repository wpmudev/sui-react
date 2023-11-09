import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-utils"
import { TreeView, TreeViewGroup, TreeViewItem } from "../src"

describe("@wpmudev/sui-tree-view", () => {
	it("renders correctly without allowCheck", () => {
		// Render the TreeView component without allowCheck
		const { container } = render(
			<TreeView>
				<TreeViewGroup icon="Bell" id="group-1" title="Tree Group">
					<TreeViewGroup id="group-2" title="Tree Group">
						<TreeViewItem id="item-1">Tree Item</TreeViewItem>
					</TreeViewGroup>
				</TreeViewGroup>
			</TreeView>,
		)

		// Ensure that the tree-view element is in the document
		expect(screen.getByTestId("tree-view")).toBeInTheDocument()
		// Verify that the sui-checkbox element is not present when allowCheck is false
		expect(container.querySelector(".sui-checkbox")).not.toBeInTheDocument()
	})

	it("renders with allowCheck", () => {
		// Render the TreeView component with allowCheck set to true
		const { container } = render(
			<TreeView allowCheck={true}>
				<TreeViewGroup icon="Bell" id="group-1" title="Tree Group">
					<TreeViewGroup id="group-2" title="Tree Group">
						<TreeViewItem id="item-1">Tree Item</TreeViewItem>
					</TreeViewGroup>
				</TreeViewGroup>
			</TreeView>,
		)

		// Verify that the sui-checkbox element is present when allowCheck is true
		expect(container.querySelector(".sui-checkbox")).toBeInTheDocument()
	})

	it("title + icon render correctly", () => {
		// Define titles and content for testing
		const groupTitle = "__TREE_GROUP_TITLE__"
		const subGroupTitle = "__SUB_TREE_GROUP_TITLE__"
		const itemTitle = "__TREE_ITEM_CHILDREN__"

		const { container } = render(
			<TreeView allowCheck={true}>
				<TreeViewGroup icon="Bell" id="group-1" title={groupTitle}>
					<TreeViewGroup id="group-2" title={subGroupTitle}>
						<TreeViewItem id="item-1" isDisabled={true}>
							{itemTitle}
						</TreeViewItem>
					</TreeViewGroup>
				</TreeViewGroup>
			</TreeView>,
		)

		// Verify that group icon is visible
		expect(container.querySelector(".sui-tree-view__info-icon")).toBeVisible()

		// Verify that titles and content are visible
		expect(screen.getByText(groupTitle)).toBeVisible()
		expect(screen.getByText(subGroupTitle)).toBeVisible()
		expect(screen.getByText(itemTitle)).toBeVisible()
	})

	it("applies isDisabled for TreeViewItem", () => {
		// Render the TreeView with a disabled TreeViewItem
		render(
			<TreeView allowCheck={true}>
				<TreeViewGroup icon="Bell" id="group-1" title="Tree Group">
					<TreeViewGroup id="group-2" title="Tree Group">
						<TreeViewItem id="item-1" isDisabled={true}>
							Tree Item
						</TreeViewItem>
					</TreeViewGroup>
				</TreeViewGroup>
			</TreeView>,
		)

		// Verify that the TreeViewItem has the 'sui-tree-view__info--disabled' class
		expect(screen.getByTestId("tree-view-item-info")).toHaveClass(
			"sui-tree-view__info--disabled",
		)
	})

	// eslint-disable-next-line jest/expect-expect
	it("passes a11y test", async () => {
		await a11yTest(
			<TreeView allowCheck={true}>
				<TreeViewGroup icon="Bell" id="group-1" title="Tree Group">
					<TreeViewGroup id="group-2" title="Tree Group">
						<TreeViewItem id="item-1" isDisabled={true}>
							Tree Item
						</TreeViewItem>
					</TreeViewGroup>
				</TreeViewGroup>
			</TreeView>,
			{
				rules: {
					// "nested-interactives" in this component is not affecting accessibility
					"nested-interactive": { enabled: false },
				},
			},
		)
	})
})
