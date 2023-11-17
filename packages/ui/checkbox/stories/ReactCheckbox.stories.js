import React, { useState } from "react"

// Import required modules
import { CheckboxGroup, Checkbox as SuiCheckbox } from "../src"

// Import documentation
import docs from "./ReactCheckbox.mdx"
import { CheckBoxGroups } from "../src/checkbox-wrapper"

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
export const Checkbox = ({ example, name, isInline, ...args }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	// for single checkbox (outside of CheckboxWrapper)
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
								/>
							),
							group: (
								<CheckBoxGroups
									onChange={(key, isChecked) => {
										console.log("debug", key, isChecked)
									}}
									commonCheckboxProps={{
										// it will be passed to all checkbox items
										name: "group-checkbox",
										...args,
									}}
								>
									<CheckboxGroup label="Group 1 Label" id="checkbox-group">
										<SuiCheckbox label="Checkbox Group Item 1" />
										<SuiCheckbox label="Checkbox Group Item 2" />
									</CheckboxGroup>
								</CheckBoxGroups>
							),
							nested: (
								<CheckBoxGroups
									onChange={(items) => {
										console.log("debug", items)
									}}
									commonCheckboxProps={{
										// it will be passed to all checkbox items
										name: "groups-checkbox",
										...args,
									}}
								>
									<CheckboxGroup
										title="Nested Group 1"
										hasSubItems={true}
										// isInline={true}
										commonProps={{}}
									>
										<SuiCheckbox label="Nested item 1" />
										<SuiCheckbox label="Nested item 2" />
									</CheckboxGroup>
									<CheckboxGroup
										title="Nested Group 2"
										hasSubItems={true}
										// isInline={true}
										commonProps={{}}
									>
										<SuiCheckbox label="Nested item 1" />
										<SuiCheckbox label="Nested item 2" />
										<SuiCheckbox label="Nested item 2" />
										<SuiCheckbox label="Nested item 2" />
									</CheckboxGroup>
								</CheckBoxGroups>
							),
							horizontal: (
								<CheckboxGroup
									label="Group 1 Label"
									id="checkbox-group"
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
	label: "Checkbox label",
	isLabelHidden: false,
	isSmall: false,
	isDisabled: false,
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
}
