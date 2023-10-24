import React, { useState } from "react"

// Import required modules
import { Checkbox as SuiCheckbox } from "../src"

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
export const Checkbox = ({ ...args }) => {
	const [isChecked, setIsChecked] = useState(false)

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiCheckbox
						{...args}
						isChecked={isChecked}
						onChange={(e) => {
							setIsChecked(e.target.checked)
						}}
					/>
				</div>
			</div>
		</div>
	)
}

// Story props defaults
Checkbox.args = {
	label: "Checkbox label",
	isLabelHidden: false,
	isSmall: false,
	isDisabled: false,
	isIndeterminate: false,
}

// Story props settings
Checkbox.argTypes = {
	label: {
		name: "Label",
		control: {
			type: "text",
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
