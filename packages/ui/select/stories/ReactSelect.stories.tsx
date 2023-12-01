import React from "react"
import { FormField } from "@wpmudev/sui-form-field"

// Import required component(s).
import {
	Select as StandardSelect,
	SearchSelect,
	MultiSelect,
	SelectBaseProps,
} from "../src"

// Import documentation main page.
import docs from "./ReactSelect.mdx"

// Build "Select" story.
const Select = ({
	example,
	errorMessage,
	...props
}: { example: string } & SelectBaseProps) => {
	const boxStyle = {
		margin: 0,
		padding: "30px",
		border: "white" === props.color ? "1px solid #E6E6E6" : 0,
		borderRadius: "4px",
		background: "white" === props.color ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					<FormField
						id="select"
						label="Label"
						helper="Description"
						error={errorMessage}
					>
						{"select" === example && <StandardSelect {...props} />}
						{"search" === example && <SearchSelect {...props} />}
						{"multi-select" === example && <MultiSelect {...props} />}
					</FormField>
				</div>
			</div>
		</div>
	)
}

Select.args = {
	example: "select",
	id: "id-1",
	label: "Select",
	options: [
		{
			icon: "settings",
			id: "option-1",
			label: "Option 1 is the option.",
			isSelected: false,
		},
		{
			icon: "settings",
			id: "option-2",
			label: "Option 2",
			isSelected: false,
		},
		{
			icon: "settings",
			id: "option-3",
			label: "Option 3",
			isSelected: false,
		},
		{
			icon: "settings",
			id: "option-4",
			label: "Option 4",
			isSelected: false,
		},
		{
			icon: "settings",
			id: "option-5",
			label: "Option 5",
			isSelected: false,
		},
		{
			icon: "settings",
			id: "option-6",
			label: "Option 6",
			isSelected: false,
		},
		{
			icon: "settings",
			id: "option-7",
			label: "Option 7",
			isSelected: false,
		},
		{
			icon: "settings",
			id: "option-8",
			label: "India",
			isSelected: false,
		},
	],
	isError: false,
	errorMessage: "Error message",
	isDisabled: false,
	isSmall: false,
}

Select.argTypes = {
	example: {
		name: "Example",
		options: ["select", "multi-select", "search"],
		control: {
			type: "select",
			labels: {
				select: "Example: Select",
				"multi-select": "Example: Multiselect",
				search: "Example: Search",
			},
		},
	},
	id: {
		name: "For (select ID)",
		control: {
			type: "text",
		},
	},
	label: {
		name: "Label",
		control: {
			type: "text",
		},
	},
	options: {
		name: "Options",
	},
	isError: {
		name: "Error",
	},
	errorMessage: {
		name: "Error message",
		control: "text",
		if: {
			arg: "isError",
			eq: true,
		},
	},
	isDisabled: {
		name: "Disabled",
	},
	isSmall: {
		name: "Small",
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Forms/Select",
	component: Select,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { Select }
