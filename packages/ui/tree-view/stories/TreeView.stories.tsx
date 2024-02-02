import React from "react"

// Import required component.
import { TreeView as SuiTreeView, TreeViewGroup, TreeViewItem } from "../src"

// Import documentation main page.
import docs from "./TreeView.mdx"

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Tree View",
	component: SuiTreeView,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Tag" story.
const TreeView = ({ ...args }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTreeView {...args}>
						<TreeViewGroup icon="Bell" id="group-1" title="Tree Group">
							<TreeViewGroup title="Tree Group">
								<TreeViewItem>Tree Item</TreeViewItem>
								<TreeViewItem>Tree Item</TreeViewItem>
								<TreeViewItem isChecked={true}>Tree Item</TreeViewItem>
								<TreeViewGroup title="Tree Group">
									<TreeViewItem>Tree Item</TreeViewItem>
									<TreeViewItem>Tree Item</TreeViewItem>
									<TreeViewItem>Tree Item</TreeViewItem>
								</TreeViewGroup>
							</TreeViewGroup>
							<TreeViewItem>Tree Item</TreeViewItem>
							<TreeViewItem>Tree Item</TreeViewItem>
							<TreeViewItem>Tree Item</TreeViewItem>
							<TreeViewGroup title="Tree Group">
								<TreeViewItem>Tree Item</TreeViewItem>
								<TreeViewItem>Tree Item</TreeViewItem>
								<TreeViewItem>Tree Item</TreeViewItem>
							</TreeViewGroup>
							<TreeViewGroup title="Tree Group">
								<TreeViewItem>Tree Item</TreeViewItem>
								<TreeViewItem>Tree Item</TreeViewItem>
								<TreeViewItem>Tree Item</TreeViewItem>
							</TreeViewGroup>
							<TreeViewItem isDisabled={true}>Tree Item</TreeViewItem>
							<TreeViewItem>Tree Item</TreeViewItem>
						</TreeViewGroup>
					</SuiTreeView>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
TreeView.args = {
	allowCheck: false,
	showIcons: false,
}

// Set controls for story arguments.
TreeView.argTypes = {
	allowCheck: {
		name: "Allow Check",
		control: {
			type: "boolean",
		},
	},
	showIcons: {
		name: "Show Icons",
		control: {
			type: "boolean",
		},
	},
}

// Publish required stories.
export { TreeView }
