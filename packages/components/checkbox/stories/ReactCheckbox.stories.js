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
					<CheckboxGroup
						isInline={isInline}
						name={name}
						isSmall={args?.isSmall}
						onChange={(data) => {
							console.log("test", data)
						}}
					>
						<SuiCheckbox value="in" {...args} />
						<SuiCheckbox value="usa" {...args} />
						{/* <CheckboxGroup
							isInline={isInline}
							name={name}
							asBlock={args?.asBlock}
							isSmall={args?.isSmall}
							onChange={(data) => {
								console.log("test", data)
							}}
						>
							<SuiCheckbox {...args} isChecked={isChecked} />
							<SuiCheckbox {...args} isChecked={isChecked} />
							<CheckboxGroup
								isInline={isInline}
								name={name}
								asBlock={args?.asBlock}
								isSmall={args?.isSmall}
								onChange={(data) => {
									console.log("test", data)
								}}
							>
								<SuiCheckbox
									{...args}
									isChecked={isChecked}
									onChange={(e) => {
										setIsChecked(e.target.checked)
									}}
								/>
								<SuiCheckbox
									{...args}
									isChecked={isChecked}
									onChange={(e) => {
										setIsChecked(e.target.checked)
									}}
								/>
							</CheckboxGroup>
						</CheckboxGroup>
						<CheckboxGroup
							isInline={isInline}
							name={name}
							asBlock={args?.asBlock}
							isSmall={args?.isSmall}
							onChange={(data) => {
								console.log("test", data)
							}}
						>
							<SuiCheckbox {...args} isChecked={isChecked} />
							<SuiCheckbox {...args} isChecked={isChecked} />
						</CheckboxGroup>
						<SuiCheckbox {...args} isChecked={isChecked} />
						<SuiCheckbox {...args} isChecked={isChecked} /> */}
					</CheckboxGroup>
				</div>
			</div>
		</div>
	)
}

// Story props defaults
Checkbox.args = {
	example: "single",
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
