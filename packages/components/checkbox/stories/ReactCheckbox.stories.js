import React, { useState } from "react"

// Import required modules
import { CheckboxGroup, Checkbox as SuiCheckbox } from "../src"

// Import documentation
import docs from "./ReactCheckbox.mdx"

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

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					{"nested" === example && (
						<CheckboxGroup
							isInline={isInline}
							name={name}
							isSmall={args?.isSmall}
							onChange={(data) => {
								console.log("test", data)
							}}
						>
							<SuiCheckbox value="in" {...args} />
							<SuiCheckbox value="usa" {...args} isIndeterminate={true} />
							<CheckboxGroup
								isInline={isInline}
								name={name}
								asBlock={args?.asBlock}
								isSmall={args?.isSmall}
								onChange={(data) => {
									console.log("test", data)
								}}
							>
								<SuiCheckbox {...args} value="in" />
								<SuiCheckbox {...args} value="usa" isChecked={true} />
								<CheckboxGroup
									isInline={isInline}
									name={name}
									isSmall={args?.isSmall}
									onChange={(data) => {
										console.log("test", data)
									}}
								>
									<SuiCheckbox {...args} value="in" isChecked={true} />
									<SuiCheckbox {...args} value="usa" isChecked={true} />
								</CheckboxGroup>
							</CheckboxGroup>
						</CheckboxGroup>
					)}
					{"horizontal" === example && (
						<CheckboxGroup
							isInline={true}
							name={name}
							isSmall={args?.isSmall}
							onChange={(data) => {
								console.log("test", data)
							}}
						>
							<SuiCheckbox value="in" {...args} />
							<SuiCheckbox value="usa" {...args} />
						</CheckboxGroup>
					)}
					{"vertical" === example && (
						<CheckboxGroup
							isInline={false}
							name={name}
							isSmall={args?.isSmall}
							onChange={(data) => {
								console.log("test", data)
							}}
						>
							<SuiCheckbox value="in" {...args} />
							<SuiCheckbox value="usa" {...args} />
						</CheckboxGroup>
					)}
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
	isIndeterminate: false,
	isInline: false,
}

// Story props settings
Checkbox.argTypes = {
	example: {
		name: "Example",
		options: ["nested", "horizontal", "vertical"],
		control: {
			type: "select",
			labels: {
				nested: "Example: Nested",
				horizontal: "Example: Horizontal",
				vertical: "Example: Vertical",
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
	isIndeterminate: {
		name: "Is Indeterminate",
		control: {
			type: "boolean",
		},
	},
}
