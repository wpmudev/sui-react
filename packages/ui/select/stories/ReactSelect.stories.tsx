import React from "react"
import { FormField } from "@wpmudev/sui-form-field"

// Import required component(s).
import { Select as StandardSelect, MultiSelect, SelectBaseProps } from "../src"

// Import documentation main page.
import docs from "./ReactSelect.mdx"

const options = [
	{
		icon: "Settings",
		id: "option-1",
		label: "Option 1",
	},
	{
		icon: "Settings",
		id: "option-2",
		label: "Option 2",
	},
	{
		icon: "Settings",
		id: "option-3",
		label: "Option 3",
	},
	{
		icon: "Settings",
		id: "option-4",
		label: "Option 4",
	},
	{
		icon: "Settings",
		id: "option-5",
		label: "Option 5",
	},
	{
		icon: "Settings",
		id: "option-6",
		label: "Option 6",
	},
	{
		icon: "Settings",
		id: "option-7",
		label: "Option 7",
	},
	{
		icon: "Settings",
		id: "option-8",
		label: "India",
	},
]

// Build "Select" story.
const Select = ({
	example,
	errorMessage,
	isSmall,
	isDisabled,
	isSearchable,
	...props
}: {
	example: string
	errorMessage: string
	color?: string
} & SelectBaseProps) => {
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
					{"select" === example && (
						<FormField
							id="select"
							label="Label"
							helper="Description"
							error={errorMessage}
							isSmall={isSmall}
							isDisabled={isDisabled}
						>
							<StandardSelect
								{...props}
								_htmlProps={{ "data-testtttt": "20" }}
								{...(isSearchable && {
									isSearchable,
									label: "Search...",
								})}
							/>
						</FormField>
					)}
					{"multi-select" === example && (
						<FormField
							id="select"
							label="Label"
							helper="Description"
							error={errorMessage}
							isSmall={isSmall}
							isDisabled={isDisabled}
						>
							<MultiSelect
								{...props}
								// optionAppreance={(option, rawOption) => {
								// 	return (
								// 		<div
								// 			style={{
								// 				alignItems: "center",
								// 				display: "flex",
								// 				width: "100%",
								// 				backgroundColor: rawOption?.isHovered ? "red" : "white",
								// 			}}
								// 		>
								// 			{option}
								// 			<span>Hellow</span>
								// 		</div>
								// 	)
								// }}
							/>
						</FormField>
					)}
				</div>
			</div>
		</div>
	)
}

Select.args = {
	example: "select",
	id: "id-1",
	label: "Select",
	isError: false,
	errorMessage: "Error message",
	isDisabled: false,
	isSmall: false,
	isSearchable: false,
	options,
}

Select.argTypes = {
	example: {
		name: "Example",
		options: ["select", "multi-select"],
		control: {
			type: "select",
			labels: {
				select: "Example: Select",
				"multi-select": "Example: Multiselect",
			},
		},
	},
	id: {
		name: "For (select ID)",
		control: {
			type: "text",
		},
	},
	customWidth: {
		name: "Custom Width",
		control: {
			type: "number",
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
	isSearchable: {
		name: "Searchable",
		control: "boolean",
		if: {
			arg: "example",
			eq: "select",
		},
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
