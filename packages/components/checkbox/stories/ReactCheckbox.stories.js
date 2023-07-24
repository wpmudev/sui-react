import React from "react"

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
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiCheckbox {...args} />
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
}

// Story props settings
Checkbox.argTypes = {
	defaultValue: {
		table: {
			disable: true,
		},
	},
}
