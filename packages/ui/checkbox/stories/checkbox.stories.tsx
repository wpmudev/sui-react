import React, { useState } from "react"

// Import required modules
import { CheckboxGroup, Checkbox as SuiCheckbox, CheckBoxGroups } from "../src"

// Import documentation
import docs from "./checkbox.mdx"

// Default settings
export default {
	title: "SUI/Components/Forms/Checkbox",
	component: SuiCheckbox,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Checkbox = ({
	example,
	name,
	isInline,
	...args
}: {
	example: string
	name: string
	isInline: boolean
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	// For a single checkbox (outside of CheckboxWrapper)
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{
						{
							single: (
								<SuiCheckbox
									name="single-checkbox"
									id="single-checkbox"
									label="Single Checkbox"
									isChecked={isChecked}
									onChange={(e) => {
										setIsChecked(e.target.checked)
									}}
									{...args}
								/>
							),
							group: (
								<CheckboxGroup
									title="Group 1 Label"
									id="group-1"
									commonCheckboxProps={{
										// It will be passed to all checkbox items
										name: "group-checkbox",
										...args,
									}}
								>
									<SuiCheckbox id="checkbox-1" label="Checkbox Group Item 1" />
									<SuiCheckbox id="checkbox-2" label="Checkbox Group Item 2" />
								</CheckboxGroup>
							),
							nested: (
								<CheckBoxGroups
									commonCheckboxProps={{
										// It will be passed to all checkbox items
										name: "groups-checkbox",
										...args,
									}}
								>
									<CheckboxGroup
										title="Nested Group 1"
										hasSubItems={true}
										commonCheckboxProps={{}}
									>
										<SuiCheckbox
											id="checkbox-1"
											isChecked={true}
											label="Nested item 1"
										/>
										<SuiCheckbox id="checkbox-2" label="Nested item 2" />
									</CheckboxGroup>
									<CheckboxGroup
										title="Nested Group 2"
										hasSubItems={true}
										commonCheckboxProps={{}}
									>
										<SuiCheckbox label="Nested item 1" />
										<SuiCheckbox label="Nested item 2" />
										<SuiCheckbox label="Nested item 3" />
										<SuiCheckbox label="Nested item 4" />
									</CheckboxGroup>
								</CheckBoxGroups>
							),
							horizontal: (
								<CheckboxGroup
									title="Group 1 Label"
									isInline={true}
									commonCheckboxProps={{
										...args,
									}}
								>
									<SuiCheckbox label="Checkbox Group Item 1" />
									<SuiCheckbox label="Checkbox Group Item 2" />
								</CheckboxGroup>
							),
						}[example]
					}
				</div>
			</div>
		</div>
	)
}

// Story props defaults
Checkbox.args = {
	example: "nested",
	name: "countries",
	isLabelHidden: false,
	isSmall: false,
	isDisabled: false,
	isError: false,
}

// Story props settings
Checkbox.argTypes = {
	example: {
		name: "Example",
		options: ["single", "group", "nested", "horizontal"],
		control: {
			type: "select",
			labels: {
				single: "Example: Single",
				group: "Example: Group",
				nested: "Example: Nested",
				horizontal: "Example: Horizontal",
			},
		},
	},
	name: {
		name: "Name",
		control: "text",
	},
	defaultValue: {
		table: {
			disable: true,
		},
	},
	isLabelHidden: {
		name: "Label Hidden",
		control: {
			type: "boolean",
		},
	},
	isSmall: {
		name: "Small",
		control: {
			type: "boolean",
		},
	},
	isDisabled: {
		name: "Disabled",
		control: {
			type: "boolean",
		},
	},
	isError: {
		name: "Error",
		control: {
			type: "boolean",
		},
	},
}
