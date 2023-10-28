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

	const [options, setOptions] = useState({})

	const handleCheckboxChange = (key, isChecked) => {
		setOptions((prevOptions) => {
			const updatedOptions = { ...prevOptions }

			const keys = key.split("-")
			let currentLevel = updatedOptions

			for (let i = 0; i < keys.length; i++) {
				const subKey = keys[i]

				if (i === keys.length - 1) {
					// Reached the final level, set the checkbox value
					currentLevel[subKey] = isChecked || true
				} else {
					// Ensure that this level is an object
					currentLevel[subKey] = currentLevel[subKey] || {}
					currentLevel = currentLevel[subKey]
				}
			}

			return updatedOptions
		})
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
							onChange={(key, isChecked) => {
								handleCheckboxChange(key, isChecked)
								// console.log(key, isChecked)
								// setOptions({ ...options, [key]: isChecked })
								console.log(options)
							}}
						>
							<SuiCheckbox
								{...args}
								itemKey="item1"
								value="in"
								isChecked={options.item1}
							/>
							<SuiCheckbox
								{...args}
								itemKey="group1"
								value="usa"
								isChecked={options.group1}
							/>
							<CheckboxGroup
								isInline={isInline}
								name={name}
								asBlock={args?.asBlock}
								isSmall={args?.isSmall}
							>
								<SuiCheckbox
									{...args}
									itemKey="group1-item2"
									value="in"
									isChecked={options.item2}
								/>
								<SuiCheckbox
									{...args}
									itemKey="group1-group2"
									value="usa"
									isChecked={options.group2}
								/>
								<CheckboxGroup
									isInline={isInline}
									name={name}
									isSmall={args?.isSmall}
								>
									<SuiCheckbox
										{...args}
										itemKey="group1-group2-item3"
										value="in"
										isChecked={options.item3}
									/>
									<SuiCheckbox
										{...args}
										itemKey="group1-group2-item4"
										value="usa"
										isChecked={options.item4}
									/>
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
							<SuiCheckbox value="uk" {...args} />
							<SuiCheckbox value="af" {...args} />
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
							<SuiCheckbox value="uk" {...args} />
							<SuiCheckbox value="af" {...args} />
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
