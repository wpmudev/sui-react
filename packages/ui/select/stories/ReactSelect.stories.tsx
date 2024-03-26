import React, { useState } from "react"
import { FormField } from "@wpmudev/sui-form-field"
import { useValidation } from "@wpmudev/sui-hooks"

// Import required component(s).
import {
	Select as StandardSelect,
	MultiSelect,
	SelectVariable,
	SelectBaseProps,
	SelectOptionType,
} from "../src"

// Import documentation main page.
import docs from "./ReactSelect.mdx"

const options = [
	{
		id: "option-1",
		label: "Option 1",
		isSelected: false,
	},
	{
		id: "option-2",
		label: "Option 2",
		isSelected: false,
	},
	{
		id: "option-3",
		label: "Option 3",
		isSelected: false,
	},
	{
		id: "option-4",
		label: "Option 4",
		isSelected: false,
	},
	{
		id: "option-5",
		label: "Option 5",
		isSelected: false,
	},
	{
		id: "option-6",
		label: "Option 6",
		isSelected: false,
	},
	{
		id: "option-7",
		label: "Option 7",
		isSelected: false,
	},
	{
		id: "option-8",
		label: "India",
		isSelected: false,
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

	const [asyncOptions, setAsyncOptions] = useState<SelectOptionType[]>([])
	const [optionsAPILimit, setOptionsAPILimit] = useState(0)

	const validation = (value) => {
		if (value.id === "option-2") {
			return "You should not choose option 2"
		}
	}

	const [status, validationProps] = useValidation(
		[
			{
				required: true,
				message: "This field is required",
			},
			{
				validator: validation,
			},
		],
		{
			validateOnMount: true,
		},
	)

	const perPage = 10

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyle}>
					{"select" === example && (
						<FormField
							id="select"
							label="Label"
							helper="Description"
							//error={errorMessage}
							isSmall={isSmall}
							isDisabled={isDisabled}
							error={status.error}
						>
							<StandardSelect
								{...props}
								{...(isSearchable && {
									isSearchable,
									label: "Search...",
								})}
								options={options?.map((option) => ({
									...option,
									...(isSearchable && {
										searchLabel: option.label,
									}),
									props: { icon: "Settings" },
								}))}
								isError={status.isError}
								{...validationProps}
							/>
						</FormField>
					)}
					{"select-async" === example && (
						<FormField
							id="select"
							label="Label"
							helper="Description"
							error={errorMessage}
							isSmall={isSmall}
							isDisabled={isDisabled}
						>
							<StandardSelect
								customWidth={props.customWidth}
								isError={props.isError}
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
							<MultiSelect {...props} />
						</FormField>
					)}
					{"select-variable" === example && (
						<FormField
							id="select"
							label="Label"
							helper="Description"
							error={errorMessage}
							isSmall={isSmall}
							isDisabled={isDisabled}
						>
							<SelectVariable
								{...props}
								label="Select variable"
								options={[
									{
										id: "view-form",
										label: "View form",
										props: {
											variable: "{tag}",
											description: "Short description",
										},
									},
									{
										id: "edit-form",
										label: "Edit form",
										props: {
											variable: "{tag}",
											description: "Short description",
										},
									},
									{
										id: "duplicate-form",
										label: "Duplicate form",
										props: {
											variable: "{tag}",
											description: "Short description",
										},
									},
									{
										id: "delete-form",
										label: "Delete form",
										props: {
											variable: "{tag}",
											description: "Short description",
										},
									},
								]}
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
		options: ["select", "select-async", "select-variable", "multi-select"],
		control: {
			type: "select",
			labels: {
				select: "Example: Select",
				"select-async": "Example: Select Async",
				"select-variable": "Example: Select Variable",
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
