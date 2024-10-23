import React from "react"
import "@testing-library/jest-dom"
import { render, screen, prettyDOM, fireEvent } from "@testing-library/react"
import { a11yTest } from "@wpmudev/sui-dev-utils"
import { TreeView, TreeViewGroup, TreeViewItem, TreeViewProps } from "../src"

describe("@wpmudev/sui-tree-view", () => {
	const renderComponent = (props: TreeViewProps) => {
		return (
			<TreeView {...props}>
				<TreeViewGroup icon="Bell" id="group-1" title="Tree Group">
					<TreeViewGroup id="group-2" title="Tree Group">
						<TreeViewItem id="item-1">Tree Item</TreeViewItem>
						<TreeViewItem id="item-2">Tree Item</TreeViewItem>
						<TreeViewItem id="item-3" isChecked={true}>
							Tree Item
						</TreeViewItem>
						<TreeViewGroup id="group-4" title="Tree Group">
							<TreeViewItem id="item-4">Tree Item</TreeViewItem>
							<TreeViewItem id="item-5">Tree Item</TreeViewItem>
							<TreeViewItem id="item-6">Tree Item</TreeViewItem>
						</TreeViewGroup>
					</TreeViewGroup>
					<TreeViewItem id="item-7">Tree Item</TreeViewItem>
					<TreeViewItem id="item-8">Tree Item</TreeViewItem>
					<TreeViewItem id="item-9">Tree Item</TreeViewItem>
					<TreeViewGroup id="group-5" title="Tree Group">
						<TreeViewItem id="item-10">Tree Item</TreeViewItem>
						<TreeViewItem id="item-11">Tree Item</TreeViewItem>
						<TreeViewItem id="item-12">Tree Item</TreeViewItem>
					</TreeViewGroup>
					<TreeViewGroup id="group-6" title="Tree Group">
						<TreeViewItem id="item-13">Tree Item</TreeViewItem>
						<TreeViewItem id="item-14">Tree Item</TreeViewItem>
						<TreeViewItem id="item-15">Tree Item</TreeViewItem>
					</TreeViewGroup>
					<TreeViewItem id="item-16" isDisabled={true}>
						Tree Item
					</TreeViewItem>
					<TreeViewItem id="item-17">Tree Item</TreeViewItem>
				</TreeViewGroup>
			</TreeView>
		)
	}

	it("renders correctly without allowCheck", () => {
		// Render the TreeView component without allowCheck
		const { container } = render(renderComponent({}))

		// Ensure that the tree-view element is in the document
		expect(screen.getByTestId("tree-view")).toBeInTheDocument()
		// Verify that the sui-checkbox element is not present when allowCheck is false
		expect(container.querySelector(".sui-checkbox")).not.toBeInTheDocument()
	})

	it("renders with allowCheck", () => {
		// Render the TreeView component with allowCheck set to true
		const { container } = render(renderComponent({ allowCheck: true }))

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
			<TreeView>
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

	// Checkboxes tests
	it("Checboxes work as expected", () => {
		const { container } = render(
			<TreeView allowCheck={true}>
				<TreeViewGroup id="group-1" title="Tree Group">
					<TreeViewGroup id="group-2" title="Tree Group">
						<TreeViewItem id="item-1" isDisabled={true}>
							Tree Item
						</TreeViewItem>
						<TreeViewItem id="item-2" isDisabled={true}>
							Tree Item
						</TreeViewItem>
						<TreeViewGroup id="group-3" title="Tree Group">
							<TreeViewItem id="item-4">Tree Item</TreeViewItem>
							<TreeViewItem id="item-5">Tree Item</TreeViewItem>
							<TreeViewItem id="item-6">Tree Item</TreeViewItem>
						</TreeViewGroup>
					</TreeViewGroup>
				</TreeViewGroup>
			</TreeView>,
		)

		/*
		 * Clicking on an item checkbox
		 */
		const ItemFourCheckbox = container
			.querySelector("#item-4")
			?.querySelector(".sui-checkbox")

		fireEvent.click(ItemFourCheckbox as Element)

		// expect the checkbox of item-4 to be checked
		expect(ItemFourCheckbox).toHaveClass("sui-checkbox--checked")

		// Expect group-3 & group-1 state to be indeterminate
		const GroupThreeCheckbox = container
			.querySelector("#group-3")
			?.querySelector(".sui-checkbox")
		const GroupOneCheckbox = container
			.querySelector("#group-1")
			?.querySelector(".sui-checkbox")

		expect(GroupThreeCheckbox).toHaveClass("sui-checkbox--indeterminate")
		expect(GroupOneCheckbox).toHaveClass("sui-checkbox--indeterminate")

		/*
		 * Clicking on group parent will select all items
		 */
		fireEvent.click(GroupOneCheckbox as Element)

		const allCheckboxes = container.querySelectorAll(".sui-checkbox")

		allCheckboxes.forEach((checkbox) => {
			expect(checkbox).toHaveClass("sui-checkbox--checked")
		})
	})
})
